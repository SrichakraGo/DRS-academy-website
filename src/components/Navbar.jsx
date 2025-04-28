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
      <div className="text-2xl font-bold text-primary">
        <Link to="/">DRS Academy</Link>
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700 text-md">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#sitemap">Sitemap</a></li>
        <li><Link to="/courses">Our Courses</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
