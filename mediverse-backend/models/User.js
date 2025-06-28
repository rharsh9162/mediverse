// ✅ Add this line at the top
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);
