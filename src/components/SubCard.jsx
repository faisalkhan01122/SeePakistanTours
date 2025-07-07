import React from "react";
import { FaClock } from "react-icons/fa";

const SubCard = ({ day, title, duration, image, description, reverse }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
      {/* Image Section */}
      <div className={`md:w-1/2 w-full ${reverse ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full space-y-4">
        <div className="text-rose-600 font-bold text-sm">Day {day}</div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm gap-2">
          <FaClock className="text-rose-500" />
          <span>{duration}</span>
        </div>
        <div
          className="text-gray-600 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default SubCard;
