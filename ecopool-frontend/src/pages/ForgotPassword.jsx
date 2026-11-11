
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (!email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        // Backend password recovery API will be connected later.
        console.log("Password reset requested for:", email);

        setSubmitted(true);
        setMessage(
            "If an account exists with this email, password reset instructions will be sent."
        );
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>

                    <span className="text-3xl font-bold text-[#111827]">
                        Eco<span className="text-[#00a843]">Pool</span>
                    </span>
                </Link>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f9ee]">
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
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                        <path d="M16 3h5" />
                    </svg>
                </div>

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#111827]">
                        Forgot Password?
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        No worries! Enter your registered email address
                        and we'll help you reset your password.
                    </p>
                </div>

                {/* Form */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block font-semibold text-[#111827]"
                            >
                                Email Address *
                            </label>

                            <div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-[#00a843] focus-within:ring-2 focus-within:ring-[#00a843]/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-gray-400"
                                >
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@university.edu"
                                    required
                                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#00a843] py-4 font-bold text-white shadow-md transition hover:bg-[#008f39]"
                        >
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#00a843"
                                strokeWidth="2"
                            >
                                <path d="m5 12 4 4L19 6" />
                            </svg>
                        </div>

                        <p className="font-semibold text-green-800">
                            Request Submitted
                        </p>

                        <p className="mt-2 text-sm text-green-700">
                            {message}
                        </p>
                    </div>
                )}

                {/* Back to Login */}
                <div className="mt-8 text-center">
                    <Link
                        to="/login"
                        className="font-semibold text-[#008b4a] hover:underline"
                    >
                        ← Back to Login
                    </Link>
                </div>

            </div>
        </div>
    );
}
