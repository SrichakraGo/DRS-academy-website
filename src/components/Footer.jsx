import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8 mt-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">DRS Academy</h3>
          <p>Plot No. 115, BSNL Quarters Lane, Prashanth Nagar, Vanasthalipuram, Hyderabad 500070</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>Phone: 9000100802</p>
          <p>Email: info@drsacademy.com</p>
        </div>
      </div>
      <div className="text-center mt-8">© 2025 DRS Academy. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
