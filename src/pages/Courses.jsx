const Courses = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-4xl font-bold text-primary mb-4">Our Courses</h1>
      <p className="text-gray-700 mb-4">
        We offer specialized coaching for IIT-JEE Mains & Advanced, NEET, and Olympiads.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>IIT-JEE (Mains + Advanced)</li>
        <li>NEET - UG Medical Entrance</li>
        <li>Olympiad Foundation Courses</li>
      </ul>
      <a href="/admissions" className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-[#e06d05]">
        View Courses
      </a>
    </div>
  );
};

export default Courses;
