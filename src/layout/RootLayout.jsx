"use client";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "../components/LoadingScreen";
import LearnMoreSection from "../components/LearnMoreSection";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="min-h-screen  flex flex-col bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow overflow-hidden">
            <Outlet />
          </main>
          <motion.div
            className="text-center py-12 px-4 bg-gradient-to-br from-yellow-700 via-gray-900 to-yellow-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
              Book Now with Zufta Travel
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Discover breathtaking tours and create unforgettable memories with
              Zufta Travel. From hills to hidden gems — your next adventure
              starts here!
            </p>
            <a
              href="/get-a-quote"
              className="bg-yellow-400 text-black text-xl font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition"
            >
              Book Now
            </a>
          </motion.div>
          <LearnMoreSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default RootLayout;
