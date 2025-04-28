import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import ResultsAchievements from './pages/ResultsAchievements';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import PaymentPortal from './pages/PaymentPortal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQs from './pages/Faqs';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/results-achievements" element={<ResultsAchievements />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/payment-portal" element={<PaymentPortal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
