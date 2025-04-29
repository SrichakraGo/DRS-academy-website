import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-[#0d2a66] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DRS Academy</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your trusted partner in academic excellence since 2010
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
                To empower students through innovative teaching methods and personalized attention, 
                helping them achieve their academic goals in competitive exams.
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
                To be Hyderabad's premier coaching institute, recognized for transforming students 
                into top performers and future leaders through excellence in competitive exam preparation.
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
                  Founded in 2010 with just 2 classrooms and 5 faculty members, DRS Academy has grown 
                  to become one of Hyderabad's most trusted coaching institutes.
                </p>
                <p className="text-gray-700">
                  Our student-first approach and proven results have helped over 5,000 students 
                  secure admissions in top institutions across India.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#f27b06]">
                  <p className="text-4xl font-bold text-[#0d2a66]">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#2650a8]">
                  <p className="text-4xl font-bold text-[#0d2a66]">5000+</p>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#2650a8]">
                  <p className="text-4xl font-bold text-[#0d2a66]">100+</p>
                  <p className="text-gray-600">Toppers Created</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center border-t-4 border-[#f27b06]">
                  <p className="text-4xl font-bold text-[#0d2a66]">25+</p>
                  <p className="text-gray-600">Expert Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Meet Our Expert Faculty</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-64 bg-[#031d49] flex items-center justify-center">
                  <span className="text-white text-4xl">👨‍🏫</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0d2a66]">Dr. Faculty Member</h3>
                  <p className="text-[#f27b06] font-medium mb-3">Subject Specialist</p>
                  <p className="text-gray-600 mb-4">
                    {item === 1 ? "15+ years experience in JEE/NEET coaching" : 
                     item === 2 ? "Former IIT professor with research background" : 
                     "National level competitive exam expert"}
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-[#f0f5ff] text-[#2650a8] px-3 py-1 rounded-full text-sm">IIT Alumni</span>
                    <span className="bg-[#fff0e6] text-[#f27b06] px-3 py-1 rounded-full text-sm">10+ Years</span>
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

      <Footer />
    </div>
  );
};

export default AboutUs;