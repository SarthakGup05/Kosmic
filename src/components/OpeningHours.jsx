import React, { useState } from "react";
import { FiPhone } from "react-icons/fi"; // Phone icon from react-icons
import { motion } from "framer-motion"; // Import framer-motion
import Modal from "./Modal"; // Import the Modal component
import AppointmentForm from "./AppointmentForm"; // Import the AppointmentForm component

const OpeningHours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 lg:px-16 rounded-lg shadow-lg w-full max-w-screen-xl mx-auto">
      {/* Content Wrapper */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Kosmic Dental Clinic Info */}
        <motion.div
          className="bg-cyan-100 p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
            Opening Hours
          </h2>

          <div className="text-center mb-6">
            <p className="text-lg font-bold text-gray-800">
              Monday to Friday
            </p>
            <p className="text-gray-700 text-sm">10:00 AM - 9:00 PM</p>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg font-bold text-gray-800">Saturday and Sunday</p>
            <p className="text-gray-700 text-sm">10:00 AM - 4:00 PM</p>
          </div>

          <div className="text-center">
            <FiPhone className="text-xl text-teal-700 inline-block mr-2" />
            <span className="text-gray-800 font-semibold text-sm">
              +91-9793658231, +91-7054626931
            </span>
          </div>
        </motion.div>

        {/* Appointment Section */}
        <motion.div
          className="bg-cyan-100 p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.button
              className="bg-white text-teal-600 px-6 py-3 font-bold rounded-lg border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal} // Open modal on click
            >
              Book an Appointment
            </motion.button>
            <motion.p
              className="text-xl text-gray-600 mt-4 max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              For Kosmic Dental Services, we are delighted to serve you with
              utmost satisfaction through a successful outcome in any of your
              dental needs.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for booking an appointment */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Include AppointmentForm in modal */}
      </Modal>
    </div>
  );
};

export default OpeningHours;
