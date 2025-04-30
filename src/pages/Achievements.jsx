import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Achievements = () => {
  // Sample data - replace with your actual achievements
  const topPerformers = [
    { name: 'Rahul Sharma', exam: 'JEE Advanced', rank: 45, year: 2023 },
    { name: 'Priya Patel', exam: 'NEET', rank: 78, year: 2023 },
    { name: 'Amit Kumar', exam: 'JEE Mains', score: '99.8%', year: 2022 },
    { name: 'Neha Gupta', exam: 'KVPY', award: 'Fellow', year: 2022 }
  ];

  const annualStats = [
    { metric: 'JEE Advanced Qualifiers', value: '92%', description: 'of our students qualified' },
    { metric: 'NEET Top 1000', value: '65', description: 'students ranked in top 1000' },
    { metric: 'NTSE Scholars', value: '18', description: 'national level qualifiers' },
    { metric: 'Olympiad Medalists', value: '32', description: 'national/international' }
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
              Achievements
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Celebrating excellence and milestones in competitive education
            </p>
          </div>
        </section>

        {/* Top Performers */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">
            Our Star Performers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPerformers.map((student, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#f27b06] hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0d2a66]">{student.name}</h3>
                <p className="text-[#f27b06] font-medium my-2">
                  {student.exam} {student.rank ? `Rank ${student.rank}` : student.score}
                </p>
                <p className="text-gray-600">Batch of {student.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Statistics */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">
              By The Numbers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {annualStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl text-center shadow-md"
                >
                  <p className="text-5xl font-bold text-[#0d2a66] mb-2">{stat.value}</p>
                  <h3 className="text-xl font-semibold mb-2">{stat.metric}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-[#f0f5ff] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-[#2650a8]">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d2a66] mb-2">
                Best Coaching Institute
              </h3>
              <p className="text-gray-600">
                Hyderabad Education Awards 2023
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-[#f0f5ff] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-[#2650a8]">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d2a66] mb-2">
                5-Star Parent Rating
              </h3>
              <p className="text-gray-600">
                98% satisfaction rate (2023 survey)
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-[#f0f5ff] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-[#2650a8]">📈</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d2a66] mb-2">
                Fastest Growing Academy
              </h3>
              <p className="text-gray-600">
                Telangana Education Journal 2022
              </p>
            </div>
          </div>
        </section>

        {/* Alumni Success */}
        <section className="bg-[#011032] text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Alumni Success Stories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0d2a66] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-[#f27b06] rounded-full flex items-center justify-center text-2xl mr-4">
                    AS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ananya Singh</h3>
                    <p className="text-[#f27b06]">IIT Bombay | JEE Advanced Rank 112</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "DRS Academy's personalized attention and test series were game-changers. My mentors helped me identify and strengthen my weak areas systematically."
                </p>
              </div>
              
              <div className="bg-[#0d2a66] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-[#f27b06] rounded-full flex items-center justify-center text-2xl mr-4">
                    RK
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Rohit Khanna</h3>
                    <p className="text-[#f27b06]">AIIMS Delhi | NEET Rank 89</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The faculty's deep subject knowledge and regular doubt-clearing sessions gave me the edge I needed to crack NEET with a top 100 rank."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Achievements;