import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admissions = () => {
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
              Admissions 2025-26
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Begin your journey to academic excellence with DRS Academy
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d2a66] mb-4">Why Choose DRS Academy?</h2>
            <p className="text-lg text-gray-700">
              Our rigorous programs, experienced faculty, and proven track record make us the preferred choice for 
              competitive exam preparation. Limited seats available across all courses.
            </p>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Eligibility Criteria</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f27b06]"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3">IIT-JEE Foundation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Class 8th passed (for 2-year program)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Class 9th/10th studying (for 1-year program)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Minimum 75% in previous class</span>
                  </li>
                </ul>
              </motion.div>

              {/* Course 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#2650a8]"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3">NEET Preparation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>Class 11th/12th studying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>PCB subjects in current curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2650a8] mr-2">•</span>
                    <span>Minimum 70% in Class 10th</span>
                  </li>
                </ul>
              </motion.div>

              {/* Course 3 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f27b06]"
              >
                <h3 className="text-xl font-bold text-[#0d2a66] mb-3">Olympiad Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Class 6th to 10th students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Top 10% in school or Olympiad qualifiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f27b06] mr-2">•</span>
                    <span>Recommendation from school teachers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Admission Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-[#f27b06] absolute h-full left-4 top-0"></div>
              
              {/* Step 1 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#f27b06] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Application Submission</h3>
                <p className="text-gray-700">
                  Submit the online application form with required documents by June 30, 2025. 
                  Offline forms available at our campus.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#2650a8] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Entrance Test</h3>
                <p className="text-gray-700">
                  Appear for the DRS Aptitude Test (DAT) on July 7, 2025. 
                  Syllabus based on previous class curriculum.
                </p>
              </div>

              {/* Step 3 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#f27b06] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Result & Counseling</h3>
                <p className="text-gray-700">
                  Results declared on July 15, 2025. Selected candidates attend counseling session 
                  with faculty for batch allocation.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12">
                <div className="absolute w-8 h-8 bg-[#2650a8] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Fee Payment & Enrollment</h3>
                <p className="text-gray-700">
                  Complete admission by paying fees before July 25, 2025. 
                  Orientation program begins August 1, 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="bg-[#011032] text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0d2a66] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#f27b06] mb-2">Application Period</h3>
                  <p>May 1 - June 30, 2025</p>
                </div>
                <div className="bg-[#0d2a66] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#f27b06] mb-2">Entrance Test (DAT)</h3>
                  <p>July 7, 2025</p>
                </div>
                <div className="bg-[#0d2a66] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#f27b06] mb-2">Result Declaration</h3>
                  <p>July 15, 2025</p>
                </div>
                <div className="bg-[#0d2a66] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#f27b06] mb-2">Classes Begin</h3>
                  <p>August 1, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="bg-[#f0f5ff] p-8 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0d2a66] mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Limited seats available. Apply now to secure your spot in Hyderabad's premier coaching institute.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/apply-now"
                className="bg-[#f27b06] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e06d00] transition-colors"
              >
                Apply Online
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us"
                className="bg-white text-[#0d2a66] px-8 py-3 rounded-full font-medium border-2 border-[#0d2a66] hover:bg-gray-100 transition-colors"
              >
                Contact Admissions
              </motion.a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Admissions;