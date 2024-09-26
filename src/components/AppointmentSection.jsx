import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm"; // Import your AppointmentForm component

const AppointmentSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }} // Add your background image URL here
    >
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Grid system for two columns */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white bg-opacity-80 p-6 lg:p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left column - Appointment Form */}
          <div className="flex flex-col justify-between">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-teal-700 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Book an Appointment
            </motion.h2>

            {/* Form component with additional spacing */}
            <div className="space-y-4 lg:space-y-6">
              <AppointmentForm />
            </div>
          </div>

          {/* Right column - Clinic Address */}
          <motion.div
            className="flex flex-col justify-center lg:h-full lg:justify-between text-gray-700"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 lg:mb-6">
              Our Clinic Address
            </h3>

            <div className="flex flex-col justify-evenly lg:h-full space-y-4 lg:space-y-6">
              <p className="flex items-center text-base md:text-lg lg:text-lg">
                <FaMapMarkerAlt className="text-teal-600 mr-2 lg:mr-3" />
                <span>
                  <strong>Kosmic Dental Clinic</strong>
                  <br />
                  Plumeria, A008 - A009 A Block Rohtas,
                  <br />
                  Vibhuti Khand, Gomti Nagar,
                  <br />
                  Lucknow, Uttar Pradesh 226010
                </span>
              </p>

              <p className="flex items-center text-base md:text-lg lg:text-lg">
                <FaClock className="text-teal-600 mr-2 lg:mr-3" />
                <span>
                  <strong>Opening Hours:</strong>
                  <br />
                  Monday to Friday: 10 AM - 9 PM
                  <br />
                  saturday and Sunday: 10 AM - 4 PM
                </span>
              </p>

              <p className="flex items-center text-base md:text-lg lg:text-lg">
                <FaPhoneAlt className="text-teal-600 mr-2 lg:mr-3" />
                <span>
                  <strong>Contact:</strong>
                  <br />
                  Phone: +91-9793658231, +91-7054626931
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentSection;
