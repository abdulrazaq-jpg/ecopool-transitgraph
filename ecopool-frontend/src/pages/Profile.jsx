
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
    const fileInputRef = useRef(null);

    // Temporary frontend data.
    // Replace with authenticated user data from backend later.
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        institutionalId: "",
        accountType: "Student",
        phone: "",
        department: "",
        profilePhoto: null,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setMessage("Please select a valid image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setMessage("Image size should not exceed 5 MB.");
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        setProfile((prev) => ({
            ...prev,
            profilePhoto: imageUrl,
        }));

        setMessage("");
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!profile.fullName.trim()) {
            setMessage("Full name cannot be empty.");
            return;
        }

        if (profile.phone && !/^[0-9]{10}$/.test(profile.phone)) {
            setMessage("Please enter a valid 10-digit phone number.");
            return;
        }

        // Backend API integration will be added here.
        setIsEditing(false);
        setMessage("Profile changes are ready. Backend saving is not connected yet.");
    };

    const handleCancel = () => {
        setIsEditing(false);
        setMessage("");
    };

    const initials = profile.fullName
        ? profile.fullName.charAt(0).toUpperCase()
        : "U";

    return (
        <div className="min-h-screen bg-green-50">

            {/* NAVBAR */}
            <nav className="bg-white shadow-sm px-6 md:px-10 py-4 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-2">
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

                    <span className="text-2xl font-bold text-gray-900">
                        Eco<span className="text-green-600">Pool</span>
                    </span>
                </Link>

                <div className="flex items-center gap-5">

                    <Link
                        to={
                            profile.accountType.toLowerCase() === "faculty"
                                ? "/faculty-dashboard"
                                : "/student-dashboard"
                        }
                        className="text-sm font-semibold text-gray-600 hover:text-green-700"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/login"
                        className="text-sm font-semibold text-red-500 hover:text-red-700"
                    >
                        Logout
                    </Link>

                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="max-w-5xl mx-auto px-5 py-10">

                {/* PAGE HEADING */}
                <div className="mb-8">

                    <p className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                        Account Settings
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        My Profile
                    </h1>

                    <p className="text-gray-600 mt-2">
                        View and manage your personal information.
                    </p>

                </div>

                {/* PROFILE CARD */}
                <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">

                    {/* PROFILE HEADER */}
                    <div className="bg-gradient-to-r from-green-100 to-green-50 p-7 md:p-10">

                        <div className="flex flex-col sm:flex-row items-center gap-6">

                            {/* PROFILE PHOTO */}
                            <div className="relative">

                                <div className="w-28 h-28 rounded-full bg-green-600 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">

                                    {profile.profilePhoto ? (
                                        <img
                                            src={profile.profilePhoto}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold text-white">
                                            {initials}
                                        </span>
                                    )}

                                </div>

                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current.click()}
                                    className="absolute bottom-0 right-0 bg-white border border-green-200 rounded-full p-2 shadow hover:bg-green-50"
                                    title="Upload profile photo"
                                >
                                    <svg
                                        className="w-5 h-5 text-green-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7h3l2-3h8l2 3h3v13H3V7z"
                                        />
                                        <circle cx="12" cy="13" r="3" />
                                    </svg>
                                </button>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />

                            </div>

                            {/* USER DETAILS */}
                            <div className="text-center sm:text-left">

                                <h2 className="text-2xl font-bold text-gray-900">
                                    {profile.fullName || "Your Name"}
                                </h2>

                                <p className="text-gray-600 mt-1">
                                    {profile.email || "Your email address"}
                                </p>

                                <span className="inline-block mt-3 px-4 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-full">
                                    {profile.accountType}
                                </span>

                                <p className="text-xs text-gray-500 mt-2">
                                    Upload an image up to 5 MB.
                                </p>

                            </div>

                        </div>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSave} className="p-6 md:p-10">

                        {/* PERSONAL INFORMATION */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">

                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Personal Information
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Your basic personal details.
                                </p>
                            </div>

                            {!isEditing && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(true);
                                        setMessage("");
                                    }}
                                    className="px-5 py-2.5 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition"
                                >
                                    Edit Profile
                                </button>
                            )}

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* FULL NAME */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    value={profile.fullName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-50 disabled:text-gray-600"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    disabled
                                    placeholder="Your registered email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your phone number"
                                    maxLength="10"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-50 disabled:text-gray-600"
                                />
                            </div>

                            {/* DEPARTMENT */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Department
                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    value={profile.department}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your department"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-50 disabled:text-gray-600"
                                />
                            </div>

                        </div>

                        {/* INSTITUTIONAL INFORMATION */}
                        <div className="border-t border-gray-200 my-9"></div>

                        <div className="mb-6">

                            <h3 className="text-xl font-bold text-gray-900">
                                Institutional Information
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Your registered institutional identity.
                            </p>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* INSTITUTIONAL ID */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Institutional ID
                                </label>

                                <input
                                    type="text"
                                    value={profile.institutionalId}
                                    disabled
                                    placeholder="Your institutional ID"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                                />

                                <p className="text-xs text-gray-400 mt-2">
                                    Institutional ID cannot be changed.
                                </p>
                            </div>

                            {/* ACCOUNT TYPE */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Account Type
                                </label>

                                <input
                                    type="text"
                                    value={profile.accountType}
                                    disabled
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                                />

                                <p className="text-xs text-gray-400 mt-2">
                                    Account type cannot be changed.
                                </p>
                            </div>

                        </div>

                        {/* MESSAGE */}
                        {message && (
                            <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-800">
                                {message}
                            </div>
                        )}

                        {/* ACTION BUTTONS */}
                        {isEditing && (
                            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-9">

                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                                >
                                    Save Changes
                                </button>

                            </div>
                        )}

                    </form>

                </div>

                {/* BACK TO DASHBOARD */}
                <div className="mt-7 text-center">

                    <Link
                        to={
                            profile.accountType.toLowerCase() === "faculty"
                                ? "/faculty-dashboard"
                                : "/student-dashboard"
                        }
                        className="text-green-700 font-semibold hover:text-green-900"
                    >
                        ← Back to Dashboard
                    </Link>

                </div>

            </main>

            {/* FOOTER */}
            <footer className="text-center py-6 text-sm text-gray-500">
                © 2026 EcoPool. Travel Together, Travel Better.
            </footer>

        </div>
    );
}
