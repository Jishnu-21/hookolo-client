"use client"

import React from 'react';
import Link from 'next/link';

const Alert = ({ title, message, buttonText, buttonLink }) => {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-40" />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 max-w-sm w-full mx-4 rounded-lg shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <Link 
              href={buttonLink}
              className="block w-full bg-black text-white py-3 rounded-lg text-center font-medium hover:bg-gray-900"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;