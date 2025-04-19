import React, { useState } from 'react';
import logo from '../assets/images/Cogent-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent py-4 px-6 absolute top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Cogent Solutions Logo" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex space-x-8 text-white text-base font-light">
          <a
            href="#overview"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-200"
          >
            Event Overview
          </a>
          <a
            href="#agenda"
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-200"
          >
            Agenda
          </a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#register"
            className="px-5 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-base font-semibold hover:opacity-90 transition duration-300"
          >
            Register Now
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white py-6 px-6 shadow-lg transition-all duration-300 ease-in-out z-40">
          <nav className="space-y-4 text-lg font-light">
            <a
              href="#overview"
              className="block hover:text-pink-400"
              onClick={() => setMenuOpen(false)}
            >
              Event Overview
            </a>
            <a
              href="#agenda"
              className="block hover:text-pink-400"
              onClick={() => setMenuOpen(false)}
            >
              Agenda
            </a>
            <a
              href="#register"
              className="block mt-4 px-4 py-2 text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:opacity-90 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
