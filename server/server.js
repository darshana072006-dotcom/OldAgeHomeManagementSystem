const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

// Import Routes
const residentRoutes = require("./routes/residentRoutes");
const healthRoutes = require("./routes/healthRoutes");
const medicalHistoryRoutes = require("./routes/medicalHistoryRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const staffRoutes = require("./routes/staffRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Old Age Home Management System Backend is Running!");
});

// API Routes
app.use("/api/residents", residentRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/medical-history", medicalHistoryRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});