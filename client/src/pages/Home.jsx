import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyGrid from "../components/PropertyGrid";
import FilterBar from "../components/FilterBar";
import { colorClasses } from "../utils/colorClasses";

const Home = () => {
  const { user, isHost } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "bg-slate-900 min-h-screen" : "bg-white min-h-screen"}>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-6">
        <FilterBar />
        {/* Personalized section for logged-in users */}
        {user && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Recommended for you</h2>
            {/* TODO: Add recommended/recently viewed listings */}
          </div>
        )}
        {/* Host CTA */}
        {isHost && (
          <div className="mb-8 flex justify-end">
            <a href="/host/dashboard" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">List Your Property</a>
          </div>
        )}
        <PropertyGrid />
      </div>
    </div>
  );
};

export default Home;
