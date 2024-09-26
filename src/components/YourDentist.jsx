import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import AppointmentForm from "./AppointmentForm"; // Your AppointmentForm component
import Modal from "./Modal"; // Import Modal component

const YourDentist = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const textContent = document.getElementById("text-content");
    if (textContent) {
      setContentHeight(textContent.clientHeight);
    }
  }, []);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white p-4 md:p-8">
      {/* Main content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Doctor Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          style={{ height: `${contentHeight}px` }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          data-aos="fade-right"
        >
          <img
            src="\new pics\IMG-20240923-WA0007.jpg" // Replace with actual image URL
            alt="Dr. Vikram Ahuja"
            className="w-full h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          id="text-content"
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          data-aos="fade-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-teal-700 mb-4 md:mb-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Meet Your Dentist
          </motion.h1>

          {/* Dentist Description */}
          <h2 className="text-xl md:text-2xl font-bold text-teal-800">
            Dr. Vikram Ahuja
          </h2>
          <h4 className="text-base md:text-lg font-medium text-gray-600 mb-4 mt-2">
            MDS, FICOI (U.S.), MADI (U.K.), MRC (U.K.), MFPA (U.K.), D DFO
            (Pune), MBA (Hosp. Mang.), PG Dip Foren OD
          </h4>

          {/* More details... */}
          <p className="text-gray-600 mt-4 font-lato font-semibold">
            Beyond his clinical expertise, Dr. Vikram Ahuja has made significant
            contributions to the field of forensic odontology. He is the author
            of a widely recognized manual on Forensic Odontology, which has been
            embraced globally for its insightful and practical approach. His
            remarkable career is decorated with over 25 national and
            international accolades, underscoring his leadership and influence
            in the dental field. His work as a forensic consultant has earned
            him widespread respect, further establishing his reputation for
            excellence.
          </p>

          {/* Button to Open Modal */}
          <div className="mt-8">
            <motion.button
              className="bg-teal-700 primary-btn text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-teal-800 transition font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal} // Click to toggle modal
            >
              Request Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Appointment Form */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Appointment form inside modal */}
      </Modal>
    </div>
  );
};

export default YourDentist;
