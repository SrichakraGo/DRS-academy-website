import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-[#0d2a66] text-white py-16 px-4">
          <div className="container mx-auto text-center">
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About DRS Academy
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Your premier destination for IIT-JEE, NEET, and Olympiad success
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f27b06] text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-white text-[#f27b06] p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg">
              At DRS IIT-JEE NEET Academy, our mission is to provide quality education that empowers students to achieve their academic goals through concept clarity and regular practice. We strive to create a learning environment that fosters intellectual growth, creativity, and critical thinking, enabling students to excel in competitive exams like IIT-JEE and NEET.
              </p>
            </div>

            <div className="bg-[#2650a8] text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-white text-[#2650a8] p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg">
              Our vision is to be Hyderabad's premier coaching institute recognized for excellence in competitive exam preparation. We aim to nurture young minds, build strong conceptual foundations, and produce future leaders in science and technology. By consistently delivering high-quality education and support, we aspire to make a positive impact on the lives of our students and contribute to the advancement of society.
              </p>
            </div>
          </div>
        </section>

        {/* History & Milestones */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Our Journey</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#0d2a66] mb-4">From Humble Beginnings</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 2010 with just 2 classrooms and 3 faculty members, DRS Academy has grown 
                  to become one of Hyderabad's most trusted coaching institutes.
                </p>
                <p className="text-gray-700">
                  Our student-first approach and proven results have helped over 3,000 students 
                  secure admissions in top institutions across India.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#f27b06]">
                  <p className="text-4xl font-bold text-[#0d2a66]">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#2650a8]">
                  <p className="text-4xl font-bold text-[#0d2a66]">3000+</p>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#2650a8]">
                  <p className="text-4xl font-bold text-[#0d2a66]">80+</p>
                  <p className="text-gray-600">Toppers Created</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#f27b06]">
                  <p className="text-4xl font-bold text-[#0d2a66]">15+</p>
                  <p className="text-gray-600">Expert Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </section>


{/* Faculty Section */}
<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Meet Our Expert Faculty</h2>

  {/* Highlighted Director - Large Card */}
  <div className="max-w-2xl mx-auto mb-16">
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#f27b06] hover:shadow-xl transition-all duration-300">
      <div className="h-80 bg-[#031d49] flex items-center justify-center">
        <span className="text-white text-6xl">👨‍🏫</span>
      </div>
      <div className="p-8 text-center">
        <h3 className="text-3xl font-bold text-[#0d2a66]">Dr. Palreddy Ranjith Reddy</h3>
        <p className="text-[#f27b06] text-xl font-semibold mb-4">Founder & Director, M.Sc., Ph.D., Chemistry Department</p>
        <p className="text-gray-600 text-lg mb-6">
          Dr. P. Ranjith Reddy epitomizes dedication and passion in education. With a Ph.D. in Organic Chemistry from Osmania University and over a decade of experience teaching Chemistry for IIT-JEE (Mains-Advanced) and NEET, he brings unmatched expertise to his students. His research includes 13 published papers, earning him national and international recognition. As the director of a premier junior college, Dr. Reddy has mentored countless students toward success in top IITs and medical colleges. A true role model, his integrity and devotion inspire all who learn from him.
        </p>
        <div className="flex justify-center space-x-3">
          <span className="bg-[#f0f5ff] text-[#2650a8] px-4 py-2 rounded-full text-base font-medium">Director</span>
          <span className="bg-[#fff0e6] text-[#f27b06] px-4 py-2 rounded-full text-base font-medium">20+ Years</span>
        </div>
      </div>
    </div>
  </div>

  {/* Other Faculty Members - Smaller Uniform Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {[
      {
        name: "Mr. Y V Prasadd",
        subject: "Mathematics Department",
        bio: "12+ yrs exp., ex-AKASH, BANSAL, NARAYANA Faculty",
        tags: ["IIT-JEE Faculty", "12+ Years"],
      },
      {
        name: "Mr. C. S. Deekshith",
        subject: "Mathematics Department",
        bio: "22+ yrs exp., ex-NALANDA, SRI GAYATRI, NANO, NARAYANA Faculty",
        tags: ["IIT-JEE Faculty", "22+ Years"],
      },
      {
        name: "Mr. Vinod Parasa",
        subject: "Physics Department",
        bio: "14+ yrs exp., ex-GATE, IES Faculty",
        tags: ["IIT-JEE & NEET Faculty", "14+ Years"],
      },
    ].map((fac, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
      >
        <div className="h-48 bg-[#031d49] flex items-center justify-center">
          <span className="text-white text-3xl">👨‍🏫</span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-[#0d2a66]">{fac.name}</h3>
          <p className="text-[#f27b06] text-sm font-medium mb-2">{fac.subject}</p>
          <p className="text-gray-600 text-xs mb-3">{fac.bio}</p>
          <div className="flex flex-wrap gap-2">
            {fac.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded-full text-xs ${
                  tag.includes("Years")
                    ? "bg-[#fff0e6] text-[#f27b06]"
                    : "bg-[#f0f5ff] text-[#2650a8]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom Row Faculty - Same Small Size */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-2xl">
    {[
      {
        name: "Mr. Vasanth",
        subject: "Botany Department",
        bio: "12+ yrs exp., ex-SAKETA, VASAVI, BANSAL, NARAYANA Faculty",
        tags: ["NEET Faculty", "12+ Years"],
      },
      {
        name: "Ms. L. Pranitha",
        subject: "Zoology Department",
        bio: "11+ yrs exp., ex-SRI CHAITANYA Faculty",
        tags: ["NEET Faculty", "11+ Years"],
      },
    ].map((fac, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
      >
        <div className="h-48 bg-[#031d49] flex items-center justify-center">
          <span className="text-white text-3xl">👨‍🏫</span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-[#0d2a66]">{fac.name}</h3>
          <p className="text-[#f27b06] text-sm font-medium mb-2">{fac.subject}</p>
          <p className="text-gray-600 text-xs mb-3">{fac.bio}</p>
          <div className="flex flex-wrap gap-2">
            {fac.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded-full text-xs ${
                  tag.includes("Years")
                    ? "bg-[#fff0e6] text-[#f27b06]"
                    : "bg-[#f0f5ff] text-[#2650a8]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Accreditation */}
        <section className="bg-[#011032] text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Accreditations</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-[#0d2a66] w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Best Coaching Institute</h3>
                <p className="text-gray-300">Hyderabad Education Awards 2023</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-[#0d2a66] w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">📜</span>
                </div>
                <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
                <p className="text-gray-300">Quality Management System</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-[#0d2a66] w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
                <p className="text-gray-300">By 1000+ Parents & Students</p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default AboutUs;