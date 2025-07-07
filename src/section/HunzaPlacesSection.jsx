import React from "react";
import {
  FaMountain,
  FaLandmark,
  FaTree,
  FaMapMarkerAlt,
} from "react-icons/fa";

const hunzaPlaces = [
  { title: "Baltit Fort", icon: <FaLandmark /> },
  { title: "Borith Lake", icon: <FaTree /> },
  { title: "Rakaposhi View Point", icon: <FaMountain /> },
  { title: "Altit Fort", icon: <FaLandmark /> },
  { title: "Attabad Lake", icon: <FaTree /> },
  { title: "Karimabad Market", icon: <FaMapMarkerAlt /> },
  { title: "Passu Cones & Glacier", icon: <FaMountain /> },
  { title: "Rush Lake", icon: <FaTree /> },
  { title: "Global Village", icon: <FaMapMarkerAlt /> },
  { title: "Khunjerab Pass", icon: <FaMountain /> },
];

const HunzaPlacesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#8DCDF1] via-white to-[#8DCDF1] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">🌄 Places To Visit In Hunza Valley</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the top destinations across Hunza Valley, where culture, history, and nature meet
          to create an unforgettable experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hunzaPlaces.map((place, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
                {place.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{place.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HunzaPlacesSection;
