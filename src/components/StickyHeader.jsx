import React, { useState } from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa"; // For phone and clock icons
import Modal from "./Modal"; // Import Modal component
import AppointmentForm from "./AppointmentForm"; // Your AppointmentForm component

const Stickyheader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="bg-sky-200 w-full text-center text-xs sm:text-sm py-1 fixed top-0 z-50 flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4">
        {/* Clinic Info Section */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
          {/* Clinic Rating */}
          <span className="text-black text-xs sm:text-sm font-semibold mb-1 sm:mb-0">
            Highest Rated Dental Clinic in Lucknow and Best Dentist!
          </span>

          {/* Clinic Timings */}
          <div className="flex items-center justify-center sm:justify-start mt-1 sm:mt-0 sm:ml-4 text-black text-xs sm:text-sm">
            <FaClock className="mr-1" />
            <span>
              Mon-Fri: <span className="text-gray-700">10 AM - 9 PM</span>
            </span>
            <span className="mx-2">|</span>
            <span>
              Sat and Sun: <span className="text-gray-700">10 AM - 4 PM</span>
            </span>
          </div>
        </div>

        {/* Contact and Appointment Section */}
        <div className="flex flex-col sm:flex-row items-center mt-2 sm:mt-0 text-center sm:text-right">
          {/* Contact Number with Phone Icon */}
          <a
            href="tel:+91-9793658231"
            className="flex items-center justify-center text-teal-600 font-semibold hover:underline text-xs sm:text-sm mr-0 sm:mr-4"
          >
            <FaPhoneAlt className="mr-1" /> +91-9793658231
          </a>

          {/* Appointment Button */}
          <button
            onClick={toggleModal} // Toggle modal on button click
            className="mt-1 sm:mt-0 bg-teal-500 primary-btn text-white py-1 px-3 rounded-lg hover:bg-teal-600 transition text-xs sm:text-sm"
          >
            Make an Appointment
          </button>
        </div>
      </div>

      {/* Modal for Appointment Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Appointment form inside modal */}
      </Modal>
    </>
  );
};

export default Stickyheader;
