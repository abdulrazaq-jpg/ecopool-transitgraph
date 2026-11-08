import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        const formData = new FormData(event.currentTarget);

        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        // Password confirmation validation
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Frontend validation passed.
        // Actual registration will be implemented after backend integration.
        setSuccess(
            "Your details passed frontend validation. Account creation will be enabled after backend integration."
        );
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">

            <div className="max-w-7xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT PANEL */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 px-8 py-12 md:px-12 flex flex-col justify-between">

                    <div>

                        {/* Branding */}
                        <Link to="/" className="inline-flex items-center gap-2 mb-14">

                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">

                                <svg
                                    className="w-6 h-6 text-green-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>

                            </div>

                            <span className="text-3xl font-bold text-gray-900">
                                Eco<span className="text-green-600">Pool</span>
                            </span>

                        </Link>


                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">

                            Join Your

                            <span className="block text-green-700">
                                Campus Community
                            </span>

                        </h1>

                        <p className="text-3xl text-gray-700 font-bold">
                            Share rides. Save costs. Go green.
                        </p>

                        <div className="w-24 h-1 bg-green-600 mt-7"></div>

                    </div>


                    {/* SVG Illustration */}
                    <div className="mt-12 flex justify-center items-center">

                        <div className="w-full max-w-md bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-green-200/60 shadow-xs flex flex-col items-center justify-center text-green-700">

                            <svg
                                className="w-full h-56 text-green-600"
                                viewBox="0 0 500 300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >

                                {/* Background Decorative Shapes */}
                                <circle
                                    cx="250"
                                    cy="150"
                                    r="120"
                                    fill="#DCFCE7"
                                    opacity="0.6"
                                />

                                <path
                                    d="M50 230 Q 250 200 450 230"
                                    stroke="#86EFAC"
                                    strokeWidth="6"
                                    strokeDasharray="8 8"
                                />


                                {/* Modern Electric Car Graphic */}
                                <g transform="translate(100, 70)">

                                    {/* Car Shadow */}
                                    <ellipse
                                        cx="150"
                                        cy="155"
                                        rx="140"
                                        ry="12"
                                        fill="#166534"
                                        opacity="0.15"
                                    />

                                    {/* Car Body */}
                                    <path
                                        d="M40 110 L70 60 C85 35 110 30 150 30 L210 30 C245 30 260 45 275 65 L295 110 C310 110 320 120 320 135 L320 145 C320 150 315 155 310 155 L290 155 L10 155 L0 155 C-5 155 -10 150 -10 145 L-10 135 C-10 120 5 110 40 110 Z"
                                        fill="#16A34A"
                                    />

                                    {/* Car Roof & Windows */}
                                    <path
                                        d="M78 63 C88 43 105 38 140 38 L200 38 C230 38 245 48 258 63 Z"
                                        fill="#DCFCE7"
                                    />

                                    <path
                                        d="M145 42 L145 105 L72 105 C80 80 95 65 145 42 Z"
                                        fill="#BBF7D0"
                                    />

                                    <path
                                        d="M155 42 L155 105 L270 105 C260 80 245 65 155 42 Z"
                                        fill="#BBF7D0"
                                    />

                                    {/* Headlight & Taillight */}
                                    <path
                                        d="M295 120 C305 120 310 125 310 130 L290 130 Z"
                                        fill="#FEF08A"
                                    />

                                    <path
                                        d="M0 120 C-5 120 -10 125 -10 130 L10 130 Z"
                                        fill="#EF4444"
                                    />

                                    {/* Wheels */}
                                    <circle cx="65" cy="155" r="30" fill="#1E293B" />
                                    <circle cx="65" cy="155" r="16" fill="#94A3B8" />
                                    <circle cx="65" cy="155" r="6" fill="#FFFFFF" />

                                    <circle cx="235" cy="155" r="30" fill="#1E293B" />
                                    <circle cx="235" cy="155" r="16" fill="#94A3B8" />
                                    <circle cx="235" cy="155" r="6" fill="#FFFFFF" />

                                    {/* Eco Leaf Badge */}
                                    <path
                                        d="M140 125 C140 115 150 110 160 110 C160 120 150 125 140 125 Z"
                                        fill="#15803D"
                                    />

                                    <path
                                        d="M160 110 C170 110 175 120 175 125 C165 125 160 120 160 110 Z"
                                        fill="#22C55E"
                                    />

                                </g>


                                {/* Floating Location Pin */}
                                <g transform="translate(370, 40)">

                                    <path
                                        d="M20 0 C9 0 0 9 0 20 C0 35 20 50 20 50 C20 50 40 35 40 20 C40 9 31 0 20 0 Z"
                                        fill="#15803D"
                                    />

                                    <circle
                                        cx="20"
                                        cy="18"
                                        r="8"
                                        fill="#FFFFFF"
                                    />

                                </g>

                            </svg>

                            <p className="font-semibold text-lg mt-2 text-green-900">
                                Better Rides, Greener Campus
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT PANEL */}
                <div className="px-8 py-12 md:px-12 lg:px-14">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Create Your Account
                    </h2>

                    <p className="text-gray-600 mb-9">
                        Get started with EcoPool today
                    </p>


                    {/* Registration Form */}
                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >

                        {/* Full Name and Account Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div>

                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Account Type *
                                </label>

                                <select
                                    name="accountType"
                                    defaultValue=""
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                >

                                    <option value="" disabled>
                                        Select Account Type
                                    </option>

                                    <option value="student">
                                        Student
                                    </option>

                                    <option value="faculty">
                                        Faculty
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* Email Address */}
                        <div>

                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                                Email Address *
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="you@university.edu"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />

                        </div>


                        {/* Institutional ID */}
                        <div>

                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                                Institutional ID *
                            </label>

                            <input
                                type="text"
                                name="institutionalId"
                                placeholder="Enter your student or faculty ID"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />

                        </div>


                        {/* Password Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div>

                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Password *
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Confirm Password *
                                </label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                        </div>


                        {/* Error Message */}
                        {error && (
                            <div
                                className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3"
                                role="alert"
                            >
                                {error}
                            </div>
                        )}


                        {/* Validation Message */}
                        {success && (
                            <div
                                className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3"
                                role="status"
                            >
                                {success}
                            </div>
                        )}


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition-colors"
                        >
                            Create Account
                        </button>

                    </form>


                    {/* Login Link */}
                    <div className="border-t border-gray-200 mt-7 pt-6 text-center text-sm text-gray-600">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-green-700 font-semibold ml-2 hover:text-green-800"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}