import express from "express";
import authRoutes from "./routes/authRoutes.js";

// Create Express application
const app = express();

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

// Export application
export default app;