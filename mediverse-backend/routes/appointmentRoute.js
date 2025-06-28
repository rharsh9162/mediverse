const express = require("express");
const router = express.Router();
const { bookAppointment } = require("../controllers/appointmentController");
const Appointment = require("../models/Appointment");

// POST /api/appointments
router.post("/", bookAppointment);

// GET /api/appointments/user/:userId
router.get("/user/:userId", async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
});

module.exports = router;
