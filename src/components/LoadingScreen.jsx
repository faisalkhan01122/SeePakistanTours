"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing Zufta Travels...",
    "Loading unforgettable destinations...",
    "Preparing travel guides and itineraries...",
    "Finalizing your custom tour experience...",
    "Almost there...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 1000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary-100 via-yellow-400 to-primary-400 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background floating lights */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center text-yellow-900 max-w-md mx-auto px-6">
        {/* Logo and name */}
        <motion.div
          className="mb-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative mx-auto w-24 h-24 mb-4">
            <img
              src="/zuftalogo.png"
              alt="Zufta Travels"
              className="w-full h-full object-contain rounded-full shadow-2xl"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-white/10 rounded-full animate-spin-slow"></div>
          </div>
          <motion.h1
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Zufta Travels
          </motion.h1>
          <motion.p
            className="text-yellow-800 text-md font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Discover Pakistan Like Never Before
          </motion.p>
        </motion.div>

        {/* Progress Circle */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="relative w-28 h-28 mx-auto mb-6">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="#fff"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={283}
                strokeDashoffset={283 - (283 * progress) / 100}
                transition={{ duration: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-xl font-bold text-white"
                key={progress}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>

          {/* Bar Progress */}
          <div className="w-full bg-white/30 rounded-full h-2 mb-5">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Step Text */}
          <motion.p
            className="text-yellow-100 text-sm font-medium"
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {loadingSteps[currentStep]}
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          className="mt-8 text-yellow-100 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Delivering unforgettable travel experiences across Pakistan
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
