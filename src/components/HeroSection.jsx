// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 leading-tight">
            Your Gateway to Smarter Healthcare
          </h1>
          <p className="text-gray-600 text-lg">
            Book appointments, get AI-powered health insights, and connect with trusted doctors — all in one place.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 flex-wrap">
            <Link
              to="/book"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/edoctor"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition"
            >
              Try eDoctor
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/doctors_grp.png"
            alt="Doctor group"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
