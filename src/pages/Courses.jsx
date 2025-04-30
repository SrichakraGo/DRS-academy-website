import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Courses = () => {
  const courseCategories = [
    {
      name: "JEE Preparation",
      levels: [
        "Foundation (Classes 8-10)",
        "Main & Advanced (Classes 11-12)",
        "Crash Course (Class 12)"
      ],
      color: "border-[#f27b06]"
    },
    {
      name: "NEET Preparation",
      levels: [
        "Foundation (Classes 8-10)",
        "Main (Classes 11-12)",
        "Crash Course (Class 12)"
      ],
      color: "border-[#2650a8]"
    },
    {
      name: "Olympiad Programs",
      levels: [
        "NTSE/KVPY",
        "Science Olympiads",
        "Math Olympiads"
      ],
      color: "border-[#f27b06]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">

      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#0d2a66] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Comprehensive programs designed for competitive exam success
            </p>
          </div>
        </section>

        {/* Course Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${category.color}`}
              >
                <h2 className="text-2xl font-bold text-[#0d2a66] mb-4">{category.name}</h2>
                <ul className="space-y-3">
                  {category.levels.map((level, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#f27b06] mr-2">•</span>
                      <span className="text-gray-700">{level}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/enroll-now"
                    className="inline-block bg-[#0d2a66] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#031d49] transition-colors"
                  >
                    Enroll Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Course Highlights */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Course Highlights</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#f27b06] mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Expert Faculty</h3>
                <p className="text-gray-700">IIT/NIT alumni with 10+ years experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#2650a8] mb-4">📚</div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Study Material</h3>
                <p className="text-gray-700">Comprehensive, updated content</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#f27b06] mb-4">📝</div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Test Series</h3>
                <p className="text-gray-700">Regular mock tests with analysis</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#2650a8] mb-4">💬</div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Doubt Sessions</h3>
                <p className="text-gray-700">Daily doubt clearing support</p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Courses;