import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoBg from '../assets/logo.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">

      
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0d2a66] text-white py-16 px-4 "
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to DRS Academy</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Perfect Destination for Perfect Future
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/enroll-now"
              className="bg-[#f27b06] text-white px-8 py-3 rounded-full inline-block font-medium hover:bg-[#e06d00] transition-colors"
            >
              Enroll Now
            </motion.a>
          </div>
        </motion.section>

        {/* Quick Links */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f27b06] text-center"
            >
              <h3 className="text-xl font-bold text-[#0d2a66] mb-3">Our Courses</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive programs for JEE, NEET, and Olympiads
              </p>
              <a href="/courses" className="text-[#f27b06] font-medium hover:underline">
                Explore Courses →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#2650a8] text-center"
            >
              <h3 className="text-xl font-bold text-[#0d2a66] mb-3">Admissions</h3>
              <p className="text-gray-700 mb-4">
                2025-26 admissions now open. Limited seats available
              </p>
              <a href="/admissions" className="text-[#2650a8] font-medium hover:underline">
                Apply Now →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f27b06] text-center"
            >
              <h3 className="text-xl font-bold text-[#0d2a66] mb-3">Results</h3>
              <p className="text-gray-700 mb-4">
                See our students' outstanding achievements
              </p>
              <a href="/achievements" className="text-[#f27b06] font-medium hover:underline">
                View Results →
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Academy */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-[#0d2a66] mb-6">About DRS Academy</h2>
              <p className="text-lg text-gray-700 mb-6">
              DRS Academy is a premier institute dedicated to empowering students for success in IIT-JEE and NEET. Since its founding in 2010 by Dr. P. Ranjith Reddy, we have established a proven track record of excellence, helping numerous students achieve their academic goals. Our team of expert faculty provides personalized attention to each student, ensuring they receive the support needed to excel. With limited class sizes and regular assessments, we foster a learning environment that promotes academic growth and success. Join us at DRS Academy and take the first step towards a brighter future.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#f27b06] mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                  At DRS IIT-JEE NEET Academy, our mission is to provide quality education that empowers students to achieve their academic goals through concept clarity and regular practice. We strive to create a learning environment that fosters intellectual growth, creativity, and critical thinking, enabling students to excel in competitive exams like IIT-JEE and NEET.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#2650a8] mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                  Our vision is to be Hyderabad's premier coaching institute recognized for excellence in competitive exam preparation. We aim to nurture young minds, build strong conceptual foundations, and produce future leaders in science and technology. By consistently delivering high-quality education and support, we aspire to make a positive impact on the lives of our students and contribute to the advancement of society. </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">What Our Students Say</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border-l-4 border-[#f27b06]">
            <p className="text-gray-700 italic mb-4">
"This is Gouthami. I got rank 556 in IIT JEE Advanced 2022. I'm really thankful to Ranjith Sir for helping me achieve this. Chemistry is one of the scoring subjects in JEE Advanced. Sir has helped me a lot in building up my basics in Chemistry. Sir gave me really good material which has helped me boost my score in Chemistry. Sir has motivated me a lot during my whole JEE preparation whenever I felt low. Thank you so much, Sir, for everything."
            </p>
            <p className="font-bold text-[#0d2a66]">- Gouthami, AIR 556 IIT-JEE Advanced 2022</p>
            <div className="text-center mt-6">
              <a href="/testimonial" className="text-[#f27b06] font-medium hover:underline">
                Read More Testimonials →
              </a>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Home;