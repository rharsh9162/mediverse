import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-12">
      <p>&copy; {new Date().getFullYear()} MediVerse. All rights reserved.</p>
    </footer>
  );
}
