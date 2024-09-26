import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LimcaAward = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center relative overflow-y-hidden"
      style={{ backgroundImage: "url('/green wall.jpg')" }} // Set your background image
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      <div className="container mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left side: Image */}
        <div className="flex-1 p-4" data-aos="fade-right">
          <img
            src="\Awards\limka-frame.jpg" // Set the path for the award image
            alt="Limca Book of Records"
            className="w-full lg:w-3/4 h-auto rounded-xl shadow-lg mx-auto"
          />
        </div>

        {/* Right side: Text */}
        <div className="flex-1 text-white p-6 lg:pl-12" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            LIMCA BOOK OF RECORDS HAS BESTOWED THIS HONOR
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 font-lato">
            Dr. Vikram Ahuja, a well-known dentist from Lucknow, was named the
            greatest dentist in Uttar Pradesh by the Limca Book of Records in 2021.
            Virendra Chawdhary (49) of Alberta, Canada, had 28 teeth pulled at once.
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-lato">
            He had difficulty chewing his meals and underwent a 6-hour procedure
            to insert 28 teeth on dental implants and fixed prostheses simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LimcaAward;
