import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="p-4 md:p-8 bg-white">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Welcome to DRS Academy</h1>
        <p className="text-gray-700 mb-6 text-md md:text-lg">
          Perfect destination for IIT-JEE, NEET, and Olympiad success.
        </p>
        <a href="/admissions" className="bg-secondary text-white px-6 py-3 rounded-full inline-block transition-transform hover:scale-105 hover:bg-[#e06d05]">
          Enroll Now
        </a>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          At DRS Academy, we are committed to excellence. Our mission is to nurture talent with concept clarity, proven methodology, and dedication.
        </p>
        <p className="text-gray-700 mb-6">
          Founded by Dr. P. Ranjith Reddy with a vision to deliver top results in IIT-JEE, NEET, and Olympiads.
        </p>
      </motion.section>

      {/* Sitemap Section */}
      <motion.section
        id="sitemap"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-primary mb-4">Sitemap</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><a href="/" className="text-midBlue hover:underline">Home</a></li>
          <li><a href="/courses" className="text-midBlue hover:underline">Our Courses</a></li>
          <li><a href="/admissions" className="text-midBlue hover:underline">Admissions</a></li>
          <li><a href="/results-achievements" className="text-midBlue hover:underline">Results & Achievements</a></li>
          <li><a href="/testimonials" className="text-midBlue hover:underline">Testimonials</a></li>
          <li><a href="/gallery" className="text-midBlue hover:underline">Gallery</a></li>
          <li><a href="/contact-us" className="text-midBlue hover:underline">Contact Us</a></li>
          <li><a href="/payment-portal" className="text-midBlue hover:underline">Payment Portal</a></li>
          <li><a href="/privacy-policy" className="text-midBlue hover:underline">Privacy Policy</a></li>
          <li><a href="/terms-conditions" className="text-midBlue hover:underline">Terms & Conditions</a></li>
        </ul>
      </motion.section>

    </div>
  );
};

export default Home;
