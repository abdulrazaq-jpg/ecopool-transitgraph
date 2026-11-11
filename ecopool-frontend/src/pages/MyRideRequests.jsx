
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialRequests = [
  {
    id: 1,
    rideId: 1,
    driver: "Rahul Sharma",
    source: "Hubballi",
    destination: "Dharwad",
    date: "2026-11-14",
    time: "08:30 AM",
    vehicle: "Car",
    status: "Pending",
  },
  {
    id: 2,
    rideId: 2,
    driver: "Ananya Patil",
    source: "Dharwad",
    destination: "Hubballi",
    date: "2026-11-15",
    time: "09:00 AM",
    vehicle: "Car",
    status: "Accepted",
  },
  {
    id: 3,
    rideId: 3,
    driver: "Kiran Desai",
    source: "Hubballi",
    destination: "Belgaum",
    date: "2026-11-16",
    time: "07:00 AM",
    vehicle: "Car",
    status: "Rejected",
  },
];

function MyRideRequests() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState(initialRequests);

  const handleCancel = (requestId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this ride request?"
    );

    if (!confirmed) return;

    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === requestId
          ? { ...request, status: "Cancelled" }
          : request
      )
    );
  };

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const acceptedRequests = requests.filter(
    (request) => request.status === "Accepted"
  ).length;

  const cancelledRequests = requests.filter(
    (request) => request.status === "Cancelled"
  ).length;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Cancelled":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5faf7] text-[#172033] font-sans">

      {/* Navbar */}
      <nav className="bg-white px-[5%] py-5 flex flex-wrap justify-between items-center gap-4 shadow-sm">

        <h2 className="text-[27px] font-bold">
          Eco<span className="text-[#00a651]">Pool</span>
        </h2>

        <div className="flex flex-wrap items-center gap-5">
          <Link
            to="/dashboard"
            className="font-semibold hover:text-green-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/find-rides"
            className="font-semibold hover:text-green-600 transition"
          >
            Find Rides
          </Link>

          <Link
            to="/my-published-rides"
            className="font-semibold hover:text-green-600 transition"
          >
            My Published Rides
          </Link>

          <Link
            to="/notifications"
            className="font-semibold hover:text-green-600 transition"
          >
            Notifications
          </Link>

          <Link
            to="/profile"
            className="font-semibold hover:text-green-600 transition"
          >
            My Profile
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-5 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            My Ride Requests
          </h1>

          <p className="text-gray-500">
            Track and manage the ride requests you have submitted.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Total Requests
            </p>
            <h2 className="text-3xl font-bold">
              {totalRequests}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Pending Requests
            </p>
            <h2 className="text-3xl font-bold text-yellow-600">
              {pendingRequests}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Accepted Requests
            </p>
            <h2 className="text-3xl font-bold text-green-600">
              {acceptedRequests}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Cancelled Requests
            </p>
            <h2 className="text-3xl font-bold text-gray-600">
              {cancelledRequests}
            </h2>
          </div>

        </div>

        {/* Requests Heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Your Requests
          </h2>

          <button
            onClick={() => navigate("/find-rides")}
            className="bg-[#00a651] text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            + Find Rides
          </button>
        </div>

        {/* Requests List */}
        {requests.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">
              No ride requests yet
            </h3>

            <p className="text-gray-500 mb-5">
              You haven't requested to join any rides yet.
            </p>

            <button
              onClick={() => navigate("/find-rides")}
              className="bg-[#00a651] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Find Available Rides
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >

                {/* Driver and Status */}
                <div className="flex justify-between items-start gap-3 mb-5">

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      RIDE HOST
                    </p>

                    <h3 className="text-lg font-bold">
                      {request.driver}
                    </h3>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>

                </div>

                {/* Route */}
                <div className="bg-[#f4faf6] p-4 rounded-lg mb-5">

                  <div className="flex justify-between items-center gap-3">

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 mb-1">
                        FROM
                      </p>

                      <h4 className="font-semibold break-words">
                        {request.source}
                      </h4>
                    </div>

                    <span className="text-xl text-green-600">
                      →
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 mb-1">
                        TO
                      </p>

                      <h4 className="font-semibold break-words">
                        {request.destination}
                      </h4>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">

                    <div>
                      <p className="text-xs text-gray-500">
                        Travel Date
                      </p>

                      <p className="font-semibold text-sm mt-1">
                        {request.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Departure Time
                      </p>

                      <p className="font-semibold text-sm mt-1">
                        {request.time}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Vehicle */}
                <div className="flex justify-between items-center mb-5 text-sm">
                  <span className="text-gray-500">
                    Vehicle Type
                  </span>

                  <span className="font-semibold">
                    {request.vehicle}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={() =>
                      navigate(`/ride/${request.rideId}`)
                    }
                    className="flex-1 border border-green-600 text-green-700 px-4 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    View Ride
                  </button>

                  {request.status === "Pending" && (
                    <button
                      onClick={() => handleCancel(request.id)}
                      className="flex-1 bg-red-50 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
                    >
                      Cancel Request
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
}

export default MyRideRequests;
