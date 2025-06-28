import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mediverse</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/book" className="text-gray-700 hover:text-blue-600">Book</Link>
          <Link to="/edoctor" className="text-gray-700 hover:text-blue-600">eDoctor</Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-50">{children}</main>
      <footer className="bg-white text-center p-4 text-sm text-gray-500">
        © 2025 Mediverse. All rights reserved.
      </footer>
    </div>
  );
}
