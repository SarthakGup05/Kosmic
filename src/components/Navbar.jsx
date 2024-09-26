import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu

  const toggleMenu = () => {
    console.log("Menu toggled"); // Debugging: check if toggle function runs
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-white shadow-lg z-40 w-full sm:mt-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              <img 
                src="/assets/logo (1).png"  // Update the logo path
                alt="Logo" 
                className="h-14" 
              />
            </Link>
          </div>

          {/* Right side: Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 font-opensans text-lg font-medium">
            <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <Link to="/" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <Link to="/contact" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
