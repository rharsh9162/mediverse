import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export default function UserDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${API_BASE}/appointments/user/${userId}`);
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchAppointments();
  }, [userId]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Your Appointments</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center text-red-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border shadow rounded-lg">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="py-2 px-4 border-b">Doctor</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{appt.doctorName}</td>
                  <td className="py-2 px-4 border-b">{appt.date}</td>
                  <td className="py-2 px-4 border-b">{appt.time}</td>
                  <td className="py-2 px-4 border-b">{appt.email}</td>
                  <td className="py-2 px-4 border-b">{appt.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
