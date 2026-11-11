
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function CreateRide() {
  const navigate = useNavigate();
  const location = useLocation();

  const isEditing = location.state?.isEditing || false;
  const existingRide = location.state?.ride;

  const [formData, setFormData] = useState({
    source: existingRide?.source || "",
    destination: existingRide?.destination || "",
    date: existingRide?.date || "",
    time: existingRide?.time || "",
    totalSeats: String(existingRide?.totalSeats || "4"),
    vehicle: existingRide?.vehicle || "",
    fuelCostEstimate: String(existingRide?.fuelCost ?? ""),
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.source.trim().toLowerCase() ===
      formData.destination.trim().toLowerCase()
    ) {
      setError("Starting point and destination cannot be the same.");
      return;
    }

    setError("");

    if (isEditing) {
      const updatedRide = {
        ...existingRide,
        ...formData,
        totalSeats: Number(formData.totalSeats),
        fuelCost: Number(formData.fuelCostEstimate),
      };

      console.log("Updated ride:", updatedRide);

      alert("Ride updated successfully!");

      navigate("/my-published-rides", {
        state: {
          updatedRide,
        },
      });
    } else {
      console.log("New ride details:", formData);

      alert("Ride details captured! Backend integration is pending.");

      navigate("/find-rides");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition";

  const labelStyle =
    "text-sm font-semibold text-gray-700";

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
            className="text-gray-800 font-semibold hover:text-green-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/find-rides"
            className="text-gray-800 font-semibold hover:text-green-600 transition"
          >
            Find Rides
          </Link>

          <Link
            to="/profile"
            className="text-gray-800 font-semibold hover:text-green-600 transition"
          >
            My Profile
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto my-10 px-5">

        <Link
          to={isEditing ? "/my-published-rides" : "/dashboard"}
          className="text-green-600 font-semibold hover:text-green-700 transition"
        >
          {isEditing
            ? "← Back to My Published Rides"
            : "← Back to Dashboard"}
        </Link>

        <h1 className="text-3xl font-bold mt-7 mb-2">
          {isEditing ? "Edit Ride" : "Create a Ride"}
        </h1>

        <p className="text-gray-500 mb-7">
          {isEditing
            ? "Update your journey details."
            : "Share your journey and help others travel together."}
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm"
        >

          {/* Journey Details */}
          <h3 className="text-xl font-semibold mb-6">
            Journey Details
          </h3>

          <div className="flex flex-col gap-2 mb-5">
            <label className={labelStyle}>
              Starting Point
            </label>

            <input
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Enter starting location"
              required
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label className={labelStyle}>
              Destination
            </label>

            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              required
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2 mb-5">
              <label className={labelStyle}>
                Travel Date
              </label>

              <input
                type="date"
                name="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={formData.date}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className={labelStyle}>
                Departure Time
              </label>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

          </div>

          <hr className="border-gray-200 my-6" />

          {/* Vehicle Details */}
          <h3 className="text-xl font-semibold mb-6">
            Vehicle Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2 mb-5">
              <label className={labelStyle}>
                Total Passenger Seats
              </label>

              <select
                name="totalSeats"
                value={formData.totalSeats}
                onChange={handleChange}
                required
                className={inputStyle}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((seat) => (
                  <option key={seat} value={seat}>
                    {seat} Seats
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className={labelStyle}>
                Vehicle Type
              </label>

              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className={inputStyle}
              >
                <option value="">Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

          <hr className="border-gray-200 my-6" />

          {/* Cost Details */}
          <h3 className="text-xl font-semibold mb-6">
            Cost Details
          </h3>

          <div className="flex flex-col gap-2 mb-5">
            <label className={labelStyle}>
              Estimated Total Fuel Cost (₹)
            </label>

            <input
              type="number"
              name="fuelCostEstimate"
              value={formData.fuelCostEstimate}
              onChange={handleChange}
              placeholder="Enter estimated fuel cost"
              min="0"
              required
              className={inputStyle}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm font-medium mt-3">
              {error}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8">

            <button
              type="button"
              onClick={() =>
                navigate(
                  isEditing
                    ? "/my-published-rides"
                    : "/dashboard"
                )
              }
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-[#00a651] text-white rounded-lg font-bold hover:bg-green-700 transition shadow-sm"
            >
              {isEditing ? "Update Ride" : "Publish Ride"}
            </button>

          </div>

        </form>
      </main>
    </div>
  );
}

export default CreateRide;
