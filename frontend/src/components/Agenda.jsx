import React from 'react';
import { motion } from 'framer-motion';

const agendaItems = [
  { time: '09:30 AM', event: 'Registration & Welcome Coffee', speakers: '', status: 'Registration' },
  { time: '10:00 AM', event: 'Opening Remarks', speakers: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking', status: '' },
  { time: '10:10 AM', event: 'Keynote session: Digital Transformation in a Gen AI World', speakers: 'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking', status: '' },
  { time: '10:30 AM', event: 'Decoding the Future - Transformation: The Opportunity & Time is Now', speakers: 'Mr. Daragh O\'Byrne, Senior Director, Marketing, Universal Banking, Finastra', status: '' },
  { time: '11:00 AM', event: 'Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World', speakers: 'Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking', status: '' },
  { time: '11:30 AM', event: 'Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead', speakers: 'Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking', status: '' },
  { time: '12:00 PM', event: 'Coffee Break & Networking', speakers: '', status: '' },
  { time: '12:30 PM', event: 'Panel Discussion: Cost to Serve: Deliver Customer Delight', speakers: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking', status: '' },
  { time: '01:00 PM', event: 'The Essential Elements: What do you need to be "all things to all people"?', speakers: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking', status: '' },
  { time: '01:30 PM', event: 'Making the case for change: The Question is How', speakers: 'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking', status: '' },
  { time: '01:50 PM', event: 'Closing Remarks', speakers: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking', status: '' },
  { time: '02:00 PM', event: 'Lunch', speakers: '', status: '' },
];

const Agenda = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 px-6 bg-purple-200 text-gray-800">
      <motion.h2
        className="text-3xl font-semibold text-center text-purple-600 mb-8"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Agenda
      </motion.h2>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-6 border-b border-gray-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-center w-1/5">
                  <span className="text-lg font-medium text-purple-600">{item.time}</span>
                  {index === 0 && item.status && (
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm mt-2">{item.status}</span>
                  )}
                </div>
                <div className="flex flex-col w-3/5">
                  <h3 className="text-xl font-semibold text-left text-gray-800">{item.event}</h3>
                  {item.speakers && <p className="text-sm text-gray-600 mt-1">{item.speakers}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
