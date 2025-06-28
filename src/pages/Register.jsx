import { useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/users/create`, formData);
      setUserId(res.data.userId);
      localStorage.setItem("userId", res.data.userId);
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response?.status === 409) {
        setError("This email is already registered. Please use a different one.");
      } else {
        setError("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create Your MediVerse Account</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>

      {userId && (
        <div className="mt-6 bg-green-50 text-green-700 p-4 rounded shadow">
          <p className="text-lg font-medium">🎉 Account created! Your unique User ID is:</p>
          <p className="text-xl font-bold mt-2">{userId}</p>
          <p className="mt-2">Use this ID to log in and view your appointments.</p>
        </div>
      )}

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
    </div>
  );
}
