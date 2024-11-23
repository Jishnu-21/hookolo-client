"use client"

import React, { useState, useEffect } from 'react'
import { Jost } from 'next/font/google';
import useAuthStore from '@/store/authStore';
import Link from 'next/link';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const { loading, error, verifyOtp, resendOtp, email, setEmail } = useAuthStore();

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem('pendingVerificationEmail');
    if (!storedEmail) {
      window.location.href = '/signup';
    } else {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const timer = resendTimer > 0 && setInterval(() => setResendTimer(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) return;
    try {
      await verifyOtp(otpString);
      localStorage.removeItem('pendingVerificationEmail');
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp();
      setResendTimer(30);
    } catch (error) {
      console.error('Failed to resend OTP:', error);
    }
  };

  return (
    <div className={`h-screen bg-black ${jost.className}`}>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left side - Image (hidden on mobile) */}
        <div className="hidden lg:block lg:w-3/5 h-full">
          <img 
            src="/otp.png" 
            alt="Fitness model"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Right side - OTP Form */}
        <div className="w-full lg:w-2/5 bg-white min-h-screen lg:min-h-0 lg:h-full flex items-center p-8 lg:pl-16">
          <div className="w-full max-w-[445px] mx-auto lg:mx-0">
            <Link href="/signup" className="flex items-center text-black mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </Link>

            <h1 className="text-2xl lg:text-[32px] font-semibold mb-1 text-black">Enter OTP</h1>
            <p className="text-[#9CA3AF] text-base mb-8">
              We have sent a code to your registered email address<br />
              <span className="text-gray-600">{email}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-3 justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && !e.target.value && index > 0) {
                        const prev = e.target.previousSibling;
                        prev.focus();
                        prev.value = '';
                      }
                    }}
                    className="w-[60px] h-[60px] text-center text-xl border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className="text-black hover:underline disabled:text-gray-400 disabled:no-underline"
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                </button>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP; 