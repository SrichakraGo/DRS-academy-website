import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chathurya J.",
      achievement: "IIT Madras (JEE Advanced AIR 89)",
      quote: "The best decision ever! The faculty's teaching methodology and regular tests helped me crack JEE with a top 100 rank.",
      role: "Student"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      achievement: "AIIMS Delhi (NEET AIR 112)",
      quote: "DRS Academy's biology faculty is exceptional. The dissection practice sessions gave me an edge in NEET.",
      role: "Student"
    },
    {
      id: 3,
      name: "Priya Patel",
      achievement: "NTSE Scholar",
      quote: "The Olympiad program helped me develop strong fundamentals that benefited me in all competitive exams.",
      role: "Student"
    },
    {
      id: 4,
      name: "Mrs. Ananya Reddy",
      achievement: "Parent of JEE Advanced qualifier",
      quote: "As a parent, I appreciate the regular progress updates and the supportive environment at DRS Academy.",
      role: "Parent"
    },
    {
      id: 5,
      name: "Dr. Sanjay Kumar",
      achievement: "Parent of NEET qualifier",
      quote: "The medical entrance crash course was perfectly timed and immensely helpful for last-minute preparation.",
      role: "Parent"
    },
    {
      id: 6,
      name: "Amit Khanna",
      achievement: "KVPY Fellow",
      quote: "The research-oriented approach at DRS Academy helped me develop critical thinking skills beyond just exam preparation.",
      role: "Student"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
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
              Success Stories
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Hear from our students and parents about their DRS Academy journey
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#f27b06] text-white p-3 rounded-full mr-4">
                    {testimonial.role === 'Student' ? '👨‍🎓' : '👪'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0d2a66]">{testimonial.name}</h3>
                    <p className="text-[#f27b06]">{testimonial.achievement}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex justify-end">
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Testimonials CTA */}
        <section className="bg-[#f8f9fa] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0d2a66] mb-6">Hear More Success Stories</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Watch our students share their experiences in their own words
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/gallery#videos"
              className="inline-block bg-[#f27b06] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e06d00] transition-colors"
            >
              Watch Video Testimonials
            </motion.a>
          </div>
        </section>

        {/* Results CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-[#011032] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">See Our Results</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Explore our students' achievements and success metrics
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/achievements"
                className="bg-[#f27b06] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e06d00] transition-colors"
              >
                View Results
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us"
                className="bg-white text-[#0d2a66] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;