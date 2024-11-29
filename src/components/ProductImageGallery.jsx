'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=800&fit=crop',
  ];

  const handlePrev = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[120px] py-12">
      <div className="relative">
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="relative bg-white overflow-hidden shadow-sm h-[500px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-full h-full"
                animate={{
                  y: hoveredIndex === index ? -160 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={images[selectedImage]}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Product Info Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white p-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <button className="w-full border text-black border-black py-3 px-4 hover:bg-gray-50 transition-colors mb-4 text-sm font-medium">
                  ADD TO CART
                </button>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <input 
                    type="checkbox" 
                    id={`compare-${index}`}
                    className="w-4 h-4 border-gray-300"
                  />
                  <label htmlFor={`compare-${index}`} className="text-sm text-gray-600">
                    Compare
                  </label>
                </div>
                <p className="text-gray-600 text-sm text-center mb-3">
                  Lorem ipsum is simply dummy text<br />
                  of the printing and typesetting.
                </p>
                <p className="text-pink-500 text-center font-medium">
                  $1,548.00
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-50"
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
        <button 
          onClick={handleNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-50"
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
    </section>
  );
};

export default ProductImageGallery;