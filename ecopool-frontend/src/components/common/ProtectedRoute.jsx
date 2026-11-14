import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {

    const { user, isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // 1. Wait until authentication verification finishes
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg font-semibold text-gray-600">
                    Checking authentication...
                </p>
            </div>
        );
    }

    // 2. Redirect unauthenticated users to login
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    // 3. Check whether the user's account type is permitted
    if (allowedRoles && !allowedRoles.includes(user.accountType)) {

        const dashboard =
            user.accountType === "Faculty"
                ? "/faculty-dashboard"
                : "/student-dashboard";

        return <Navigate to={dashboard} replace />;
    }

    // 4. Allow access to the requested page
    return <Outlet />;
}