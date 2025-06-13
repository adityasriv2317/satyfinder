import React, { useContext } from "react";
import { cn } from "../utils/cn";
import { ThemeContext } from "../contexts/themeContext";
import { colorClasses } from "../utils/colorClasses";

const PropertyCard = ({ property }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <a
      href={`/property/${property.id}`}
      className={cn(
        "block rounded-lg overflow-hidden shadow hover:shadow-lg transition border",
        darkMode ? colorClasses.propertyCard.dark : colorClasses.propertyCard.light
      )}
    >
      <img
        src={property.imageUrl || "/default-property.jpg"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className={cn("text-lg font-semibold mb-1 truncate", darkMode ? colorClasses.propertyCardTitle.dark : colorClasses.propertyCardTitle.light)}>{property.title}</h3>
        <div className={cn("text-sm mb-2", darkMode ? colorClasses.propertyCardLocation.dark : colorClasses.propertyCardLocation.light)}>{property.location}</div>
        <div className={cn("font-bold text-lg", darkMode ? colorClasses.propertyCardPrice.dark : colorClasses.propertyCardPrice.light)}>${property.pricePerNight} <span className="font-normal text-sm">/ night</span></div>
      </div>
    </a>
  );
};

export default PropertyCard;
