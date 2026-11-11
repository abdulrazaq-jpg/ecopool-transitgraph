import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        institutionalId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        password: {
            type: String,
            required: true,
            select: false
        },

        accountType: {
            type: String,
            required: true,
            enum: ["Student", "Faculty"]
        },

        contactNumber: {
            type: String,
            default: null
        },

        profilePhoto: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;