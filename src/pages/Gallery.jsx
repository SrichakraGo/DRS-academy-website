import { useState } from 'react';
import { motion } from 'framer-motion';

import img2021a from '../assets/gallery/2021/img1.jpg';
import img2022a from '../assets/gallery/2022/img1.jpg';
import img2023a from '../assets/gallery/2023/img1.jpg';

const galleryData = {
  "2021": [img2021a],
  "2022": [img2022a],
  "2023": [img2023a],
};

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-primary text-center mb-8"
      >
        Gallery
      </motion.h1>

      {/* Year Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(galleryData).map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-full text-white ${selectedYear === year ? 'bg-primary' : 'bg-gray-400'}`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData[selectedYear].map((imgSrc, index) => (
          <motion.img
            key={index}
            src={imgSrc}
            alt={`Gallery ${selectedYear}`}
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
