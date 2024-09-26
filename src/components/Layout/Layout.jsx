import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Stickyheader from '../StickyHeader.jsx';
import Hero from '../Hero.jsx'
// import WhatsappButton from './whatsappBtn.jsx';
// import CallBtn from './CallBtn.jsx';
import CTAButtons from '../CTAButtons.jsx';

const Layout = () => {
  return (
    <div>
      <Stickyheader /> {/* Sticky header stays at the top */}
      <div className="mt-12"> {/* Adjust the margin based on Stickyheader height */}
        <Navbar /> {/* Navbar should appear just below the sticky header */}
        <Hero /> {/* Hero section */}
       <CTAButtons/>
        
      </div>
      <main>
        <Outlet /> {/* Routed components */}
      </main>
    </div>
  );
};

export default Layout;
