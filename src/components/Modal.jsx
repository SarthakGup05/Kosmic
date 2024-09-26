import React from "react";
import { motion } from "framer-motion";
import { h2 } from "framer-motion/client";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null; // Conditionally render modal if `isOpen` is true

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg max-w-md md:max-w-lg lg:max-w-2xl w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[80vh]">
          {children} {/* Display the children (e.g., AppointmentForm) */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
