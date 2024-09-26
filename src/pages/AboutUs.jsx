import React, { useEffect } from "react";
import YourDentist from "../components/YourDentist";
import AwardShowcase from "../components/Awards";
import LimcaAward from "../components/LimcaAward";
import AppointmentSection from "../components/AppointmentSection";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

// Doctors and Administrators data
const doctors = [
  {
    name: "Dr. Abhishek Pandey",
    title: "Periodontist and Implantologist",
    image: "/dr-abhishek.png", // Replace with actual image URL
    specialization: "Periodontology & Implantology",
  },
  {
    name: "Dr. Ravi Srivastava",
    title: "Orthodontist",
    image: "/dr-ravi.png", // Replace with actual image URL
    specialization: "Orthodontics",
  },
  {
    name: "Dr. Srishti",
    title: "Orthodontist",
    image: "/dr-shristi.jpg", // Replace with actual image URL
    specialization: "Orthodontics",
  },
];

const administrators = [
  {
    name: "Riya Vaiswani",
    title: "Periodontist and Implantologist",
    image: "/riya-vaswani.png", // Replace with actual image URL
    specialization: "Center Manager",
  },
  {
    name: "Jyoti Bajpayee",
    title: "Orthodontist",
    image: "/jyoti-bajpai.png", // Replace with actual image URL
    specialization: "HR",
  },
  {
    name: "Huamira",
    title: "Orthodontist",
    image: "/humaira.jpg", // Replace with actual image URL
    specialization: "Center Manager",
  },
];

// Main AboutUs component
const AboutUs = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        {/* YourDentist Section */}
        <YourDentist />
        <AwardShowcase />
        <LimcaAward />

        {/* Meet Our Doctors & Staff Section */}
        <section className="my-16">
          <h2
            className="text-3xl font-bold text-center text-teal-700 mb-8 font-opensans"
            data-aos="fade-up"
          >
            Meet Our Doctors & Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="relative bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:glow-effect"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 font-lato">{doctor.name}</h3>
                <p className="text-sm text-gray-500 mb-2 font-lato">{doctor.title}</p>
                <p className="text-sm text-gray-600 font-medium font-lato">
                  {doctor.specialization}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Administrators Section */}
        <section className="my-16">
          <h2
            className="text-3xl font-bold text-center text-teal-700 mb-8 font-opensans"
            data-aos="fade-up"
          >
            Meet Our Administrators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrators.map((administrator, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="relative bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:glow-effect"
              >
                <img
                  src={administrator.image}
                  alt={administrator.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 uppercase font-lato">
                  {administrator.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium uppercase font-lato">
                  {administrator.specialization}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Appointment Section */}
      <AppointmentSection />
    </>
  );
};

export default AboutUs;
