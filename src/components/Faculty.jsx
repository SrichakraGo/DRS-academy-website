import React from 'react';

const facultyData = [
  { name: "Dr. P. Ranjith Reddy", dept: "Chemistry Department", exp: "13+ years", desc: "Ph.D. in Organic Chemistry, ex-Osmania University" },
  { name: "Y V Prasadd", dept: "Mathematics", exp: "22+ years", desc: "ex-Nalanda, Sri Gayatri" },
  { name: "C. S. Deekshith", dept: "Mathematics", exp: "12+ years", desc: "ex-Akash, Narayana" },
  // Add more as needed
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyData.map((teacher, index) => (
            <div key={index} className="p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
              <p className="text-sm text-blue-500">{teacher.dept}</p>
              <p className="text-gray-600 mt-2">{teacher.desc}</p>
              <p className="text-sm text-gray-500 mt-1">{teacher.exp} Experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
