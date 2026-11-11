
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const sampleRides = [
  {
    id: 1,
    source: "Hubballi",
    destination: "Dharwad",
    date: "2026-11-14",
    time: "08:30 AM",
    totalSeats: 4,
    availableSeats: 2,
    vehicle: "Car",
    fuelCost: 200,
    status: "Active",
    requests: 2,
  },
  {
    id: 2,
    source: "Dharwad",
    destination: "Hubballi",
    date: "2026-11-16",
    time: "09:00 AM",
    totalSeats: 3,
    availableSeats: 3,
    vehicle: "Car",
    fuelCost: 150,
    status: "Active",
    requests: 0,
  },
  {
    id: 3,
    source: "Hubballi",
    destination: "Belgaum",
    date: "2026-11-18",
    time: "07:00 AM",
    totalSeats: 4,
    availableSeats: 1,
    vehicle: "Car",
    fuelCost: 350,
    status: "Active",
    requests: 3,
  },
];

function MyPublishedRides() {
  const navigate = useNavigate();
  const location = useLocation();

  const [rides, setRides] = useState(() => {
    const updatedRide = location.state?.updatedRide;

    if (!updatedRide) return sampleRides;

    return sampleRides.map((ride) =>
      ride.id === updatedRide.id ? updatedRide : ride
    );
  });

  const handleCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this ride?"
    );

    if (!confirmed) return;

    setRides((prevRides) =>
      prevRides.map((ride) =>
        ride.id === id
          ? { ...ride, status: "Cancelled" }
          : ride
      )
    );
  };

  const handleEdit = (ride) => {
    navigate("/create-ride", {
      state: { ride, isEditing: true },
    });
  };

  const activeRides = rides.filter(
    (ride) => ride.status === "Active"
  );

  return (
    <div className="min-h-screen bg-[#f5faf7] text-[#172033] font-sans">

      {/* Navbar */}
      <nav className="bg-white px-[5%] py-5 flex flex-wrap justify-between items-center gap-4 shadow-sm">

        <h2 className="text-[27px] font-bold">
          Eco<span className="text-[#00a651]">Pool</span>
        </h2>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            to="/dashboard"
            className="font-semibold text-gray-800 hover:text-green-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/find-rides"
            className="font-semibold text-gray-800 hover:text-green-600 transition"
          >
            Find Rides
          </Link>

          <Link
            to="/profile"
            className="font-semibold text-gray-800 hover:text-green-600 transition"
          >
            My Profile
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto my-10 px-5">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-5 mb-8">

          <div>
            <h1 className="text-3xl font-bold mb-2">
              My Published Rides
            </h1>

            <p className="text-gray-500">
              Manage the rides you have published on EcoPool.
            </p>
          </div>

          <Link
            to="/create-ride"
            className="bg-[#00a651] text-white px-5 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            + Create New Ride
          </Link>

        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-9">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-[#00a651]">
              {rides.length}
            </h2>
            <p className="text-gray-500 mt-2">
              Total Published Rides
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-[#00a651]">
              {activeRides.length}
            </h2>
            <p className="text-gray-500 mt-2">
              Active Rides
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-[#00a651]">
              {rides.reduce(
                (total, ride) => total + ride.requests,
                0
              )}
            </h2>
            <p className="text-gray-500 mt-2">
              Received Requests
            </p>
          </div>

        </div>

        {/* Ride List */}
        <h2 className="text-2xl font-semibold mb-5">
          Your Rides
        </h2>

        {rides.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl shadow-sm">

            <h3 className="text-xl font-semibold mb-2">
              No rides published yet
            </h3>

            <p className="text-gray-500 mb-6">
              Start sharing your journey with others!
            </p>

            <Link
              to="/create-ride"
              className="inline-block bg-[#00a651] text-white px-5 py-3 rounded-lg font-bold hover:bg-green-700 transition"
            >
              Create Your First Ride
            </Link>

          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {rides.map((ride) => (
              <div
                key={ride.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >

                {/* Ride Header */}
                <div className="flex justify-between items-center mb-5">

                  <span className="font-bold text-[#00a651]">
                    {ride.vehicle}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      ride.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ride.status}
                  </span>

                </div>

                {/* Route */}
                <div className="flex justify-between items-center gap-3 bg-[#f4faf6] p-4 rounded-lg mb-5">

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 mb-1">
                      FROM
                    </p>
                    <h3 className="font-semibold text-lg break-words">
                      {ride.source}
                    </h3>
                  </div>

                  <span className="text-2xl text-[#00a651]">
                    →
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 mb-1">
                      TO
                    </p>
                    <h3 className="font-semibold text-lg break-words">
                      {ride.destination}
                    </h3>
                  </div>

                </div>

                {/* Ride Details */}
                <div className="grid grid-cols-2 gap-5 mb-5">

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Travel Date
                    </p>
                    <strong>{ride.date}</strong>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Departure
                    </p>
                    <strong>{ride.time}</strong>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Available Seats
                    </p>
                    <strong>
                      {ride.availableSeats}/{ride.totalSeats}
                    </strong>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Fuel Cost
                    </p>
                    <strong>₹{ride.fuelCost}</strong>
                  </div>

                </div>

                {/* Request Information */}
                <div className="flex flex-wrap justify-between items-center gap-3 border-t border-gray-100 pt-4 text-sm text-gray-600">

                  <span>
                    {ride.requests} passenger request(s)
                  </span>

                  <button
                    onClick={() =>
                      navigate(`/ride/${ride.id}`)
                    }
                    className="text-[#00a651] font-bold hover:text-green-700 transition"
                  >
                    View Ride
                  </button>

                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-5">

                  <button
                    onClick={() => handleEdit(ride)}
                    disabled={ride.status !== "Active"}
                    className="flex-1 min-w-[100px] bg-green-100 text-green-700 px-3 py-2.5 rounded-lg font-semibold hover:bg-green-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Edit Ride
                  </button>

                  <button
                    onClick={() => handleCancel(ride.id)}
                    disabled={ride.status !== "Active"}
                    className="flex-1 min-w-[100px] bg-red-100 text-red-700 px-3 py-2.5 rounded-lg font-semibold hover:bg-red-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel Ride
                  </button>

                  <button
                    onClick={() =>
                      navigate("/ride-requests")
                    }
                    className="flex-1 min-w-[130px] bg-[#00a651] text-white px-3 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Manage Requests
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
}

export default MyPublishedRides;
