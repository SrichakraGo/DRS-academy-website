import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50"
    >
      <div className="flex justify-between w-full md:w-auto items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="DRS Logo" className="w-10 h-10 object-contain" />
          <Link to="/" className="text-2xl font-bold text-gray-700">
            DRS Academy
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 text-md items-center">
        <li>
          <Link to="/" className="hover:text-[#f27b06] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-[#f27b06] transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/achievements" className="hover:text-[#f27b06] transition-colors">
            Achievements
          </Link>
        </li>
        <li>
          <Link to="/admissions" className="hover:text-[#f27b06] transition-colors">
            Admissions
          </Link>
        </li>
        <li>
          <Link to="/brochure" className="hover:text-[#f27b06] transition-colors">
            Brochure
          </Link>
        </li>
        <li>
          <Link to="/testimonial" className="hover:text-[#f27b06] transition-colors">
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:text-[#f27b06] transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/enroll-now" className="bg-[#f27b06] text-white px-4 py-2 rounded-md hover:bg-[#e06d00] transition-colors">
            Enroll Now
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden w-full mt-4 space-y-4 text-gray-700 text-md"
        >
          <li>
            <Link to="/" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/achievements" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/admissions" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Admissions
            </Link>
          </li>
          <li>
            <Link to="/brochure" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Brochure
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="block py-2 hover:text-[#f27b06] transition-colors" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/enroll-now" 
              className="block bg-[#f27b06] text-white px-4 py-2 rounded-md hover:bg-[#e06d00] transition-colors text-center mt-2"
              onClick={toggleMenu}
            >
              Enroll Now
            </Link>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;