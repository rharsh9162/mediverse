// src/components/ContactSection.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out with any questions or
            appointment needs.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>support@mediverse.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>123 Health Avenue, New Delhi</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form (non-functional placeholder) */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
