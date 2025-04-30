import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Make sure this path matches your actual brochure file location
import brochurePDF from '../assets/drs-academy-brochure.pdf';

const Brochure = () => {
  const brochureHighlights = [
    {
      title: "Comprehensive Courses",
      description: "JEE, NEET, Olympiad & Foundation programs",
      icon: "📚"
    },
    {
      title: "Expert Faculty",
      description: "IIT/NIT alumni with 10+ years experience",
      icon: "👨‍🏫"
    },
    {
      title: "Proven Results",
      description: "5000+ successful students since 2010",
      icon: "🏆"
    },
    {
      title: "Infrastructure",
      description: "Modern classrooms & digital learning aids",
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">

      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#0d2a66] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              DRS Academy Brochure
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our programs, faculty, and success stories
            </p>
          </div>
        </section>

        {/* Brochure Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="aspect-w-3 aspect-h-4 bg-white flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <h3 className="text-2xl font-bold text-[#0d2a66]">DRS Academy Brochure</h3>
                    <p className="text-gray-600 mt-2">2025-26 Academic Year</p>
                    <p className="text-sm text-gray-500 mt-4">PDF | 2.4 MB</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-[#0d2a66] mb-6">Key Highlights</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {brochureHighlights.map((item, index) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#f27b06]"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#0d2a66]">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={brochurePDF}
                  download="DRS-Academy-Brochure-2025.pdf"
                  className="inline-block w-full sm:w-auto bg-[#f27b06] text-white px-8 py-3 rounded-full font-medium text-center hover:bg-[#e06d00] transition-colors"
                >
                  Download Full Brochure (PDF)
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact-us"
                  className="inline-block w-full sm:w-auto bg-white text-[#0d2a66] px-8 py-3 rounded-full font-medium border-2 border-[#0d2a66] hover:bg-gray-50 transition-colors text-center"
                >
                  Request Printed Copy
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Our Programs</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3 flex items-center">
                  <span className="bg-[#f27b06] text-white p-2 rounded-full mr-3">JEE</span>
                  Engineering Program
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>2-Year Comprehensive Course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Weekend Doubt Clearing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>30+ Mock Tests</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3 flex items-center">
                  <span className="bg-[#2650a8] text-white p-2 rounded-full mr-3">NEET</span>
                  Medical Program
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>1-Year Intensive Course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>Dissection Lab Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>25+ Full-length Tests</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3 flex items-center">
                  <span className="bg-[#f27b06] text-white p-2 rounded-full mr-3">OLY</span>
                  Olympiad Program
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Classes 6-10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>NTSE/KVPY Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Conceptual Learning</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-[#011032] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Our admissions team is ready to answer all your questions about our programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us"
                className="bg-[#f27b06] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e06d00] transition-colors"
              >
                Contact Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919000100802"
                className="bg-white text-[#0d2a66] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Call: 9000100802
              </motion.a>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Brochure;