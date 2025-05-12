import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Achievements = () => {
  const jeeAdvancedRankers = [
    { name: 'Rahul Sharma', rank: 45, college: 'IIT Bombay - CS' },
    { name: 'Vikram Joshi', rank: 62, college: 'IIT Delhi - EE' },
    { name: 'Ananya Singh', rank: 112, college: 'IIT Madras - ME' },
    { name: 'Aditya Verma', rank: 187, college: 'IIT KGP - Civil' },
    { name: 'Rahul Sharma', rank: 45, college: 'IIT Bombay - CS' },
  ];

  const jeeMainsToppers = [
    { name: 'Amit Kumar', percentile: '99.8', year: 2022 },
    { name: 'Rohan Mehta', percentile: '99.7', year: 2023 },
    { name: 'Kavya Patel', percentile: '99.6', year: 2023 },
    { name: 'Arjun Reddy', percentile: '99.5', year: 2022 },
    { name: 'Neha Gupta', percentile: '99.4', year: 2023 },
    { name: 'Suresh Nair', percentile: '99.3', year: 2022 },
    { name: 'Divya Sharma', percentile: '99.2', year: 2023 },
    { name: 'Prateek Malhotra', percentile: '99.1', year: 2023 },
    { name: 'Anjali Verma', percentile: '99.0', year: 2022 },
    { name: 'Rahul Khanna', percentile: '98.9', year: 2023 },
    { name: 'Shreya Singh', percentile: '98.8', year: 2023 },
    { name: 'Vishal Kumar', percentile: '98.7', year: 2022 },
    { name: 'Priya Nair', percentile: '98.6', year: 2023 },
    { name: 'Aditi Rao', percentile: '98.5', year: 2023 },
    { name: 'Karan Malhotra', percentile: '98.4', year: 2022 }
  ];

  const neetRankers = [
    { name: 'Priya Patel', rank: 78, college: 'AIIMS Delhi' },
    { name: 'Rohit Khanna', rank: 89, college: 'MAMC Delhi' }
  ];

  const neetToppers = [
    { name: 'Sanya Verma', college: 'LHMC Delhi' },
    { name: 'Arjun Mehta', college: 'KGMU Lucknow' },
    { name: 'Divya Reddy', college: 'GMC Mumbai' },
    { name: 'Vishal Sharma', college: 'IMS BHU' },
    { name: 'Ananya Gupta', college: 'Seth GSMC' },
    { name: 'Rajat Kapoor', college: 'AFMC Pune' },
    { name: 'Pooja Singh', college: 'JIPMER' },
    { name: 'Akash Nair', college: 'CMC Vellore' },
    { name: 'Meera Patel', college: 'KMC Manipal' },
    { name: 'Sanjay Verma', college: 'BJMC Pune' },
    { name: 'Kavita Rao', college: 'OMC Hyderabad' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#0d2a66] text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Top Rankers
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Celebrating our students' outstanding achievements
            </p>
          </div>
        </section>

        {/* JEE Advanced */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-[#0d2a66] mb-6">
            JEE Advanced Rankers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jeeAdvancedRankers.map((student, index) => (
              <div key={index} className="bg-white p-4 h-40 w-full rounded-lg shadow border-l-4 border-[#f27b06]">
                <h3 className="font-bold text-[#0d2a66] text-sm">{student.name}</h3>
                <p className="text-[#f27b06] text-xs font-semibold">AIR {student.rank}</p>
                <p className="text-gray-600 text-xs truncate">{student.college}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JEE Mains */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-[#0d2a66] mb-6">
            JEE Mains Toppers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {jeeMainsToppers.map((student, index) => (
              <div key={index} className="bg-white p-4 h-32 rounded-lg shadow border-l-4 border-[#031d49]">
                <h3 className="font-bold text-[#0d2a66] text-sm truncate">{student.name}</h3>
                <p className="text-[#031d49] text-xs font-semibold">
                  {student.percentile} Percentile ({student.year})
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NEET Top 100 */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-[#0d2a66] mb-6">
            NEET Top 100 Rankers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {neetRankers.map((student, index) => (
              <div key={index} className="bg-white p-4 h-40 rounded-lg shadow border-l-4 border-[#2650a8]">
                <h3 className="font-bold text-[#0d2a66] text-sm">{student.name}</h3>
                <p className="text-[#2650a8] text-xs font-semibold">AIR {student.rank}</p>
                <p className="text-gray-600 text-xs truncate">{student.college}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other NEET Toppers */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-[#0d2a66] mb-6">
            NEET Top College Qualifiers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {neetToppers.map((student, index) => (
              <div key={index} className="bg-white p-4 h-32 rounded-lg shadow border-l-4 border-[#2e7d32]">
                <h3 className="font-bold text-[#0d2a66] text-sm truncate">{student.name}</h3>
                <p className="text-[#2e7d32] text-xs truncate">{student.college}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;