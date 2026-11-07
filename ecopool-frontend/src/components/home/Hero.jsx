import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div className="max-w-xl">

                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Smarter Campus Travel
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                            Share Your Ride.
                            <span className="block text-green-600">
                                Share the Future.
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                            Make your daily campus commute easier and more affordable.
                            Connect with fellow students and faculty members travelling
                            along similar routes, share travel costs, and make every
                            journey more sustainable.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-9">

                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-sm"
                            >
                                Get Started
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14m-7-7 7 7-7 7"
                                    />
                                </svg>
                            </Link>

                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-green-600 hover:text-green-600 transition-colors"
                            >
                                How It Works
                            </a>

                        </div>

                        {/* Supporting Text */}
                        <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                            <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            Designed exclusively for your campus community
                        </div>

                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex justify-center items-center">

                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl opacity-60"></div>

                        <div className="relative w-full max-w-lg bg-green-50 rounded-3xl p-8 sm:p-12 border border-green-100">

                            {/* Illustration Header */}
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Your Daily Commute
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                                        Better Together
                                    </h3>
                                </div>

                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                    <svg
                                        className="w-6 h-6 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 13h2l2-6h10l2 6h2v5h-2v2h-3v-2H8v2H5v-2H3v-5Zm4-1h10M7 16h.01M17 16h.01"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Route Illustration */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">
                                            STARTING POINT
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Your Location
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-5 h-12 border-l-2 border-dashed border-green-300"></div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11Z"
                                            />
                                            <circle cx="12" cy="10" r="2.5" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">
                                            DESTINATION
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Your Campus
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Information Cards */}
                            <div className="grid grid-cols-2 gap-4 mt-5">

                                <div className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                                        <svg
                                            className="w-5 h-5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2m0-10v10m7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Travel Together
                                    </p>
                                    <p className="text-sm font-bold text-gray-900 mt-1">
                                        Share Costs
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                                        <svg
                                            className="w-5 h-5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v2m6.364.636-1.414 1.414M21 12h-2M5 12H3m3.05-6.364L7.464 7.05M12 21v-2m7-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Sustainable Travel
                                    </p>
                                    <p className="text-sm font-bold text-gray-900 mt-1">
                                        Reduce Emissions
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}