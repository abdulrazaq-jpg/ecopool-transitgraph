
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("Please fill in all required fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost:8000/api/auth/login",
                {
                    email: formData.email,
                    password: formData.password
                }
            );

            // Extract token and user details

            const { token, user } = response.data;

            login(token, user, formData.rememberMe);

            // Redirect after successful login
            if (user.accountType === "Student") {
                navigate("/student-dashboard");
            } else if (user.accountType === "Faculty") {
                navigate("/faculty-dashboard");
            }

        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Login failed. Please check your credentials."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#effcf4] px-4 py-10 sm:px-8 lg:px-12">

            {/* Login Card */}
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-xl lg:grid-cols-2">

                {/* Left Panel */}
                <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f0fff5] to-[#d9fbe7] p-8 sm:p-12 lg:p-14">

                    {/* Logo */}
                    <Link to="/" className="flex w-fit items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a843] text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>

                        <span className="text-3xl font-bold tracking-tight text-[#111827]">
                            Eco<span className="text-[#00a843]">Pool</span>
                        </span>
                    </Link>

                    {/* Welcome Text */}
                    <div className="relative z-10 mt-14">
                        <h1 className="text-4xl font-extrabold leading-tight text-[#111827] sm:text-5xl">
                            Welcome{" "}
                            <span className="text-[#008b3d]">Back!</span>
                        </h1>

                        <p className="mt-4 text-xl font-semibold text-[#374151]">
                            Sign in to continue your journey
                        </p>

                        <div className="mt-6 h-1.5 w-24 rounded-full bg-[#00a843]" />
                    </div>

                    {/* Illustration */}
                    <div className="relative mt-12 flex justify-center">
                        <div className="absolute bottom-0 h-52 w-52 rounded-full bg-[#c7f7d9] opacity-70" />

                        <svg
                            viewBox="0 0 520 340"
                            className="relative z-10 w-full max-w-lg"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                        >
                            {/* Background hills */}
                            <path
                                d="M20 280 Q130 190 260 265 T500 260 V330 H20Z"
                                fill="#a7efbf"
                            />

                            {/* Campus building */}
                            <path
                                d="M190 145 L260 105 L330 145 V260 H190Z"
                                fill="#b9f4ce"
                            />
                            <path
                                d="M215 165 H240 V195 H215Z M280 165 H305 V195 H280Z"
                                fill="#70d99a"
                            />
                            <path
                                d="M245 220 H275 V260 H245Z"
                                fill="#70d99a"
                            />

                            {/* Trees */}
                            <path d="M75 210 V285 M430 205 V285" stroke="#168b4b" strokeWidth="8" />
                            <circle cx="75" cy="195" r="32" fill="#35c96b" />
                            <circle cx="430" cy="190" r="35" fill="#35c96b" />

                            {/* Location pin */}
                            <path
                                d="M385 70 C385 48 402 35 420 35 C438 35 455 48 455 70 C455 94 420 120 420 120 C420 120 385 94 385 70Z"
                                fill="#078b43"
                            />
                            <circle cx="420" cy="68" r="12" fill="white" />

                            {/* Car body */}
                            <path
                                d="M115 225 L145 160 Q155 140 185 140 H335 Q365 140 375 160 L405 225 V280 H115Z"
                                fill="#00a843"
                            />

                            {/* Car windows */}
                            <path
                                d="M165 165 Q175 150 195 150 H325 Q345 150 355 165 L370 205 H150Z"
                                fill="#c8f8d9"
                            />

                            {/* Window divider */}
                            <path d="M260 150 V205" stroke="#00a843" strokeWidth="8" />

                            {/* People */}
                            <circle cx="205" cy="178" r="15" fill="#08783c" />
                            <circle cx="315" cy="178" r="15" fill="#08783c" />
                            <path d="M185 205 Q205 180 225 205" fill="#08783c" />
                            <path d="M295 205 Q315 180 335 205" fill="#08783c" />

                            {/* Headlights */}
                            <rect x="125" y="225" width="35" height="18" rx="8" fill="white" />
                            <rect x="360" y="225" width="35" height="18" rx="8" fill="white" />

                            {/* Wheels */}
                            <rect x="145" y="270" width="45" height="35" rx="10" fill="#173c2b" />
                            <rect x="330" y="270" width="45" height="35" rx="10" fill="#173c2b" />

                            {/* Eco symbol */}
                            <path
                                d="M255 235 Q235 220 230 242 Q250 250 255 235Z"
                                fill="#c8f8d9"
                            />
                            <path
                                d="M255 235 Q275 215 282 238 Q264 250 255 235Z"
                                fill="#c8f8d9"
                            />
                            <path d="M255 235 V260" stroke="#c8f8d9" strokeWidth="3" />
                        </svg>
                    </div>

                    <p className="relative z-10 mt-8 text-center text-sm font-medium text-[#168b4b]">
                        Share rides. Save costs. Go green.
                    </p>
                </div>

                {/* Right Panel */}
                <div className="flex items-center justify-center bg-white px-7 py-12 sm:px-12 lg:px-16">

                    <div className="w-full max-w-xl">

                        <h2 className="text-4xl font-bold tracking-tight text-[#111827]">
                            Login to EcoPool
                        </h2>

                        <p className="mt-3 text-lg text-[#64748b]">
                            Access your account and start carpooling
                        </p>

                        <form onSubmit={handleSubmit} className="mt-10 space-y-7">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-semibold text-[#111827]"
                                >
                                    Email Address *
                                </label>

                                <div className="flex items-center rounded-2xl border border-gray-300 px-4 transition focus-within:border-[#00a843] focus-within:ring-2 focus-within:ring-[#00a843]/10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-gray-500"
                                    >
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@university.edu"
                                        required
                                        className="w-full bg-transparent px-4 py-4 text-[#111827] outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block font-semibold text-[#111827]"
                                >
                                    Password *
                                </label>

                                <div className="flex items-center rounded-2xl border border-gray-300 px-4 transition focus-within:border-[#00a843] focus-within:ring-2 focus-within:ring-[#00a843]/10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-gray-500"
                                    >
                                        <rect x="4" y="10" width="16" height="11" rx="2" />
                                        <path d="M8 10 V7a4 4 0 0 1 8 0v3" />
                                    </svg>

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full bg-transparent px-4 py-4 text-[#111827] outline-none placeholder:text-gray-400"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-500 transition hover:text-[#00a843]"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 3l18 18" />
                                                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                                                <path d="M9.9 5.2A11 11 0 0 1 12 5c5 0 9 7 9 7a16 16 0 0 1-3.1 3.8" />
                                                <path d="M6.2 6.2C3.5 8 3 12 3 12s3 7 9 7a9 9 0 0 0 3-.5" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <label className="flex cursor-pointer items-center gap-3 text-[#374151]">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="h-5 w-5 accent-[#00a843]"
                                    />
                                    <span>Remember Me</span>
                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="font-semibold text-[#008b4a] hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                                    {error}
                                </p>
                            )}

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-full bg-[#00a843] py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#008f39] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>

                        </form>

                        {/* Register Link */}
                        <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
                            <div className="h-px flex-1 bg-gray-200" />

                            <p className="whitespace-nowrap">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="ml-1 font-bold text-[#008b4a] hover:underline"
                                >
                                    Register
                                </Link>
                            </p>

                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
