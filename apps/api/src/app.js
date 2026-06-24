const express = require("express");
const cors = require("cors");

const leadsRoutes = require("./routes/leads.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Creative Nexus API is running",
  });
});

// API Routes
app.use("/api/leads", leadsRoutes);

module.exports = app;