"use client"

import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Beautiful quality and sexy...",
      stars: 5
    },
    {
      id: 2,
      text: "Perfect fit and comfortable...",
      stars: 5
    },
    {
      id: 3,
      text: "Absolutely love this piece...",
      stars: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 relative">
      {/* Testimonial Slider */}
      <div className="max-w-[1920px] mx-auto px-[120px]">
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="absolute -left-[40px] top-1/2 -translate-y-1/2"
            aria-label="Previous testimonial"
          >
            <span className="text-4xl text-[#CCCCCC] hover:text-black transition-colors">‹</span>
          </button>

          {/* Testimonial Content */}
          <div className="max-w-3xl mx-auto text-center px-12">
            {/* Stars above text */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentSlide].stars)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-5 h-5 text-[#111111]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-[#111111] text-xl font-light tracking-[0.05em]">
              "{testimonials[currentSlide].text}"
            </p>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="absolute -right-[40px] top-1/2 -translate-y-1/2"
            aria-label="Next testimonial"
          >
            <span className="text-4xl text-[#CCCCCC] hover:text-black transition-colors">›</span>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[#111111] w-3 h-3' 
                  : 'bg-[#CCCCCC]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 