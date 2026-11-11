
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!token) {
            setError("Invalid or missing password reset link.");
            return;
        }

        // Backend password reset API will be connected later.
        console.log("Reset password requested. Token:", token);

        setSuccess(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#effcf4] px-4 py-12">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">

                {/* Logo */}
                <Link to="/" className="mb-10 flex items-center justify-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a843] text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>

                    <span className="text-3xl font-bold text-[#111827]">
                        Eco<span className="text-[#00a843]">Pool</span>
                    </span>
                </Link>

                {/* Heading */}
                <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f9ee]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#00a843"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="11" width="18" height="10" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-[#111827]">
                        Reset Password
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Create a new password for your EcoPool account.
                    </p>
                </div>

                {!success ? (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                        {/* New Password */}
                        <div>
                            <label className="mb-2 block font-semibold text-[#111827]">
                                New Password *
                            </label>

                            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-[#00a843] focus-within:ring-2 focus-within:ring-[#00a843]/10">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    required
                                    className="w-full bg-transparent py-4 outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-sm font-medium text-[#008b4a]"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                                Password must contain at least 8 characters.
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block font-semibold text-[#111827]">
                                Confirm New Password *
                            </label>

                            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-[#00a843] focus-within:ring-2 focus-within:ring-[#00a843]/10">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    required
                                    className="w-full bg-transparent py-4 outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="text-sm font-medium text-[#008b4a]"
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#00a843] py-4 font-bold text-white shadow-md transition hover:bg-[#008f39]"
                        >
                            Reset Password
                        </button>

                    </form>
                ) : (
                    <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                            ✓
                        </div>

                        <h2 className="font-semibold text-green-800">
                            Password Reset Successful!
                        </h2>

                        <p className="mt-2 text-sm text-green-700">
                            Your password passed frontend validation.
                            Actual password updating will be enabled after backend integration.
                        </p>

                        <Link
                            to="/login"
                            className="mt-5 inline-block font-semibold text-[#008b4a] hover:underline"
                        >
                            Continue to Login →
                        </Link>
                    </div>
                )}

                {!success && (
                    <div className="mt-8 text-center">
                        <Link
                            to="/login"
                            className="font-semibold text-[#008b4a] hover:underline"
                        >
                            ← Back to Login
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
}
