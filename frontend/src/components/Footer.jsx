import React from 'react';
import aw1 from '../assets/images/bestwork-01.png';
import aw2 from '../assets/images/bestwork-02.png';
import aw3 from '../assets/images/bestwork-03.png';
import aw4 from '../assets/images/bestwork-04.png';

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Cogent Solutions™</h2>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">
            Through our conferences, we transform your business challenges into opportunities. Our clients and customers are leading government entities and the Fortune 500 companies.
          </p>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Awards</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <img src={aw1} alt="Award 1" className="w-32 h-32 object-contain" />
              <img src={aw2} alt="Award 2" className="w-32 h-32 object-contain" />
              <img src={aw3} alt="Award 3" className="w-32 h-32 object-contain" />
              <img src={aw4} alt="Award 4" className="w-32 h-32 object-contain" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end md:w-1/2 text-center md:text-left">
          <div className="space-y-6 w-full md:w-auto">
            <div className="space-y-1">
            <h4 className="text-xl font-semibold mb-4 w-full ">Our Office</h4>
              <p className="flex items-center text-sm text-gray-300">
                <FaBuilding className="mr-2" /> Middle East & Africa HQ
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaMapMarkerAlt className="mr-2" /> Office No: 209, The Metropolis Tower
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaMapMarkerAlt className="mr-2" /> Business Bay, Dubai, United Arab Emirates
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center text-sm text-gray-300">
                <FaBuilding className="mr-2" /> Asia Pacific HQ
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaMapMarkerAlt className="mr-2" /> 7th floor Green Lanka Tower, Colombo
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaMapMarkerAlt className="mr-2" /> Sri Lanka
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center text-sm text-gray-300">
                <FaBuilding className="mr-2" /> Saudi Arabia HQ
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaMapMarkerAlt className="mr-2" /> Riyadh, Saudi Arabia
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaPhoneAlt className="mr-2" /> +971 50 5718867
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <FaEnvelope className="mr-2" /> partnerships@cogentsolutions.ae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
