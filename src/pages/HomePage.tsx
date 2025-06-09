import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-green-100 via-white to-green-200">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome to SmartCNG
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-gray-700 max-w-3xl text-center mb-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Your intelligent solution for finding and booking CNG fuel stations effortlessly.
        With real-time station data and a user-friendly interface, SmartCNG helps you skip the queues and save valuable time.
      </motion.p>

      <motion.p 
        className="text-md md:text-lg text-gray-600 max-w-3xl text-center mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 1 }}
      >
        Find, book, and refuel at the nearest CNG stations in just a few clicks. Our system shows live availability so you can make informed decisions before heading out.
        Whether you're commuting daily or planning a long drive, SmartCNG ensures your fueling experience is smooth and efficient.
      </motion.p>

      <motion.ul 
        className="text-left text-gray-700 mb-8 space-y-2"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.1, duration: 1 }}
      >
        <li>🔍 <strong>Simply search</strong> for a station</li>
        <li>📅 <strong>Pick</strong> your preferred time slot</li>
        <li>⛽ <strong>View</strong> availability and distance</li>
        <li>✅ <strong>Book</strong> instantly and fuel without delays</li>
      </motion.ul>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
          🚀 Get Started
        </button>
      </motion.div>

      <p className="mt-10 text-gray-500 text-sm">
        With <strong>500+</strong> stations, <strong>10K+</strong> happy users, and <strong>24/7</strong> support — built for convenience, reliability, and speed.
      </p>
    </div>
  );
};

export default HomePage;
