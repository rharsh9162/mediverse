import { useParams } from "react-router-dom";

export default function About() {
  const { doctorId } = useParams();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Doctor Profile</h2>
      <p className="text-gray-700">Details for doctor ID: {doctorId}</p>

      {/* Later: fetch real resume based on ID */}
      <img
        src="https://via.placeholder.com/400x500?text=Doctor+Resume"
        alt="Doctor Resume"
        className="mt-6 border rounded shadow-md"
      />
    </div>
  );
}
