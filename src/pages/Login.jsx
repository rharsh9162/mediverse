import { useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/users/login`, { userId });
      localStorage.setItem("userId", userId);
      const apptRes = await axios.get(`${API_BASE}/appointments/user/${userId}`);
      setAppointments(apptRes.data);
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid user ID or server error.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Login to MediVerse</h2>

      <form onSubmit={handleLogin} className="bg-white shadow rounded-xl p-6 space-y-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your unique User ID"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          View My Appointments
        </button>
      </form>

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      {appointments.length > 0 && (
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Your Appointments</h3>
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border px-4 py-2">Doctor</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt._id}>
                  <td className="border px-4 py-2">{appt.doctorName}</td>
                  <td className="border px-4 py-2">{appt.date}</td>
                  <td className="border px-4 py-2">{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
