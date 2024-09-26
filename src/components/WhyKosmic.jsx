import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal"; // Import the Modal component
import AppointmentForm from "./AppointmentForm"; // Import the AppointmentForm component
import "./WhyKosmic.css"; // Include custom CSS for animations and positioning

const WhyKosmic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="why-kosmic-section relative bg-cover bg-center text-black py-16">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side text content */}
        <motion.div
          className="md:w-1/2 z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 font-opensans text-[#1C7C82]"
            data-aos="fade-right"
          >
            Why Kosmic Dental Clinic?
          </h2>
          <p
            className="text-base sm:text-lg md:text-lg mb-6 font-lato font-semibold"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            We are an experienced dental team in Lucknow and provide the best
            dental treatment. We concentrate on preserving as much of the
            natural tooth as possible at Kosmic Dental Clinic, making us the
            best dental clinic in Lucknow. We have modern state-of-the-art
            equipment to guarantee that your implantation and custom-made tooth
            arches are placed accurately.
          </p>
          <p
            className="text-base sm:text-lg md:text-lg mb-6 font-lato font-semibold"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            At Kosmic Dental Clinic, we are committed to providing comprehensive
            and personalized dental care for patients of all ages. Our team of
            experienced dentists and dental professionals is dedicated to
            offering the latest advancements in dental technology and
            techniques.
          </p>
          {/* button */}
          <motion.button
            className="btn primary-btn uppercase font-lato font-bold bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={toggleModal} // Open modal on button click
          >
            Book an Appointment
          </motion.button>
        </motion.div>

        {/* Right side images */}
        <motion.div
          className="relative md:w-1/2 z-10 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main image */}
          <img
            src="\new pics\IMG-20240923-WA0008.jpg"
            alt="Kosmic Dental Clinic"
            className="rounded-lg shadow-lg w-full h-auto md:w-[550px] md:h-[500px] relative object-cover ml-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </motion.div>
      </div>

      {/* Reusable Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Appointment form inside the modal */}
      </Modal>
    </div>
  );
};

export default WhyKosmic;
