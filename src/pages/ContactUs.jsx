import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
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
              Contact DRS Academy
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              We're here to answer your questions and guide you
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0d2a66] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#f27b06] text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d2a66]">Our Address</h3>
                    <p className="text-gray-700">
                      Plot No.115, BSNL Quarters Lane,<br />
                      Prashanth Nagar, Vanasthalipuram,<br />
                      Hyderabad 500070
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f27b06] text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d2a66]">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+919000100802" className="hover:text-[#f27b06] transition-colors">
                        +91 9000100802
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f27b06] text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d2a66]">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@drsacademy.com" className="hover:text-[#f27b06] transition-colors">
                        info@drsacademy.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f27b06] text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d2a66]">Working Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-[#0d2a66] mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f27b06] focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#f27b06] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e06d00] transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0d2a66] mb-8">Our Location</h2>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="DRS Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266015581593!2d78.5671233153539!3d17.44788760586544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUyLjQiTiA3OMKwMzQnMDkuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ContactUs;