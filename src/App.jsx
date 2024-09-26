import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import ThankYouPage from './pages/Thankyou';
import Loader from './components/Layout/Loader'; // Import Loader component

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Listen for route changes and show loader during navigation
  useEffect(() => {
    setLoading(true); // Show loader when route changes
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after the delay (adjust delay as needed)
    }, 1000); // Delay in milliseconds (match it with your loader animation time)

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [location]); // Run effect when location (route) changes

  return (
    <>
      {/* Show loader when loading */}
      {loading && <Loader />}
      
      <Routes>
        {/* All routes wrapped inside Layout */}
        <Route path="/" element={<Layout />}>
          {/* Index route (Home page) */}
          <Route index element={<Home />} />
          {/* Other routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;
