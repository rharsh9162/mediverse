/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scans all components and pages in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D70B2",    // Main accent color from Figma
        accent: "#D9EFFF",     // Soft background card color
        muted: "#F5F7FA",      // Light gray for sections
        dark: "#1E1E2F",       // For dark text or headers
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"], // Prescripto-style font
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),       // better form styling
    require("@tailwindcss/typography"),  // for clean text & content
  ],
};
