
import { Link } from "react-router-dom";

// Temporary sample data — backend integration will come later.
const availableRides = [];
const publishedRides = [];
const submittedRequests = [];
const receivedRequests = [];
const upcomingRides = [];

const facultyName = "";
const unreadNotifications = 0;

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

const SectionHeading = ({ title, link, linkText = "View All" }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>

    {link && (
      <Link
        to={link}
        className="text-sm font-semibold text-green-700 hover:text-green-900"
      >
        {linkText} →
      </Link>
    )}
  </div>
);

const RideCard = ({ ride }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition">
    <div className="flex justify-between items-start gap-3">
      <div>
        <p className="text-sm text-gray-500">Journey</p>
        <h3 className="font-semibold text-gray-800 mt-1">
          {ride.source} → {ride.destination}
        </h3>
      </div>

      <span className="text-green-700 text-xl">🚗</span>
    </div>

    <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
      <p>📅 {ride.date}</p>
      <p>🕒 {ride.time}</p>
    </div>

    {ride.host && (
      <p className="text-sm text-gray-500 mt-3">
        Host: <span className="font-medium text-gray-700">{ride.host}</span>
      </p>
    )}

    {ride.seats !== undefined && (
      <p className="text-sm text-gray-500 mt-2">
        Available seats:{" "}
        <span className="font-semibold text-green-700">
          {ride.seats}
        </span>
      </p>
    )}

    <Link
      to={`/ride/${ride.id}`}
      className="block text-center mt-4 bg-green-50 text-green-700 font-semibold text-sm py-2 rounded-lg hover:bg-green-100 transition"
    >
      View Details
    </Link>
  </div>
);

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen bg-[#effcf4]">

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 md:px-10 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-green-700">
          EcoPool
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/notifications"
            className="relative text-gray-600 hover:text-green-700"
          >
            🔔

            {unreadNotifications > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-green-700"
          >
            <span className="bg-green-100 text-green-700 rounded-full w-9 h-9 flex items-center justify-center">
              {facultyName ? facultyName.charAt(0).toUpperCase() : "F"}
            </span>

            <span className="hidden sm:block">My Profile</span>
          </Link>

          <Link
            to="/login"
            className="text-sm font-semibold text-red-500 hover:text-red-700"
          >
            Logout
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-8">

        {/* Welcome */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8">

          <div>
            <p className="text-green-700 font-medium text-sm">
              FACULTY DASHBOARD
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              Welcome, {facultyName || "Faculty"}! 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your rides and travel together with your campus community.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/find-rides"
              className="bg-white border border-green-600 text-green-700 px-5 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Find a Ride
            </Link>

            <Link
              to="/create-ride"
              className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              + Create a Ride
            </Link>
          </div>
        </section>

        {/* Quick Statistics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-9">

          {[
            {
              label: "Available Rides",
              value: availableRides.length,
              icon: "🚗",
            },
            {
              label: "My Published Rides",
              value: publishedRides.length,
              icon: "🛣️",
            },
            {
              label: "My Requests",
              value: submittedRequests.length,
              icon: "📋",
            },
            {
              label: "Unread Notifications",
              value: unreadNotifications,
              icon: "🔔",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{item.label}</p>
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h2 className="text-3xl font-bold text-green-700 mt-3">
                {item.value}
              </h2>
            </div>
          ))}
        </section>

        {/* Available Rides */}
        <section className="mb-9">
          <SectionHeading
            title="Available Rides"
            link="/find-rides"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {availableRides.length > 0 ? (
              availableRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                No available rides at the moment.
              </p>
            )}

          </div>
        </section>

        {/* My Published Rides */}
        <section className="mb-9">
          <SectionHeading
            title="My Published Rides"
            link="/my-rides"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {publishedRides.length > 0 ? (
              publishedRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                You haven't published any rides yet.
              </p>
            )}

          </div>
        </section>

        {/* Requests */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-9">

          {/* Submitted Requests */}
          <div className="bg-white rounded-xl p-5 shadow-sm">

            <SectionHeading
              title="My Submitted Requests"
              link="/my-requests"
            />

            <div className="space-y-4">

              {submittedRequests.length > 0 ? (
                submittedRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-center gap-3">

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {request.source} → {request.destination}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          Request #{request.id}
                        </p>
                      </div>

                      <StatusBadge status={request.status} />

                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">
                  You haven't submitted any ride requests.
                </p>
              )}

            </div>
          </div>

          {/* Received Requests */}
          <div className="bg-white rounded-xl p-5 shadow-sm">

            <SectionHeading
              title="Requests Received"
              link="/manage-requests"
            />

            <div className="space-y-4">

              {receivedRequests.length > 0 ? (
                receivedRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-center gap-3">

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {request.passenger}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {request.source} → {request.destination}
                        </p>
                      </div>

                      <StatusBadge status={request.status} />

                    </div>

                    <Link
                      to="/manage-requests"
                      className="inline-block mt-3 text-sm text-green-700 font-semibold hover:underline"
                    >
                      Manage Request →
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">
                  No ride requests received.
                </p>
              )}

            </div>
          </div>
        </section>

        {/* Upcoming Rides */}
        <section className="mb-9">

          <SectionHeading
            title="My Upcoming Rides"
            link="/my-rides"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {upcomingRides.length > 0 ? (
              upcomingRides.map((ride) => (
                <div
                  key={ride.id}
                  className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500"
                >
                  <div className="flex justify-between items-center">

                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {ride.role}
                    </span>

                    <span>📅</span>
                  </div>

                  <h3 className="font-bold text-gray-800 mt-3">
                    {ride.source} → {ride.destination}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {ride.date} · {ride.time}
                  </p>

                  <Link
                    to={`/ride/${ride.id}`}
                    className="inline-block mt-4 text-sm font-semibold text-green-700 hover:underline"
                  >
                    View Ride →
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                You have no upcoming rides.
              </p>
            )}

          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Notifications
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              You have {unreadNotifications} unread notifications.
            </p>
          </div>

          <Link
            to="/notifications"
            className="bg-green-50 text-green-700 px-5 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            View Notifications →
          </Link>

        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 EcoPool. Travel Together, Travel Better.
      </footer>

    </div>
  );
};

export default FacultyDashboard;
