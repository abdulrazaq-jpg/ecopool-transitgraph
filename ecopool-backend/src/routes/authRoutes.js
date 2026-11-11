import express from "express";

import { registerUser } from "../controllers/authController.js";
import { registerValidator } from "../validators/authValidator.js";
import validate from "../middleware/validationMiddleware.js";

const router = express.Router();

// Registration route
router.post(
    "/register",
    registerValidator,
    validate,
    registerUser
);

export default router;