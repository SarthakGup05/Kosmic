import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Modal from './Modal'; // Import your Modal component
import AppointmentForm from './AppointmentForm'; // Import your AppointmentForm component

const CTAButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed right-0 bottom-0 sm:bottom-auto sm:top-[185px] sm:right-0 sm:flex sm:flex-col z-50 p-[4px] md:p-2">
      <div className="bg-teal-500 flex sm:flex-col justify-center items-center w-full sm:w-auto md:max-w-md mx-auto p-2 rounded-lg shadow-lg">
        <a
          href="https://wa.me/9554671006" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center justify-center p-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+91-7054626931"
          className="text-white flex items-center justify-center p-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          <FaPhone size={24} />
        </a>
        <button
          onClick={toggleModal} // Toggle modal on click
          className="text-white flex items-center justify-center p-3 rounded-full hover:bg-gray-900 transition duration-300"
        >
          <FaCalendarAlt size={24} />
        </button>
      </div>

      {/* Modal for Appointment Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Your AppointmentForm component inside the modal */}
      </Modal>
    </div>
  );
};

export default CTAButtons;
