import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-[#0d2a66]">
        <Link to="/">DRS Academy</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 text-md items-center">
        <li>
          <Link 
            to="/" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link 
            to="/aboutus" 
            className="hover:text-[#f27b06] transition-colors"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link 
            to="/achievements" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Achievements
          </Link>
        </li>

        <li>
          <Link 
            to="/admissions" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Admissions
          </Link>
        </li>

        <li>
          <Link 
            to="/brochure" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Brochure
          </Link>
        </li>

        <li>
          <Link 
            to="/testimonial" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Testimonial
          </Link>
        </li>

        <li>
          <Link 
            to="/contact-us" 
            className="hover:text-[#f27b06] transition-colors"
          >
            Contact Us
          </Link>
        </li>

        {/* CTA Button */}
        <li>
          <Link 
            to="/enroll-now" 
            className="bg-[#f27b06] text-white px-4 py-2 rounded-md hover:bg-[#e06d00] transition-colors"
          >
            Enroll Now
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </motion.nav>
  );
};

export default Navbar;