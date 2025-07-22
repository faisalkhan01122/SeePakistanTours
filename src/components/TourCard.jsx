// components/TourCard.jsx
import { motion } from "framer-motion";

export default function TourCard({ tour }) {
  const { image, title, duration, link } = tour;

  return (
    <motion.a
      href={link}
      // target="_blank"
      // rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-xl overflow-hidden shadow-lg group transition-all"
    >
      {/* Background image */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-90 transition-opacity duration-300" />

        {/* Text overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="backdrop-blur-md bg-white/10 rounded-lg px-4 py-3 shadow-md">
            <h3 className="text-white font-semibold text-lg leading-snug">
              {title}
            </h3>
            <p className="text-gray-300 text-sm mt-1">{duration}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
