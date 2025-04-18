import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

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

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    company: Yup.string().required('Company is required'),
    mobileNumber: Yup.string()
        .matches(/^\+?\d{7,15}$/, 'Enter a valid mobile number')
        .required('Mobile Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().url('Invalid URL').required('Website is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the privacy policy'),
});

const RegisterNow = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            company: '',
            mobileNumber: '',
            email: '',
            website: '',
            terms: false,
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const { terms, ...formData } = values;
                const response = await axios.post('https://backend-full-stack-psi.vercel.app/api/register', formData);
                toast.success(response.data)
                resetForm();
            } catch (err) {
           
                toast.error('Registration failed')
               
            }
        },
    });

    return (
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-16 px-6">
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
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[field.id]}
                                    className="w-full px-4 py-2 text-gray-50 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {formik.touched[field.id] && formik.errors[field.id] && (
                                    <p className="text-red-400 text-sm mt-1">{formik.errors[field.id]}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="flex items-start space-x-2"
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.terms}
                            className="mt-1 h-4 w-4 text-purple-600 border-gray-600 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300">
                            By filling out the registration form to attend our event, you agree and consent to{' '}
                            <a href="#" className="text-blue-400 hover:underline">Cogent Solutions Privacy Policy</a>.
                        </label>
                    </motion.div>
                    {formik.touched.terms && formik.errors.terms && (
                        <p className="text-red-400 text-sm">{formik.errors.terms}</p>
                    )}

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
