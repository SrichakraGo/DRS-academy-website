<<<<<<< HEAD
=======
// ✅ App.jsx (NO BrowserRouter here)
import ScrollToTop from './components/ScrollToTop';

>>>>>>> b4895c42cf74a1f3d5a2feb29fab7479cec224fa
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Achievements from './pages/Achievements';
import Admissions from './pages/Admissions';
import Brochure from './pages/Brochure';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import EnrollNow from './pages/EnrollNow';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Courses from './pages/Courses'; 





function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/enroll-now" element={<EnrollNow />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
