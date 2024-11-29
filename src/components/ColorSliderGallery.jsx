'use client'

import React, { useState } from 'react';

const ColorSliderGallery = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const images = [
    { color: 0, src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=800&fit=crop' },
    { color: 1, src: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=800&fit=crop' },
    { color: 2, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=800&fit=crop' },
    { color: 3, src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=800&fit=crop' },
    { color: 4, src: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=500&h=800&fit=crop' },
    { color: 5, src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=800&fit=crop' },
  ];

  const handleSliderChange = (event) => {
    setSelectedColor(parseInt(event.target.value, 10));
  };

  const handlePrev = () => {
    setSelectedColor((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedColor((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-[#E5E5E5] mt-[100px]">
      <div className="max-w-[1920px] mx-auto py-24 px-[120px]">
        <div className="relative w-full flex flex-col items-center">
          {/* Images container */}
          <div className="relative w-full max-w-[1200px] mx-auto">
            <button 
              onClick={handlePrev} 
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-50"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="w-full">
              <div className="grid grid-cols-4 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div 
                    key={index} 
                    className="aspect-[2/3] bg-white overflow-hidden max-w-[260px]"
                  >
                    <img 
                      src={images[selectedColor]?.src} 
                      alt={`Color ${selectedColor}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-50"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Color slider */}
          <div className="w-full mt-32 flex justify-center">
            <div className="w-[800px] relative">
              <input
                type="range"
                min="0"
                max={images.length - 1}
                value={selectedColor}
                onChange={handleSliderChange}
                className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 72, 0), rgb(255, 145, 0), rgb(255, 217, 0), rgb(0, 255, 0), rgb(0, 0, 255), rgb(75, 0, 130), rgb(139, 0, 255))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSliderGallery;