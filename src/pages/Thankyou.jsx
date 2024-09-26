import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Updated import

const ThankYouPage = () => {
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  // Animation variants for smooth entry
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.8, duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg text-center max-w-lg"
        variants={containerVariants}
      >
        {/* Centered Success Icon */}
        <motion.div
          className="text-green-500 text-6xl mb-4 flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <FaCheckCircle />
        </motion.div>

        {/* Thank You Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-teal-500 mb-4 font-opensans">
          Your Appointment is Booked Successfully!
        </h1>
        <p className="text-gray-600 mb-6 font-lato font-semibold">
          Thank you for choosing Kosmic Dental Clinic. We have received your
          appointment request and will contact you shortly with more details.
        </p>

        {/* Back to Home Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-600 transition"
          onClick={() => navigate('/')} // Use navigate for redirection
        >
          Back to Home
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouPage;
