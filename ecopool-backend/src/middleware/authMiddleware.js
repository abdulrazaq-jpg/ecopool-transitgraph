import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // 1. Get the Authorization header
        const authHeader = req.headers.authorization;

        // 2. Check whether the token exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authentication required. Please log in."
            });
        }

        // 3. Extract the token
        const token = authHeader.split(" ")[1];

        // 4. Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 5. Attach the decoded user information to the request
        req.user = decoded;

        // 6. Move to the next middleware or controller
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });
    }
};

export default authMiddleware;