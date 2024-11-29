'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const ProductBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);

   const images = [
    '/prodBanner-main.png',
    '/product-slider1.png',
    '/product-slider1.png',
    '/product-slider1.png',
  ];

  const showNextImage = () => {
    setCurrentIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    if (currentIndex >= thumbnailStart + 2) {
      setThumbnailStart(prev => prev + 1);
    }
  };

  const showPreviousImage = () => {
    setCurrentIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    if (currentIndex <= thumbnailStart) {
      setThumbnailStart(prev => Math.max(0, prev - 1));
    }
  };

  return (
    <div className="relative w-full h-[600px] flex bg-[#808080]">
      {/* Main large image - left side */}
      <div className="w-1/2 h-full">
        <img
          src={images[currentIndex]}
          alt="Main product"
          className="w-full h-full object-contain"
        />
      </div>

{/* Center arrow container */}
<div className="relative w-[60px] h-full flex items-center justify-center">
  <button
    onClick={showPreviousImage}
    className="w-[40px] h-[40px] flex items-center justify-center z-10 border-2 border-black rounded-full"
  >
    {currentIndex === images.length - 1 ? (
      <ChevronRight size={24} color="black" />
    ) : (
      <ChevronLeft size={24} color="black" />
    )}
  </button>
</div>

      {/* Right side container for thumbnails */}
      <div className="flex-1 h-full flex items-center justify-center relative">
        {/* Thumbnails horizontal stack */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${thumbnailStart * 33.333}%)`
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-[calc(33.333%-1rem)] flex-shrink-0 aspect-[3/4] transition-all duration-300 ${
                  currentIndex === index ? 'border-2 border-white' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;