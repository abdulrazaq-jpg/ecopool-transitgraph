import express from "express";

import {
    registerUser,
    loginUser,
    getCurrentUser
} from "../controllers/authController.js";

import {
    registerValidator,
    loginValidator
} from "../validators/authValidator.js";

import validate from "../middleware/validationMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Registration route
router.post(
    "/register",
    registerValidator,
    validate,
    registerUser
);

// Login route
router.post(
    "/login",
    loginValidator,
    validate,
    loginUser
);

// Get currently authenticated user
router.get(
    "/me",
    authMiddleware,
    getCurrentUser
);

export default router;