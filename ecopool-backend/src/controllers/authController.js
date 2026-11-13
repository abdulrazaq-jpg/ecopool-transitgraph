import User from "../models/User.js";
import bcrypt from "bcrypt";

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