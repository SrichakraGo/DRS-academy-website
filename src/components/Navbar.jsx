import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">DRS Academy</div>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#faculty" className="hover:text-blue-500">Faculty</a></li>
        <li><a href="#achievements" className="hover:text-blue-500">Achievements</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
