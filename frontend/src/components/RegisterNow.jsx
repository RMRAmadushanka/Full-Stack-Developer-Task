import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
};

const RegisterNow = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-6">
            <motion.div
                className="text-center mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="text-4xl font-semibold text-white mb-2">Register Now</h2>
                <p className="text-lg text-gray-300">Join us for an unforgettable experience!</p>
            </motion.div>
            <motion.div
                className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={1}
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { id: 'firstName', label: 'First Name', type: 'text' },
                            { id: 'lastName', label: 'Last Name', type: 'text' },
                            { id: 'jobTitle', label: 'Job Title', type: 'text' },
                            { id: 'company', label: 'Company', type: 'text' },
                            { id: 'mobileNumber', label: 'Mobile Number', type: 'text' },
                            { id: 'email', label: 'Email Address', type: 'email' },
                            { id: 'website', label: 'Company Website URL', type: 'text' },
                        ].map((field, index) => (
                            <motion.div
                                key={field.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                custom={index * 0.2}
                            >
                                <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2">
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    name={field.id}
                                    type={field.type}
                                    required
                                    className="w-full px-4 py-2 text-gray-800 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="flex items-center space-x-2"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={1.5}
                    >
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="h-4 w-4 text-purple-600 border-gray-600 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300">
                            By filling out the registration form to attend our event, you agree and consent to{' '}
                            <a href="#" className="text-blue-400 hover:underline">Cogent Solutions Privacy Policy</a>.
                        </label>
                    </motion.div>
                    <motion.button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-md hover:bg-purple-700 transition duration-200"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={1.8}
                    >
                        Register
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default RegisterNow;