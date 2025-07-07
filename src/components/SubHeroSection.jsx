import React from "react";
import {
  FaCarSide,
  FaHotel,
  FaTicketAlt,
  FaGasPump,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const iconMap = {
  map: <FaMapMarkerAlt />,
  car: <FaCarSide />,
  fuel: <FaGasPump />,
  ticket: <FaTicketAlt />,
  hotel: <FaHotel />,
};

const SubHeroSection = ({
  image,
  duration,
  title,
  itinerary,
  whatsappNumber,
}) => {
  return (
    <section className="bg-gradient-to-br from-primary-100 via-white to-primary-300 py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Image */}
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full md:h-[70vh] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-primary-100">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
            {duration}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 leading-snug">
            {title}
          </h2>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3 text-base">
              Itinerary includes:
            </h3>
            <ul className="space-y-3">
              {itinerary.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600 text-sm">
                  <span className="text-primary-500 text-lg mr-3 mt-0.5">
                    {iconMap[item.icon] || <FaMapMarkerAlt />}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi,%20See%20Pakistan%20Tours`}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-lg" />
              Call/WhatsApp for Price & Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
