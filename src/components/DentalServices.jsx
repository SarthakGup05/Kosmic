import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Modal from './Modal'; // Import the Modal component
import AppointmentForm from './AppointmentForm'; // Import the AppointmentForm component

const DentalServices = () => {
  const services = [
    {
      title: 'Root canal',
      image: '/assets/dental services/Rct.jpg',
      description: "The bacteria need to be removed when treating the infection in the root canal. This is done by either removing the bacteria from the root canal system (root canal treatment) or removing the tooth. However, we usually don't recommend removing the teeth as it's better to keep as many of your natural teeth as possible."
    },
    {
      title: 'Dental Implant',
      image: '/assets/dental services/f26c81498d.jpg',
      description: 'Dental implants are a durable and natural-looking solution for missing teeth. We use high-quality materials to replace missing teeth with custom crowns supported by a titanium post. Enjoy a restored smile, improved chewing, and enhanced confidence with our expert implant services.'
    },
    {
      title: 'Cosmetic Dentistry',
      image: '/assets/dental services/cosmatic dentistry.jpg',
      description: 'Enhance your smile with our cosmetic dentistry services. From teeth whitening to veneers, we offer treatments that improve the appearance of your teeth and boost your confidence with a radiant smile.'
    },
    {
      title: 'Dental Laser',
      image: '/assets/dental services/dental laaser.jpg',
      description: 'Dental lasers offer a minimally invasive solution for many dental procedures, resulting in reduced discomfort and faster healing. Our laser technology enhances precision in treatments like gum reshaping and cavity detection.'
    },
    {
      title: 'Composite Filling',
      image: '/assets/dental services/composite filling.jpg',
      description: 'Composite fillings are a natural-looking solution for repairing cavities and damaged teeth. Made from tooth-colored resin, they blend seamlessly with your natural teeth, providing a durable and aesthetic restoration that enhances both function and appearance.'
    },
    {
      title: 'Laminates',
      image: '/assets/dental services/dental-veneer.jpg',
      description: 'Dental laminates, or veneers, are thin, custom-made shells that cover the front of your teeth to improve their appearance. They can correct issues like discoloration, chips, and gaps, providing a flawless, natural-looking smile with minimal alteration to your existing teeth.'
    }
  ];

  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleCardExpansion = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100 p-6 md:p-12 mb-4">
      <div className="text-center mb-8" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold text-teal-700 mb-2 z-10">
          How Can I Help You?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-3">
          Crown and Roots Dental Clinic provides all kinds of treatment services including Single Visit RCT, Dental Implants, Cosmetic Dentistry, and Braces Treatment at very affordable prices.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isExpanded={expandedCardIndex === index}
            toggleExpansion={() => toggleCardExpansion(index)}
            toggleModal={toggleModal} // Pass modal toggle function to ServiceCard
          />
        ))}
      </div>

      {/* Reusable Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <AppointmentForm /> {/* Appointment form inside the modal */}
      </Modal>
    </div>
  );
};

const ServiceCard = ({ service, isExpanded, toggleExpansion, toggleModal }) => {
  const truncatedDescription = service.description.slice(0, 100) + '...';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80 relative ${isExpanded ? 'min-h-[400px]' : 'min-h-[350px]'}`}
      data-aos="zoom-in" // Add AOS animation for each card
    >
      <div className="relative group">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay with title and button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-teal-900 bg-opacity-70 flex flex-col justify-center items-center text-white"
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4 font-lato">{service.title}</h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            onClick={toggleModal} // Open modal on button click
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          {service.title}
        </h2>
        <p className="text-gray-600">
          {isExpanded ? service.description : truncatedDescription}
        </p>
        <button
          onClick={toggleExpansion}
          className="text-teal-500 hover:underline mt-2"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

export default DentalServices;
