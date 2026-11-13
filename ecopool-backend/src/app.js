import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

// Create Express application
const app = express();

// Allow requests from the React frontend
app.use(cors({
    origin: "http://localhost:5173"
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "EcoPool backend is running"
    });
});

// Authentication routes
app.use("/api/auth", authRoutes);

app.use(errorHandler);

// Export application
export default app;