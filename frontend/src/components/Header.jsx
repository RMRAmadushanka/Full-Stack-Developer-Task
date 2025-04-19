import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Cogent-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header 
      className={`w-full py-4 px-6 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Cogent Solutions Logo" 
            className="h-12 md:h-16 w-auto" 
            width="auto"
            height="auto"
            loading="lazy"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a
            href="#overview"
            className="text-white text-base lg:text-lg font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
          >
            Event Overview
          </a>
          <a
            href="#agenda"
            className="text-white text-base lg:text-lg font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
          >
            Agenda
          </a>
        </nav>
        
        <div className="hidden md:block">
          <a
            href="#register"
            className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-base lg:text-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          >
            Register Now
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none text-2xl p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-container md:hidden w-full bg-gray-900 bg-opacity-95 text-white py-4 px-6 absolute left-0 top-full z-40 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a
              href="#overview"
              className="block text-lg hover:text-pink-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Event Overview
            </a>
            <a
              href="#agenda"
              className="block text-lg hover:text-pink-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Agenda
            </a>
            <a
              href="#register"
              className="block mt-2 px-4 py-2 text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
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