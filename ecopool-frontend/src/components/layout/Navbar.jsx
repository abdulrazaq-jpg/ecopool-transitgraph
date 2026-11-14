import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        Eco<span className="text-green-600">Pool</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                        Home
                    </Link>

                    <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                        How It Works
                    </a>

                    <a href="#about" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                        About
                    </a>
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">

                    {isAuthenticated ? (

                        <>
                            <span className="hidden sm:block text-sm font-semibold text-gray-700">
                                Hi, {user.fullName}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all shadow-sm"
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:border-green-600 hover:text-green-600 transition-all shadow-xs"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all shadow-sm"
                            >
                                Register
                            </Link>
                        </>

                    )}

                </div>

            </div>
        </header>
    );
}