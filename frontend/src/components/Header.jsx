import React, { useState } from 'react';
import logo from '../assets/images/Cogent-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent py-4 px-6 absolute top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Cogent Solutions Logo" className="h-16 w-auto" />
        </div>
        <nav className="hidden sm:flex space-x-8 text-white text-lg font-light">
          <a
            href="#overview"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Event Overview
          </a>
          <a
            href="#agenda"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Agenda
          </a>
        </nav>
        <div className="hidden sm:block">
          <a
            href="#register"
            className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300"
          >
            Register Now
          </a>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden w-full bg-black bg-opacity-90 text-white py-4 px-6 mt-2 rounded-b-lg shadow-lg absolute top-full left-0 z-40">
          <a
            href="#overview"
            className="block mb-2 text-lg hover:text-pink-400"
            onClick={() => setMenuOpen(false)}
          >
            Event Overview
          </a>
          <a
            href="#agenda"
            className="block mb-2 text-lg hover:text-pink-400"
            onClick={() => setMenuOpen(false)}
          >
            Agenda
          </a>
          <a
            href="#register"
            className="block mt-4 px-4 py-2 text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
