// src/components/DoctorList.jsx
import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Dr. Aman Gupta",
    specialty: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

export default function DoctorList() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-12">
          Our Expert Doctors
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {doc.name}
              </h3>
              <p className="text-blue-600 font-medium">{doc.specialty}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href="/book"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
                >
                  Book Appointment
                </a>
                <a
                  href="/edoctor"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm px-4 py-2 rounded-md"
                >
                  eDoctor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
