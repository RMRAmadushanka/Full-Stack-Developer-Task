import React from 'react';
import { motion } from 'framer-motion';

const AboutFinastra = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto w-full text-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        About Finastra
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed mb-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses, and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world’s top 50 banks.
      </motion.p>
      <motion.p
        className="text-center text-sm text-gray-400"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        For more information, visit{' '}
        <a href="https://www.finastra.com" className="text-blue-400 hover:underline">
          www.finastra.com
        </a>
      </motion.p>
      </div>
    </section>
  );
};

export default AboutFinastra;
