'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const announcements = [
    "10% What is Lorem Ipsum? What is Lorem Ipsum?",
    "Free Shipping on Orders Over $50!",
    "New Collection Available Now!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header className="w-full max-w-[1920px] mx-auto flex-shrink-0">
      {/* Top banner with arrows */}
      <div className="w-full bg-black text-white h-[30px] flex justify-center items-center relative">
        <div className="flex items-center gap-32 max-w-[1000px] mx-auto relative">
          <button 
            className="hover:opacity-70"
            onClick={handlePrev}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <p className="text-[13px] text-center transition-opacity duration-300 w-[400px]">
            {announcements[currentIndex]}
          </p>
          <button 
            className="hover:opacity-70"
            onClick={handleNext}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Main header */}
      <div className="px-[120px] bg-white py-8">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="space-x-8">
            <Link href="/about" className="text-[13px] text-gray-700">About Us</Link>
            <Link href="/help" className="text-[13px] text-gray-700">Help</Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image 
                src="/logo-header.png" 
                alt="Logo" 
                width={200} 
                height={55}
                priority
              />
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for bras, Knickers and more"
                className="rounded-full px-6 py-[10px] w-[300px] bg-[#F5F5F5] text-[13px] placeholder-gray-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>
            <button className="hover:opacity-70">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button className="hover:opacity-70">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <div className="relative">
              <button className="hover:opacity-70">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </button>
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[11px]">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex justify-between px-[100px] py-4">
            {Array(13).fill('PEARLS').map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-[13px] font-medium text-gray-800 hover:text-gray-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 