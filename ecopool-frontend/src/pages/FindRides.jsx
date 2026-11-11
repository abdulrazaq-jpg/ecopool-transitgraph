
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
  },
];

const FindRides = () => {
  // Search input states
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [minSeats, setMinSeats] = useState("1");

  // Applied filters (updated only after clicking Search Rides)
  const [appliedFilters, setAppliedFilters] = useState({
    source: "",
    destination: "",
    date: "",
    minSeats: "1",
  });

  // Filter rides using applied filters
  const filteredRides = useMemo(() => {
    return sampleRides.filter((ride) => {
      const matchesSource = ride.source
        .toLowerCase()
        .includes(appliedFilters.source.trim().toLowerCase());

      const matchesDestination = ride.destination
        .toLowerCase()
        .includes(appliedFilters.destination.trim().toLowerCase());

      const matchesDate =
        !appliedFilters.date || ride.date === appliedFilters.date;

      const matchesSeats =
        ride.seats >= Number(appliedFilters.minSeats);

      return (
        matchesSource &&
        matchesDestination &&
        matchesDate &&
        matchesSeats
      );
    });
  }, [appliedFilters]);

  // Search button
  const handleSearch = (e) => {
    e.preventDefault();

    setAppliedFilters({
      source,
      destination,
      date,
      minSeats,
    });
  };

  // Clear filters button
  const clearFilters = () => {
    setSource("");
    setDestination("");
    setDate("");
    setMinSeats("1");

    setAppliedFilters({
      source: "",
      destination: "",
      date: "",
      minSeats: "1",
    });
  };

  // Format date
  const formatDate = (value) => {
    return new Date(value + "T00:00:00").toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
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
            to="/dashboard"
            className="text-gray-600 hover:text-green-700 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="text-gray-600 hover:text-green-700 font-medium"
          >
            My Profile
          </Link>

        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-10">

        {/* Heading */}
        <section className="mb-8">

          <p className="text-green-700 text-sm font-semibold">
            ECOPOOL RIDE DISCOVERY
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Find Your Ride 🚗
          </h1>

          <p className="text-gray-500 mt-2">
            Find people travelling your way and make your journey better.
          </p>

        </section>

        {/* Search Form */}
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-10">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Search for available rides
          </h2>

          <form onSubmit={handleSearch}>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Starting Point */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Starting Point
                </label>

                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Enter pickup location"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Destination
                </label>

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date
                </label>

                <input
                  type="date"
                  value={date}
                  min="2026-11-11"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Minimum Seats */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Seats
                </label>

                <select
                  value={minSeats}
                  onChange={(e) => setMinSeats(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >
                  <option value="1">1 or more</option>
                  <option value="2">2 or more</option>
                  <option value="3">3 or more</option>
                  <option value="4">4 or more</option>
                </select>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-7">

              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Search Rides
              </button>

              <button
                type="button"
                onClick={clearFilters}
                className="bg-green-50 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Clear Filters
              </button>

            </div>

          </form>
        </section>

        {/* Available Rides */}
        <section>

          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Available Rides
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {filteredRides.length} rides found
              </p>
            </div>

          </div>

          {filteredRides.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredRides.map((ride) => (

                <div
                  key={ride.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
                >

                  <div className="flex justify-between items-center mb-5">

                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Available
                    </span>

                    <span className="text-2xl">🚗</span>

                  </div>

                  <p className="text-sm text-gray-500">
                    Journey
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    {ride.source} → {ride.destination}
                  </h3>

                  <div className="border-t border-gray-100 my-5" />

                  <div className="space-y-3 text-sm text-gray-600">

                    <p>📅 {formatDate(ride.date)}</p>
                    <p>🕒 {ride.time}</p>
                    <p>💺 {ride.seats} seats available</p>
                    <p>🚘 {ride.vehicle}</p>

                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100">

                    <p className="text-sm text-gray-500">
                      Ride hosted by
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {ride.driver}
                    </p>

                  </div>

                  <Link
                    to={`/ride/${ride.id}`}
                    className="block text-center mt-5 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>

                </div>

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-2xl p-10 text-center shadow-sm">

              <span className="text-4xl">🔍</span>

              <h3 className="text-xl font-bold text-gray-800 mt-4">
                No rides found
              </h3>

              <p className="text-gray-500 mt-2">
                Try changing your search filters to find available rides.
              </p>

              <button
                onClick={clearFilters}
                className="mt-5 text-green-700 font-semibold hover:underline"
              >
                Clear Filters
              </button>

            </div>

          )}

        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 EcoPool. Travel Together, Travel Better.
      </footer>

    </div>
  );
};

export default FindRides;
