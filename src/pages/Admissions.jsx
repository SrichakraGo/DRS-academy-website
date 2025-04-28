import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-primary mb-4">Admissions</h1>
      <p className="text-gray-700 mb-6">
        Admissions are open for 2025-26 academic year. Limited seats per batch. Apply early!
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Eligibility: 10th Passed for IIT-JEE/NEET courses</li>
        <li>Application forms available online & offline</li>
        <li>Hostel facilities available</li>
      </ul>
      <a href="/contact-us" className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-[#e06d05]">
        Apply Now
      </a>
    </div>
  );
};

export default Admissions;
