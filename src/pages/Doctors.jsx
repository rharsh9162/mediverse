import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Riya Mehta",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Aarav Kapoor",
    specialty: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Dr. Sneha Nair",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];


export default function Doctors() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
            <p className="text-gray-600 mb-4">{doc.specialty}</p>
            <Link
              to={`/about/${doc.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              About
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
