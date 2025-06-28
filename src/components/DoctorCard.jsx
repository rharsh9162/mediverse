// src/components/DoctorCard.jsx

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 transition hover:shadow-2xl">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialty}</p>
      <div className="mt-4 flex gap-2">
        <a href={doctor.resume} target="_blank" rel="noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Profile
          </button>
        </a>
        <a href="/book">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Book
          </button>
        </a>
      </div>
    </div>
  );
}
