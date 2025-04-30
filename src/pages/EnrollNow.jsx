import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState } from 'react';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    parentName: '',
    email: '',
    phone: '',
    currentClass: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/enroll', formData);
      alert("✅ Enrollment submitted successfully!");
      setFormData({
        fullName: '',
        parentName: '',
        email: '',
        phone: '',
        currentClass: '',
        course: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit. Please try again.");
    }
  };
  const courses = [
    {
      name: "JEE Foundation (Classes 8-10)",
      duration: "2 Years",
      fee: "₹45,000/year",
      features: [
        "Weekend batches available",
        "Comprehensive study material",
        "4 mock tests per month"
      ]
    },
    {
      name: "JEE Main & Advanced (Class 11-12)",
      duration: "1-2 Years",
      fee: "₹60,000/year",
      features: [
        "Daily classes + doubt sessions",
        "30+ full-length tests",
        "Personalized mentoring"
      ]
    },
    {
      name: "NEET Preparation (Class 11-12)",
      duration: "1-2 Years",
      fee: "₹55,000/year",
      features: [
        "Biology focus with dissection practice",
        "25+ mock tests",
        "Crash course options"
      ]
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
              Enroll Now
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Secure your seat for academic excellence
            </p>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Enrollment Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-[#f27b06] absolute h-full left-4 top-0"></div>
              
              {/* Step 1 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#f27b06] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Choose Your Course</h3>
                <p className="text-gray-700">
                  Select from our range of programs designed for different competitive exams.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#2650a8] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Submit Application</h3>
                <p className="text-gray-700">
                  Complete the enrollment form with your details and required documents.
                </p>
              </div>

              {/* Step 3 */}
              <div className="mb-10 relative pl-12">
                <div className="absolute w-8 h-8 bg-[#f27b06] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Payment</h3>
                <p className="text-gray-700">
                  Secure your admission by completing the fee payment process.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12">
                <div className="absolute w-8 h-8 bg-[#2650a8] rounded-full flex items-center justify-center left-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d2a66] mb-2">Confirmation</h3>
                <p className="text-gray-700">
                  Receive enrollment confirmation and schedule details via email/SMS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Options */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-12">Our Courses</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#f27b06]"
                >
                  <h3 className="text-xl font-bold text-[#0d2a66] mb-2">{course.name}</h3>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">{course.duration}</span>
                    <span className="font-bold text-[#f27b06]">{course.fee}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#f27b06] mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/apply-now"
                    className="block text-center bg-[#f27b06] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#e06d00] transition-colors"
                  >
                    Enroll Now
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-8">Enrollment Form</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="parent-name" className="block text-gray-700 font-medium mb-2">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parent-name"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter parent/guardian name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="current-class" className="block text-gray-700 font-medium mb-2">
                  Current Class
                </label>
                <select
                  id="current-class"
                  name="currentClass"
                  value={formData.currentClass}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                  required
                >
                  <option value="">Select your class</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="jee-foundation">JEE Foundation (Classes 8-10)</option>
                  <option value="jee-main">JEE Main & Advanced (Class 11-12)</option>
                  <option value="neet">NEET Preparation (Class 11-12)</option>
                  <option value="olympiad">Olympiad Programs</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                  placeholder="Any special requirements or questions"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#f27b06] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e06d00] transition-colors"
              >
                Submit Enrollment Form
              </motion.button>
            </form>
          </div>
        </section>

        {/* Payment Options */}
        <section className="bg-[#011032] text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Payment Options</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#0d2a66] p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-2">Bank Transfer</h3>
                <p className="text-gray-300">
                  Account Name: DRS Academy<br />
                  Account Number: XXXX XXXX XXXX<br />
                  IFSC Code: XXXX0123456
                </p>
              </div>
              
              <div className="bg-[#0d2a66] p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold mb-2">Online Payment</h3>
                <p className="text-gray-300">
                  Credit/Debit Cards<br />
                  Net Banking<br />
                  UPI Payments
                </p>
              </div>
              
              <div className="bg-[#0d2a66] p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2">In-Person</h3>
                <p className="text-gray-300">
                  Cash or Card payments<br />
                  At our campus<br />
                  Receipt provided immediately
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default EnrollNow;