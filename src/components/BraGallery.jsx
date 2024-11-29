'use client'

import React from 'react';

const BraGallery = () => {
  const images = [
    '/bra-image-1.png',
    '/bra-image-1.png',
    '/bra-image-1.png',
    '/bra-image-1.png'
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[120px] py-12">
      {/* Title */}
      <h2 className="text-center text-[#FF4DDB] uppercase tracking-wider text-[15px] mb-12">
        Bras made for your body
      </h2>

      <div className="relative">
        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative bg-[#F8F3F0] overflow-hidden h-[500px]"
            >
              <img
                src={image}
                alt={`Bra view ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BraGallery; 