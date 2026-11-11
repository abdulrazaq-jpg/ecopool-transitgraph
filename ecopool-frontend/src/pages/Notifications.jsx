
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialNotifications = [
  {
    id: 1,
    title: "Ride Request Accepted",
    message: "Your request for the Hubballi to Dharwad ride has been accepted.",
    date: "Nov 11, 2026",
    time: "10:30 AM",
    type: "Accepted",
    rideId: 1,
    isRead: false,
  },
  {
    id: 2,
    title: "New Ride Request",
    message: "A student has requested to join your published ride.",
    date: "Nov 10, 2026",
    time: "04:15 PM",
    type: "Request",
    rideId: 2,
    isRead: false,
  },
  {
    id: 3,
    title: "Ride Request Rejected",
    message: "Your ride request was rejected by the ride host.",
    date: "Nov 09, 2026",
    time: "09:00 AM",
    type: "Rejected",
    rideId: 3,
    isRead: true,
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const viewRide = (notification) => {
    markAsRead(notification.id);
    navigate(`/ride/${notification.rideId}`);
  };

  const viewRequest = (notification) => {
  markAsRead(notification.id);

  navigate("/ride-requests", {
    state: {
      rideId: notification.rideId,
      requestId: notification.id,
    },
  });
};
  const getStatusStyle = (type) => {
    switch (type) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Request":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#effcf4]">

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 md:px-10 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-green-700">
          EcoPool
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/student-dashboard"
            className="text-sm font-semibold text-gray-600 hover:text-green-700"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="text-sm font-semibold text-gray-600 hover:text-green-700"
          >
            My Profile
          </Link>

          <Link
            to="/login"
            className="text-sm font-semibold text-red-500 hover:text-red-700"
          >
            Logout
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-10">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Notifications 🔔
            </h1>

            <p className="text-gray-500 mt-2">
              Stay updated about your rides and requests.
            </p>

            <p className="text-sm text-green-700 font-semibold mt-2">
              {unreadCount} unread notifications
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Mark All as Read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-2xl shadow-sm p-5 md:p-7">

          {notifications.length > 0 ? (
            <div className="space-y-4">

              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border rounded-xl p-5 transition ${
                    notification.isRead
                      ? "border-gray-100 bg-white"
                      : "border-green-200 bg-green-50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-4">

                    <div className="flex gap-4">

                      <div className="text-2xl">
                        {notification.type === "Accepted"
                          ? "✅"
                          : notification.type === "Rejected"
                          ? "❌"
                          : "🚗"}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">

                          <h3 className="font-bold text-gray-800">
                            {notification.title}
                          </h3>

                          <span
                            className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusStyle(
                              notification.type
                            )}`}
                          >
                            {notification.type}
                          </span>

                          {!notification.isRead && (
                            <span className="w-2 h-2 bg-green-600 rounded-full" />
                          )}
                        </div>

                        <p className="text-sm text-gray-600 mt-2">
                          {notification.message}
                        </p>

                        <p className="text-xs text-gray-400 mt-3">
                          {notification.date} · {notification.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-3 sm:items-end">

                      {notification.type === "Request" && (
                        <button
                            onClick={() => viewRequest(notification)}
                            className="text-sm font-semibold text-blue-700 hover:underline"
                        >
                            View Request →
                        </button>
                        )}

                        <button
                        onClick={() => viewRide(notification)}
                        className="text-sm font-semibold text-green-700 hover:underline"
                        >
                        View Ride →
                        </button>

                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-sm text-gray-500 hover:text-green-700"
                        >
                          Mark as Read
                        </button>
                      )}

                      <button
                        onClick={() =>
                          deleteNotification(notification.id)
                        }
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl">🔔</span>

              <h2 className="text-xl font-bold text-gray-800 mt-4">
                No Notifications
              </h2>

              <p className="text-gray-500 mt-2">
                You're all caught up! No notifications available.
              </p>
            </div>
          )}

        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block text-green-700 font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 EcoPool. Travel Together, Travel Better.
      </footer>

    </div>
  );
};

export default Notifications;
