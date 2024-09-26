import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Phone icon from react-icons

const CallBtn = () => {
  return (
    <a
      href="tel:+919554671006" // Phone number
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition transform hover:scale-105"
      aria-label="Call Us"
    >
      <FaPhoneAlt className="text-2xl" />
    </a>
  );
};

export default CallBtn;
