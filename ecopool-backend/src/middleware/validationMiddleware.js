import { validationResult } from "express-validator";

const validate = (req, res, next) => {

    // Collect validation errors
    const errors = validationResult(req);

    // Check whether errors exist
    if (!errors.isEmpty()) {

        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors.array()
        });
    }

    // Continue to the next middleware or controller
    next();
};

export default validate;