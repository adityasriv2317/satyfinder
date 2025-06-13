import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch featured properties from backend
    fetch("/api/properties/featured")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch(() => setProperties([]));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {properties.length === 0 ? (
        <div className="col-span-full text-center text-slate-500 dark:text-slate-400">
          No properties found.
        </div>
      ) : (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyGrid;
