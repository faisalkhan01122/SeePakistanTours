// LearnMoreSection.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const LearnMoreSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-pink-500 text-white py-20 px-6">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Want to Learn More?
        </h2>
        <p className="text-lg md:text-xl mb-10 font-light text-white/90 drop-shadow">
          We’re here to help whether you need information or already have a
          travel program.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/923430762110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-lg transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp Us
          </a>

          <span className="text-white font-medium text-lg">or</span>

          <a
            href="/get-a-quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-indigo-700 font-semibold text-lg shadow-lg transition duration-300"
          >
            <FaEnvelope className="text-2xl" />
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LearnMoreSection;
