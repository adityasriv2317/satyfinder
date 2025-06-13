import React from "react";
import { cn } from "../utils/cn";
import { colorClasses } from "../utils/colorClasses";

const FilterBar = () => {
  const darkMode = document.documentElement.classList.contains("dark");
  return (
    <div className="flex flex-wrap gap-3 mb-6 items-center">
      <input type="text" placeholder="Location" className={`px-3 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
      <input type="number" min="0" placeholder="Min Price" className={`w-28 px-3 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
      <input type="number" min="0" placeholder="Max Price" className={`w-28 px-3 py-2 rounded ${darkMode ? colorClasses.filterBarInput.dark : colorClasses.filterBarInput.light}`} />
      <select className={`px-3 py-2 rounded ${darkMode ? colorClasses.filterBarSelect.dark : colorClasses.filterBarSelect.light}`}>
        <option>Any Availability</option>
        <option>Available Now</option>
        <option>Booked</option>
      </select>
      <button className={colorClasses.filterBarButton.light}>Apply</button>
    </div>
  );
};

export default FilterBar;
