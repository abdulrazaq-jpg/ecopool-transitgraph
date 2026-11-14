import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import Profile from "./pages/Profile";
import FindRides from "./pages/FindRides";
import RideDetails from "./pages/RideDetails";
import CreateRide from "./pages/CreateRide";
import MyPublishedRides from "./pages/MyPublishedRides";
import RideRequests from "./pages/RideRequests";
import MyRideRequests from "./pages/MyRideRequests";
import Notifications from "./pages/Notifications";


function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />


                {/* Student Only Routes */}
                <Route element={<ProtectedRoute allowedRoles={["Student"]} />}>
                    <Route
                        path="/student-dashboard"
                        element={<StudentDashboard />}
                    />
                </Route>


                {/* Faculty Only Routes */}
                <Route element={<ProtectedRoute allowedRoles={["Faculty"]} />}>
                    <Route
                        path="/faculty-dashboard"
                        element={<FacultyDashboard />}
                    />
                </Route>


                {/* Routes Accessible to Both Account Types */}
                <Route element={<ProtectedRoute allowedRoles={["Student", "Faculty"]} />}>

                    <Route path="/profile" element={<Profile />} />

                    <Route path="/find-rides" element={<FindRides />} />

                    <Route path="/ride/:id" element={<RideDetails />} />

                    <Route path="/create-ride" element={<CreateRide />} />

                    <Route path="/my-published-rides" element={<MyPublishedRides />} />

                    <Route path="/ride-requests" element={<RideRequests />} />

                    <Route path="/my-ride-requests" element={<MyRideRequests />} />

                    <Route path="/notifications" element={<Notifications />} />

                </Route>

            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;