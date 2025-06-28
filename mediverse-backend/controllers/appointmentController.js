const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    console.log("📥 Booking Request:", req.body);

    const { fullName, email, phone, doctorName, date, time, userId } = req.body;

    if (!userId) {
      console.warn("❗ No userId provided");
      return res.status(400).json({ message: "User ID is required" });
    }

    const newAppointment = new Appointment({
      fullName,
      email,
      phone,
      doctorName,
      date,
      time,
      userId,
    });

    await newAppointment.save();
    console.log("✅ Saved Appointment:", newAppointment);

    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("❌ Booking failed:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



