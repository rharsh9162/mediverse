const User = require("../models/User");
const Appointment = require("../models/Appointment");
const { v4: uuidv4 } = require("uuid");

exports.createUser = async (req, res) => {
  console.log("📥 Received register request with:", req.body); // ✅
  const { fullName, email, phone } = req.body;
  try {
    const userId = uuidv4();
    const newUser = new User({ fullName, email, phone, userId });
    await newUser.save();
    res.status(201).json({ message: "Account created", userId });
  } catch (err) {
    // 🧠 Add this for clearer error
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Failed to create user" });
  }
};




exports.loginUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findOne({ userId });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};

exports.getUserAppointments = async (req, res) => {
  const { userId } = req.params;
  try {
    const appointments = await Appointment.find({ userId });
    res.status(200).json({ appointments });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
};
