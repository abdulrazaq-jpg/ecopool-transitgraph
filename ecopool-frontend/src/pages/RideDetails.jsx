
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// Temporary sample ride data
const sampleRides = [
  {
    id: 1,
    driver: "Rahul Sharma",
    source: "Hubballi",
    destination: "Dharwad",
    date: "2026-11-14",
    time: "08:30 AM",
    seats: 3,
    vehicle: "Car",
    vehicleNumber: "KA-25-AB-1234",
    fuelCost: 150,
    description: "Travelling to Dharwad in the morning. Looking for fellow travellers to share the journey.",
  },
  {
    id: 2,
    driver: "Ananya Patil",
    source: "Dharwad",
    destination: "Hubballi",
    date: "2026-11-15",
    time: "09:00 AM",
    seats: 2,
    vehicle: "Car",
    vehicleNumber: "KA-25-CD-5678",
    fuelCost: 120,
    description: "Heading towards Hubballi. Happy to share the ride with fellow campus members.",
  },
  {
    id: 3,
    driver: "Kiran Desai",
    source: "Hubballi",
    destination: "Belgaum",
    date: "2026-11-16",
    time: "07:00 AM",
    seats: 4,
    vehicle: "Car",
    vehicleNumber: "KA-22-EF-9012",
    fuelCost: 300,
    description: "Early morning trip to Belgaum. Join me for a comfortable journey.",
  },
];

const RideDetails = () => {
  const { id } = useParams();
  const [requestSent, setRequestSent] = useState(false);

  const ride = sampleRides.find(
    (item) => item.id === Number(id)
  );

  const formatDate = (value) => {
    return new Date(value + "T00:00:00").toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!ride) {
    return (
      <div className="min-h-screen bg-[#effcf4] flex items-center justify-center p-5">
        <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Ride Not Found
          </h2>

          <p className="text-gray-500 mt-3">
            The ride you are looking for does not exist.
          </p>

          <Link
            to="/find-rides"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Find Rides
          </Link>
        </div>
      </div>
    );
  }

  const handleRequest = () => {
    setRequestSent(true);
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
            to="/find-rides"
            className="text-gray-600 hover:text-green-700 font-medium"
          >
            Find Rides
          </Link>

          <Link
            to="/profile"
            className="text-gray-600 hover:text-green-700 font-medium"
          >
            My Profile
          </Link>
        </div>

      </nav>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-10">

        {/* Back Button */}
        <Link
          to="/find-rides"
          className="text-green-700 font-semibold hover:underline"
        >
          ← Back to Find Rides
        </Link>

        {/* Heading */}
        <section className="mt-7 mb-8">
          <p className="text-sm font-semibold text-green-700">
            RIDE INFORMATION
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Ride Details
          </h1>

          <p className="text-gray-500 mt-2">
            Review the journey information before requesting to join.
          </p>
        </section>

        {/* Route Card */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">

          <div className="flex justify-between items-center mb-7">
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Available Ride
            </span>

            <span className="text-3xl">🚗</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <p className="text-sm text-gray-500">
                Starting Point
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                📍 {ride.source}
              </h2>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Destination
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                🏁 {ride.destination}
              </h2>
            </div>

          </div>

          <div className="border-t border-gray-100 my-7" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div>
              <p className="text-sm text-gray-500">Travel Date</p>
              <p className="font-semibold text-gray-800 mt-2">
                📅 {formatDate(ride.date)}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Departure Time</p>
              <p className="font-semibold text-gray-800 mt-2">
                🕒 {ride.time}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Available Seats</p>
              <p className="font-semibold text-green-700 mt-2">
                💺 {ride.seats} seats
              </p>
            </div>

          </div>

        </section>

        {/* Host Information */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Ride Host Information
          </h2>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold">
              {ride.driver.charAt(0)}
            </div>

            <div>
              <h3 className="font-bold text-gray-800 text-lg">
                {ride.driver}
              </h3>

              <p className="text-sm text-gray-500">
                Ride Host
              </p>
            </div>

          </div>

          <p className="text-gray-600 text-sm mt-6 leading-relaxed">
            {ride.description}
          </p>

        </section>

        {/* Vehicle Information */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Vehicle Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">Vehicle Type</p>
              <p className="font-semibold text-gray-800 mt-2">
                🚘 {ride.vehicle}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Vehicle Number</p>
              <p className="font-semibold text-gray-800 mt-2">
                {ride.vehicleNumber}
              </p>
            </div>

          </div>

        </section>

        {/* Cost Information */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">

          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Estimated Fuel Cost
          </h2>

          <p className="text-3xl font-bold text-green-700">
            ₹{ride.fuelCost}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Estimated total fuel cost for the journey. This is a sample estimate, not a confirmed passenger contribution.
          </p>

        </section>

        {/* Request to Join */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <h2 className="text-xl font-bold text-gray-800">
            Interested in this ride?
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Send a request to the ride host to join this journey.
          </p>

          {requestSent ? (

            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-700 font-semibold">
                ✓ Demo request submitted!
              </p>

              <p className="text-sm text-green-700 mt-2">
                This is only a frontend demonstration. Your request has not been saved to the backend.
              </p>
            </div>

          ) : (

            <button
              onClick={handleRequest}
              disabled={ride.seats <= 0}
              className="mt-6 w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
            >
              {ride.seats <= 0 ? "No Seats Available" : "Request to Join"}
            </button>

          )}

        </section>

      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 EcoPool. Travel Together, Travel Better.
      </footer>

    </div>
  );
};

export default RideDetails;
