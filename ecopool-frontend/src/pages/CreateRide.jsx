
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateRide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    totalSeats: "4",
    vehicle: "",
    fuelCostEstimate: "",
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

    if (formData.source.trim().toLowerCase() ===
        formData.destination.trim().toLowerCase()) {
      setError("Starting point and destination cannot be the same.");
      return;
    }

    setError("");

    console.log("Ride details:", formData);

    alert("Ride details captured! Backend integration is pending.");

    navigate("/find-rides");
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>
          Eco<span style={{ color: "#00a651" }}>Pool</span>
        </h2>

        <div style={styles.navLinks}>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          <Link to="/find-rides" style={styles.link}>Find Rides</Link>
          <Link to="/profile" style={styles.link}>My Profile</Link>
        </div>
      </nav>

      <main style={styles.container}>
        <Link to="/dashboard" style={styles.backLink}>
          ← Back to Dashboard
        </Link>

        <h1 style={styles.heading}>Create a Ride</h1>
        <p style={styles.subtitle}>
          Share your journey and help others travel together.
        </p>

        <form onSubmit={handleSubmit} style={styles.card}>
          <h3 style={styles.sectionHeading}>Journey Details</h3>

          <div style={styles.formGroup}>
            <label>Starting Point</label>
            <input
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Enter starting location"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Destination</label>
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.grid}>
            <div style={styles.formGroup}>
              <label>Travel Date</label>
              <input
                type="date"
                name="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={formData.date}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label>Departure Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          <hr style={styles.divider} />

          <h3 style={styles.sectionHeading}>Vehicle Details</h3>

          <div style={styles.grid}>
            <div style={styles.formGroup}>
              <label>Total Passenger Seats</label>
              <select
                name="totalSeats"
                value={formData.totalSeats}
                onChange={handleChange}
                style={styles.input}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7].map((seat) => (
                  <option key={seat} value={seat}>
                    {seat} Seats
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label>Vehicle Type</label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <hr style={styles.divider} />

          <h3 style={styles.sectionHeading}>Cost Details</h3>

          <div style={styles.formGroup}>
            <label>Estimated Total Fuel Cost (₹)</label>
            <input
              type="number"
              name="fuelCostEstimate"
              value={formData.fuelCostEstimate}
              onChange={handleChange}
              placeholder="Enter estimated fuel cost"
              min="0"
              required
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <div style={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              style={styles.cancelButton}
            >
              Cancel
            </button>

            <button type="submit" style={styles.submitButton}>
              Publish Ride
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5faf7",
    fontFamily: "Arial, sans-serif",
    color: "#172033",
  },
  navbar: {
    background: "#fff",
    padding: "18px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    flexWrap: "wrap",
    gap: "15px",
  },
  logo: { margin: 0, fontSize: "27px" },
  navLinks: { display: "flex", gap: "20px", flexWrap: "wrap" },
  link: {
    textDecoration: "none",
    color: "#172033",
    fontWeight: "600",
  },
  container: {
    maxWidth: "750px",
    margin: "40px auto",
    padding: "0 20px",
  },
  backLink: {
    color: "#00a651",
    textDecoration: "none",
    fontWeight: "600",
  },
  heading: { fontSize: "32px", marginBottom: "8px" },
  subtitle: { color: "#687386", marginBottom: "25px" },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },
  sectionHeading: { marginBottom: "20px", fontSize: "19px" },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    marginBottom: "20px",
    flex: 1,
  },
  input: {
    padding: "13px",
    border: "1px solid #dce5df",
    borderRadius: "8px",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e8eee9",
    margin: "25px 0",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "25px",
  },
  cancelButton: {
    padding: "13px 22px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "13px 22px",
    background: "#00a651",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: { color: "#d32f2f", fontSize: "14px" },
};

export default CreateRide;
