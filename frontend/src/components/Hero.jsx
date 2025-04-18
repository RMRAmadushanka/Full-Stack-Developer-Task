import React from 'react'
import { motion } from 'framer-motion';
import bgHeroImage from '../assets/images/Hero-bg.jpg'
const Hero = () => {
    return (
        <div
            className="relative bg-black text-white bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url(${bgHeroImage})`,
            }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-purple-900/90 blur-2xl opacity-80"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 md:py-32">
          <motion.p
          className="text-lg text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Organized By
        </motion.p>

        <motion.h2
          className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 sm:mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          FINASTRA
        </motion.h2>

        <motion.h1
          className="text-7xl font-bold text-white leading-tight mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Reimagine Banking: <br /> Adapt. Evolve. Thrive.
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Date: 9th April 2025<br />
          Time: 9:30 AM - 2:00 PM GMT+2<br />
          The Nile Ritz-Carlton, Cairo, Egypt
        </motion.p>

        <motion.a
          href="#register"
          className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 sm:block lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Register Now
        </motion.a>
            </div>
        </div>
    )
}

export default Hero