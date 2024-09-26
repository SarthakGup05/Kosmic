import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import React Slick Slider
import Modal from "./Modal"; // Import the Modal component
import AppointmentForm from "./AppointmentForm"; // Import the AppointmentForm component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Slick Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Fade effect for smooth transitions
  };

  // Content for each slide
  const slides = [
    {
      image: "/assets/main-banner0a.png",
      title: "Nabh Certified",
      subtitle: "Best Dental Clinic in Lucknow",
      description:
        "Located in the heart of Lucknow, we are a leading dental clinic offering exceptional dental care.",
      buttonText: "Book an Appointment",
      brandImage: "/giril_dentist-removebg-preview.png", // Unique brand image for this slide
    },
    {
      image: "/assets/main-banner0a.png",
      title: "Advanced Dental Care",
      subtitle: "Expert Team of Dentists",
      description:
        "We provide advanced dental treatments with a team of highly skilled dentists for your perfect smile.",
      buttonText: "Schedule a Consultation",
      brandImage: "/new pics/IMG-20240923-WA0006-removebg-preview.png", // Unique brand image for this slide
    },
    {
      image:"/assets/main-banner0a.png",
      title: "Comprehensive Services",
      subtitle: "Modern Equipment & Techniques",
      description:
        "Using state-of-the-art technology, we offer a comprehensive range of dental services to meet all your needs.",
      buttonText: "Get Started Today",
      brandImage: "/new pics/IMG-20240923-WA0009.jpg", // Unique brand image for this slide
    },
  ];

  return (
    <div className="relative overflow-hidden"> {/* Ensure overflow is hidden */}
      {/* Sleek Slider Component */}
      <Slider {...sliderSettings} className="relative z-10">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Slide Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-green-400 opacity-90"></div>
            </div>

            {/* Slide Content */}
            <div className="relative container grid grid-cols-1 md:grid-cols-2 min-h-[650px] z-20 overflow-y-hidden">
              <motion.div
                className="flex flex-col justify-center py-14 md:pl-20 xl:pl-40 md:py-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="text-center md:text-left space-y-6">
                  <h2 className="uppercase font-opensans font-extrabold lg:text-3xl text-4xl leading-snug text-white">
                    {slide.title}
                  </h2>
                  <h3 className="font-lato font-bold text-2xl text-white">
                    {slide.subtitle}
                  </h3>
                  <p className="font-lato font-semibold text-white text-lg">
                    {slide.description}
                  </p>
                  {/* button */}
                  <motion.button
                    className="btn primary-btn uppercase font-lato font-bold bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-full shadow-lg transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    onClick={toggleModal} // Open modal on button click
                  >
                    {slide.buttonText}
                  </motion.button>
                </div>
              </motion.div>

              {/* Change the brand image for each slide */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={slide.brandImage} // Dynamic brand image for each slide
                  alt="Dental Clinic"
                  className="w-[1000px] h-auto object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Reusable Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Appointment form inside the modal */}
      </Modal>
    </div>
  );
};

export default Hero;
