import React, { useState } from "react";

export default function EDoctor() {
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/edoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, symptoms }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-24 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">eDoctor Medical Assistant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Your Symptoms</label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            {loading ? "Generating..." : "Get Medical Receipt"}
          </button>
        </form>

        {result && (
          <div className="mt-8 bg-gray-50 p-4 border rounded space-y-3">
            <h3 className="text-xl font-semibold mb-2">Your Medical Receipt</h3>
            <p><strong>Name:</strong> {result.name}</p>
            {result.age && <p><strong>Age:</strong> {result.age}</p>}
            <p><strong>Diagnosis:</strong> {result.diagnosis}</p>

            <div>
              <strong>Medicines:</strong>
              <ul className="list-disc list-inside ml-2">
                {result.medicines.map((med, index) => (
                  <li key={index}>
                    {med.name} — {med.dosage} ({med.duration})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Precautions:</strong>
              <ul className="list-disc list-inside ml-2">
                {result.precautions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {result.nextSteps && (
              <p><strong>Next Steps:</strong> {result.nextSteps}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
