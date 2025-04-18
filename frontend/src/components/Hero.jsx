import React from 'react'
import bgHeroImage from '../assets/images/Hero-bg.jpg'
const Hero = () => {
    return (
        <div
            className="relative bg-black text-white bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url(${bgHeroImage})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/70 to-purple-900/90 blur-2xl opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 md:py-32">
                <p className="text-lg text-gray-300 mb-2">Organized By</p>
                <h2 className="text-7xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 sm:mb-8  ">
                    FINASTRA
                </h2>
                <h1 className="text-7xl font-bold text-white leading-tight mb-4">
                    Reimagine Banking: <br /> Adapt. Evolve. Thrive.
                </h1>
                <p className=" text-2xl text-gray-200 mb-6">
                    Date: 9th April 2025<br />
                    Time: 9:30 AM - 2:00 PM GMT+2<br />
                    The Nile Ritz-Carlton, Cairo, Egypt
                </p>
                <a
                    href="#register"
                    className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 sm:block lg:hidden"
                >
                    Register Now
                </a>
            </div>
        </div>
    )
}

export default Hero