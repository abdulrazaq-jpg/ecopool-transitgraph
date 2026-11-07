import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
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

                            <span className="text-2xl font-bold text-white">
                                Eco<span className="text-green-500">Pool</span>
                            </span>
                        </Link>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Making campus commuting simpler, more affordable,
                            and sustainable through shared rides.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="hover:text-green-400 transition-colors">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <a href="/#how-it-works" className="hover:text-green-400 transition-colors">
                                    How It Works
                                </a>
                            </li>

                            <li>
                                <a href="/#about" className="hover:text-green-400 transition-colors">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Account
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/login" className="hover:text-green-400 transition-colors">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link to="/register" className="hover:text-green-400 transition-colors">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} EcoPool. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}