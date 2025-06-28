import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/mediverse-logo.jpg" alt="MediVerse Logo" className="h-12 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link className="hover:text-blue-600" to="/">Home</Link>
          <Link className="hover:text-blue-600" to="/book">Book Appointment</Link>
          <Link className="hover:text-blue-600" to="/edoctor">eDoctor</Link>
          <Link className="hover:text-blue-600" to="/login">Login</Link>
          <Link className="hover:text-blue-600" to="/register">Register</Link>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Animated Mobile Dropdown */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/book" onClick={() => setMenuOpen(false)}>Book Appointment</Link>
          <Link to="/edoctor" onClick={() => setMenuOpen(false)}>eDoctor</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          <div className="flex space-x-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
