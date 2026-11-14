import { body } from "express-validator";

// Registration validation rules
export const registerValidator = [

    // Validate full name
    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full name is required.")
        .isLength({ min: 2 })
        .withMessage("Full name must contain at least 2 characters."),

    // Validate email
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please enter a valid email address.")
        .normalizeEmail(),

    // Validate institutional ID
    body("institutionalId")
        .trim()
        .notEmpty()
        .withMessage("Institutional ID is required."),

    // Validate password
    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({ min: 8 })
        .withMessage("Password must contain at least 8 characters."),

    // Validate confirm password
    body("confirmPassword")
        .notEmpty()
        .withMessage("Please confirm your password.")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match.");
            }
            return true;
        }),

    // Validate account type
    body("accountType")
        .notEmpty()
        .withMessage("Account type is required.")
        .isIn(["Student", "Faculty"])
        .withMessage("Account type must be Student or Faculty.")
];

// Login validation rules
export const loginValidator = [

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please enter a valid email address.")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required.")

];