import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import studentIds from "../data/studentIds.js";
import facultyIds from "../data/facultyIds.js";

// Register a new user
export const registerUser = async (req, res, next) => {
    try {
        // 1. Get registration details from frontend
        const {
            fullName,
            email,
            institutionalId,
            password,
            accountType
        } = req.body;

        // 2. Verify institutional ID
        let approvedIds;

        if (accountType === "Student") {
            approvedIds = studentIds;
        } else if (accountType === "Faculty") {
            approvedIds = facultyIds;
        }

        if (!approvedIds.includes(institutionalId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid institutional ID for the selected account type."
            });
        }

        // 3. Check whether email or institutional ID already exists
        const existingUser = await User.findOne({
            $or: [
                { email },
                { institutionalId }
            ]
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(409).json({
                    success: false,
                    message: "Email is already registered."
                });
            }

            if (existingUser.institutionalId === institutionalId) {
                return res.status(409).json({
                    success: false,
                    message: "Institutional ID is already registered."
                });
            }
        }

        // 4. Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // 5. Create new user in MongoDB
        const newUser = await User.create({
            fullName,
            email,
            institutionalId,
            password: hashedPassword,
            accountType
        });

        // 6. Send successful response
        return res.status(201).json({
            success: true,
            message: "Registration successful!",
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                institutionalId: newUser.institutionalId,
                accountType: newUser.accountType
            }
        });

    } catch (error) {

        // Handle duplicate database entries
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email or institutional ID is already registered."
            });
        }

        // Forward unexpected errors to centralized error middleware
        next(error);
    }
};


// Login an existing user
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email and explicitly retrieve password
        const user = await User.findOne({ email }).select("+password");

        // Check whether user exists
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Compare entered password with stored hash
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Generate JWT after successful authentication
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                institutionalId: user.institutionalId,
                accountType: user.accountType
            }
        });

    } catch (error) {
        next(error);
    }
};

// Get currently authenticated user's details
export const getCurrentUser = async (req, res, next) => {
    try {
        // Find user using the ID stored in the verified JWT
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User no longer exists."
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                institutionalId: user.institutionalId,
                accountType: user.accountType
            }
        });

    } catch (error) {
        next(error);
    }
};