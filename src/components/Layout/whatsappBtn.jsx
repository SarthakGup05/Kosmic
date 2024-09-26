import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/9554671006" // Link to open WhatsApp chat with phone number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsappButton;
