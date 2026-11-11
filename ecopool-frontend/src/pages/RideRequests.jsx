
import React, { useState } from "react";
import { Link ,useLocation } from "react-router-dom";

const initialRequests = [
  {
    id: 1,
    rideId: 1,
    passenger: "Ananya Patil",
    email: "ananya@example.com",
    accountType: "Student",
    source: "Hubballi",
    destination: "Dharwad",
    date: "2026-11-14",
    time: "08:30 AM",
    requestedOn: "2026-11-10",
    status: "Pending",
  },
  {
    id: 2,
    rideId: 1,
    passenger: "Rohan Kulkarni",
    email: "rohan@example.com",
    accountType: "Student",
    source: "Hubballi",
    destination: "Dharwad",
    date: "2026-11-14",
    time: "08:30 AM",
    requestedOn: "2026-11-11",
    status: "Pending",
  },
  {
    id: 3,
    rideId: 3,
    passenger: "Sneha Rao",
    email: "sneha@example.com",
    accountType: "Faculty",
    source: "Hubballi",
    destination: "Belgaum",
    date: "2026-11-18",
    time: "07:00 AM",
    requestedOn: "2026-11-11",
    status: "Accepted",
  },
];

function RideRequests() {
  const location = useLocation();

  const selectedRequestId = location.state?.requestId;

  const [requests, setRequests] = useState(initialRequests);

  const [availableSeats, setAvailableSeats] = useState({
    1: 2,
    2: 3,
    3: 1,
  });

  const handleAccept = (requestId) => {
    const request = requests.find(
      (item) => item.id === requestId
    );

    if (!request || request.status !== "Pending") return;

    if (availableSeats[request.rideId] <= 0) {
      alert("No available seats left for this ride.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to accept this passenger request?"
    );

    if (!confirmed) return;

    setRequests((prevRequests) =>
      prevRequests.map((item) =>
        item.id === requestId
          ? { ...item, status: "Accepted" }
          : item
      )
    );

    setAvailableSeats((prevSeats) => ({
      ...prevSeats,
      [request.rideId]: prevSeats[request.rideId] - 1,
    }));
  };

  const handleReject = (requestId) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this request?"
    );

    if (!confirmed) return;

    setRequests((prevRequests) =>
      prevRequests.map((item) =>
        item.id === requestId
          ? { ...item, status: "Rejected" }
          : item
      )
    );
  };

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const acceptedCount = requests.filter(
    (request) => request.status === "Accepted"
  ).length;

  const rejectedCount = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
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
          <Link
            to="/my-published-rides"
            className="text-green-600 font-semibold hover:text-green-700"
          >
            ← Back to My Published Rides
          </Link>

          <h1 className="text-3xl font-bold mt-6 mb-2">
            Manage Ride Requests
          </h1>

          <p className="text-gray-500">
            Review and manage passengers who want to join your rides.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-9">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Total Requests
            </p>
            <h2 className="text-3xl font-bold">
              {requests.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Pending Requests
            </p>
            <h2 className="text-3xl font-bold text-yellow-600">
              {pendingCount}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm mb-2">
              Accepted Requests
            </p>
            <h2 className="text-3xl font-bold text-green-600">
              {acceptedCount}
            </h2>
          </div>

        </div>

        {/* Request List */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Passenger Requests
          </h2>

          <span className="text-sm text-gray-500">
            {rejectedCount} rejected
          </span>
        </div>

        {requests.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              No requests received yet
            </h3>

            <p className="text-gray-500">
              Passenger requests will appear here when someone requests
              to join your ride.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {requests.map((request) => (
            <div
              key={request.id}
              className={`p-6 rounded-xl transition ${
                selectedRequestId === request.id
                  ? "bg-green-50 border-2 border-green-500 shadow-lg"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {selectedRequestId === request.id && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <span className="text-sm font-bold text-green-700">
                    New request from your notification
                  </span>
                </div>
              )}

                {/* Passenger Information */}
                <div className="flex justify-between items-start gap-3 mb-5">

                  <div>
                    <h3 className="text-lg font-bold">
                      {request.passenger}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {request.email}
                    </p>

                    <span className="inline-block mt-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {request.accountType}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>

                </div>

                {/* Requested Ride */}
                <div className="bg-[#f4faf6] p-4 rounded-lg mb-5">

                  <p className="text-xs text-gray-500 font-semibold mb-3">
                    REQUESTED RIDE
                  </p>

                  <div className="flex justify-between items-center gap-3">

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">FROM</p>
                      <h4 className="font-semibold break-words">
                        {request.source}
                      </h4>
                    </div>

                    <span className="text-xl text-green-600">
                      →
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">TO</p>
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
                        Departure
                      </p>
                      <p className="font-semibold text-sm mt-1">
                        {request.time}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Request Details */}
                <div className="flex justify-between items-center gap-3 text-sm mb-5">
                  <div>
                    <p className="text-gray-500">
                      Request submitted
                    </p>
                    <p className="font-semibold mt-1">
                      {request.requestedOn}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-500">
                      Available seats
                    </p>
                    <p className="font-semibold mt-1">
                      {availableSeats[request.rideId]}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                {request.status === "Pending" ? (
                  <div className="flex flex-wrap gap-3">

                    <button
                      onClick={() => handleAccept(request.id)}
                      disabled={availableSeats[request.rideId] <= 0}
                      className="flex-1 bg-[#00a651] text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Accept Request
                    </button>

                    <button
                      onClick={() => handleReject(request.id)}
                      className="flex-1 bg-red-50 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
                    >
                      Reject Request
                    </button>

                  </div>
                ) : (
                  <div className="border-t border-gray-100 pt-4 text-center">
                    <p className="text-sm text-gray-500">
                      This request has been {request.status.toLowerCase()}.
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
}

export default RideRequests;
