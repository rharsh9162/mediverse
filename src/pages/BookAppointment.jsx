import { useState } from "react";
import axios from "axios";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const userId = localStorage.getItem("userId"); // 🔹 Get userId from localStorage

  try {
    const res = await axios.post("http://localhost:5000/api/appointments", {
      ...formData,
      userId, // 🔹 Include userId in appointment
    });
    setMessage(res.data.message);
  } catch (error) {
  console.error("Booking failed:", error.message);
  console.log("🔍 Full Axios error object:", error);
  setMessage("Booking failed. Please try again.");  }
};


  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Book an Appointment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" required placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />
          <input type="email" name="email" required placeholder="Email"
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />
          <input type="text" name="phone" required placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />
          <input type="text" name="doctorName" required placeholder="Doctor Name"
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />
          <input type="date" name="date" required
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />
          <input type="time" name="time" required
            className="w-full border px-4 py-2 rounded-md" onChange={handleChange} />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-lg font-semibold text-green-600">{message}</p>
        )}
      </div>
    </section>
  );
}
