import React from 'react';
import { motion } from 'framer-motion';
import { SpeakerCard } from './SpeakerCard';

import Speaker1 from '../assets/images/Speaker1.png';
import Speaker2 from '../assets/images/Speaker2.jpeg';
import Speaker3 from '../assets/images/Speaker3.jpeg';
import Speaker4 from '../assets/images/Speaker4.jpeg';
import Speaker5 from '../assets/images/Speaker5.jpeg';
import Speaker6 from '../assets/images/Speaker6.jpeg';
import Speaker7 from '../assets/images/Speaker7.jpeg';
import Speaker8 from '../assets/images/Speaker8.jpeg';
import Speaker9 from '../assets/images/Speaker9.jpeg';
import Speaker10 from '../assets/images/Speaker10.jpeg';
import Speaker11 from '../assets/images/Speaker11.jpeg';
import Speaker12 from '../assets/images/Speaker12.jpeg';
import Speaker13 from '../assets/images/Speaker13.jpeg';
import Speaker14 from '../assets/images/Speaker14.jpeg';
import Speaker15 from '../assets/images/Speaker15.png';

const OurSpeakers = () => {
  const speakers = [
    { name: "Mr. Mohamed Elazzazy", title: "Head of IT Governance and Change Management", company: "Al-Baraka Bank Egypt", image: Speaker1 },
    { name: "Mr. Shehab Moustafa", title: "Country Center of Excellence Director", company: "Money Fellows", image: Speaker2 },
    { name: "Mr. Marwan Abouzeid", title: "Principal Solutions Consultant & Customer Value Lead", company: "Finastra", image: Speaker3 },
    { name: "Mr. Karim El Mourabet", title: "Solution Consulting Director", company: "Finastra", image: Speaker4 },
    { name: "Ms. Siobhan Byron", title: "Executive Vice President", company: "Finastra", image: Speaker5 },
    { name: "Mr. Narendra Mistry", title: "Chief Product and Technology Officer", company: "Finastra", image: Speaker6 },
    { name: "Mr. Ahmed Hamdy Bahey El Din", title: "Head of Information Technology", company: "Incolease", image: Speaker7 },
    { name: "Mr. Emad Shawky Habib Hanna", title: "Chief Data and Analytics Officer", company: "Banque Misr", image: Speaker8 },
    { name: "Ms. Heba Yehia", title: "Head of Digital Products", company: "Arab African International Bank", image: Speaker9 },
    { name: "Mr. Hamid Nirouzad", title: "Managing Director - Africa", company: "Finastra Universal", image: Speaker10 },
    { name: "Mr. Rudy Kawmi", title: "Managing Director - Middle East, Africa & Asia-Pacific", company: "Finastra Universal Banking", image: Speaker11 },
    { name: "Mr. Daragh O'Byrne", title: "Senior Director, Marketing", company: "Finastra Universal Banking", image: Speaker12 },
    { name: "Dr. Ismail Ali", title: "Co-Founder and CEO", company: "CARTTech", image: Speaker13 },
    { name: "Mr. Matthew Hughes", title: "Head of FSRL International Markets", company: "Atos", image: Speaker14 },
    { name: "Ms. Riham Muhammad", title: "Corporate CEX Senior Analyst", company: "FABMIRS", image: Speaker15 },
  ];

  const lastThreeSpeakers = speakers.slice(-3);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.slice(0, -3).map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {lastThreeSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeakers;
