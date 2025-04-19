import React from 'react';
import { motion } from 'framer-motion';
import bgHeroImage from '../assets/images/Hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Event introduction"
    >
      {/* Background Image with Fallbacks */}
      <div className="absolute inset-0">
        <img 
          src={bgHeroImage} 
          alt="" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-purple-900/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl px-6 py-24 md:py-32 text-center">
        <motion.p
          className="text-base md:text-lg text-gray-300 mb-2 md:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Organized By
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 md:mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          FINASTRA
        </motion.h2>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Reimagine Banking: <br className="hidden sm:block" /> Adapt. Evolve. Thrive.
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Date: 9th April 2025</p>
          <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
          <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center"
        >
          <a
            href="#register"
            className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-base md:text-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 lg:hidden"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;