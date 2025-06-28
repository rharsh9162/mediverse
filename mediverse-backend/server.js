const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const appointmentRoutes = require("./routes/appointmentRoute");
const edoctorRoutes = require("./routes/edoctorRoute"); // ✅ Don’t forget this!
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "*", // Allow all origins (temporarily)
  methods: ["GET", "POST"],
}));

// ✅ Mount both routes properly
app.use("/api/appointments", appointmentRoutes);
app.use("/api/edoctor", edoctorRoutes); // 👈 This line is REQUIRED for eDoctor
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
