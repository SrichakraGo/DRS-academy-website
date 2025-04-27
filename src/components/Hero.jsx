import React from 'react';
import heroImage from '../assets/hero.jpg'; // Put an appropriate banner image here

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${heroImage})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Perfect Destination for Perfect Future</h1>
        <p className="text-lg md:text-2xl mb-6">IIT-JEE | NEET | OLYMPIADS</p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold">
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
