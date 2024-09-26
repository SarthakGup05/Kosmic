import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const awards = [
  {
    title: 'National level meeting of State Dental Council',
    year: '2009',
    image: '/Awards/5.png', // Replace with actual image URL
  },
  {
    title: 'Health Icon & Corona Warriors Award',
    year: '2021',
    image: '/Awards/1.png', // Replace with actual image URL
  },
  {
    title: 'Star Time Media National Service Awards',
    year: '2021',
    image: '/Awards/2.png', // Replace with actual image URL
  },
  {
    title: 'Progressive U.P',
    year: '2021',
    image: '/Awards/6.png', // Replace with actual image URL
  }
];

const AwardShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds interval between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div 
      className="bg-cover bg-center py-12 overflow-y-hidden"
      style={{ backgroundImage: "url('/awards bg.jpg')" }}  // Replace with your image path
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-8 font-lato" data-aos="fade-up">
          Our Achievements
        </h2>
        
        <Slider {...settings} className='overflow-hidden'>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4"
            >
              <div className="group relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-1 hover:shadow-2xl cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-b-xl shadow-inner">
                  <h3 className="text-lg font-semibold text-gray-800 text-center font-opensans">{award.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 text-center">{award.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AwardShowcase;
