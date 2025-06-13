import React from "react";
import { colorClasses } from "../utils/colorClasses";

const HeroSection = () => {
  const darkMode = document.documentElement.classList.contains("dark");
  return (
    <section
      className={`w-full flex flex-col items-center justify-center py-12 ${darkMode ? colorClasses.heroSection.dark : colorClasses.heroSection.light}`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-slate-900 dark:text-slate-100">Find your next stay</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-center max-w-xl">Discover curated short- and long-term rentals for every journey.</p>
      <form className="flex flex-col md:flex-row gap-3 w-full max-w-2xl">
        <input type="text" placeholder="Location" className={`flex-1 px-4 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
        <input type="date" className={`px-4 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
        <input type="date" className={`px-4 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
        <input type="number" min="1" placeholder="Guests" className={`w-24 px-4 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
        <button type="submit" className={colorClasses.filterBarButton.light}>Search</button>
      </form>
    </section>
  );
};

export default HeroSection;
