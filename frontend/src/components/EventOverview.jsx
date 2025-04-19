
import lightbulbIcon from '../assets/icons/lightbulb.png'
import chartIcon from '../assets/icons/chart.png'
import usersIcon from '../assets/icons/users.png'
import graduationIcon from '../assets/icons/graduation.png'
import commentIcon from '../assets/icons/comment.png'
import conferenceBg from '../assets/images/Conference-bg.jpeg'
import { motion } from 'framer-motion';
const EventOverview = () => {
  const listAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const imageAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const headingAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };
  return (
    <div className='bg-black'>
      <section className=" text-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight" initial="hidden"
            whileInView="visible"
            variants={headingAnimation}
            viewport={{ once: false, amount: 0.5 }} >
            Event Overview
          </motion.h2>
          <motion.p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed" initial="hidden"
            whileInView="visible"
            variants={headingAnimation}
            viewport={{ once: false, amount: 0.5 }} >
            Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive."
            This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          </motion.p>
          <div className="space-y-4 sm:space-y-6">
            <motion.p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed" initial="hidden"
              whileInView="visible"
              variants={headingAnimation}
              viewport={{ once: false, amount: 0.5 }} >
              Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
            </motion.p>
            <motion.p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed" initial="hidden"
              whileInView="visible"
              variants={headingAnimation}
              viewport={{ once: false, amount: 0.5 }} >
              Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities.
            </motion.p>
            <motion.p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed" initial="hidden"
              whileInView="visible"
              variants={headingAnimation}
              viewport={{ once: false, amount: 0.5 }} >
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
            </motion.p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center py-16 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-6 lg:mb-0">
            <motion.img
              src={conferenceBg}
              alt="Conference"
              className="w-full h-full object-cover rounded-lg"
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>
          <div className="flex-1 text-center lg:text-left lg:pl-10">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              variants={headingAnimation}
              viewport={{ once: false, amount: 0.5 }}
            >
              TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
            </motion.h2>
            <motion.ul
              className="space-y-4 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              variants={listAnimation}
              viewport={{ once: true }}
            >
              <motion.li className="flex items-center justify-center lg:justify-start space-x-3" initial="hidden" whileInView="visible" variants={listAnimation}>
                <img src={lightbulbIcon} alt="Learn" className="w-6 h-6 filter invert brightness-0" />
                <span>Learn from industry experts</span>
              </motion.li>
              <motion.li className="flex items-center justify-center lg:justify-start space-x-3" initial="hidden" whileInView="visible" variants={listAnimation}>
                <img src={chartIcon} alt="Trends" className="w-6 h-6 filter invert brightness-0" />
                <span>Stay ahead of emerging trends</span>
              </motion.li>
              <motion.li className="flex items-center justify-center lg:justify-start space-x-3" initial="hidden" whileInView="visible" variants={listAnimation}>
                <img src={usersIcon} alt="Connect" className="w-6 h-6 filter invert brightness-0" />
                <span>Connect with fellow banking professionals</span>
              </motion.li>
              <motion.li className="flex items-center justify-center lg:justify-start space-x-3" initial="hidden" whileInView="visible" variants={listAnimation}>
                <img src={graduationIcon} alt="Enhance" className="w-6 h-6 filter invert brightness-0" />
                <span>Enhance your knowledge, skills, and network</span>
              </motion.li>
              <motion.li className="flex items-center justify-center lg:justify-start space-x-3" initial="hidden" whileInView="visible" variants={listAnimation}>
                <img src={commentIcon} alt="Share" className="w-6 h-6 filter invert brightness-0" />
                <span>Share your expertise and experience with peers</span>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventOverview;