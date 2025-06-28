import React from "react";
import HeroSection from "../components/HeroSection";
import DoctorList from "../components/DoctorList";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AboutSection />
      <DoctorList />
      <ContactSection />
      <Footer />
    </div>
  );
}
