import React from 'react';
import Hero from '../components/Hero'
import Whykosmic from "../components/WhyKosmic";

import DentalServices from '../components/DentalServices';
import DentalInfo from '../components/DentalInfo'
import YourDentist from "../components/YourDentist";
import AwardShowcase from "../components/Awards";
import Counter from "../components/counter";
import LimcaAward from "../components/LimcaAward";
import AppointmentSection from "../components/AppointmentSection";
import OpeningHours from "../components/OpeningHours";
// import WhyKosmic from './components/WhyKosmic';
// import DentalServices from './components/DentalServices';
// import DentalInfo from './components/DentalInfo';
// import YourDentist from './components/YourDentist';
// import AwardShowcase from './components/Awards';
const Home = () => {
  return (
    <div> 
      <Whykosmic />
      <Counter/>
      <DentalServices />
      <DentalInfo />
      <YourDentist />
      <AwardShowcase />
      <LimcaAward />
      <OpeningHours />
      <AppointmentSection />
    </div>
  );
};

export default Home;
