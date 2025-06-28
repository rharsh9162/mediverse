import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            About <span className="text-blue-600">MediVerse</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            MediVerse is a modern healthcare solution that brings patients and doctors together in one place. We aim to simplify healthcare access, improve efficiency, and provide quality care through technology.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our platform allows users to book appointments, consult with eDoctors, and track their health journeys — all in a single, secure environment.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
