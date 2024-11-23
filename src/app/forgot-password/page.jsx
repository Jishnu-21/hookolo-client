"use client"

import React, { useState } from 'react'
import { Jost } from 'next/font/google';
import useAuthStore from '@/store/authStore';
import Link from 'next/link';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const { loading, error, sendPasswordResetLink } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    try {
      await sendPasswordResetLink(email);
      setEmailSent(true);
    } catch (error) {
      console.error('Failed to send reset link:', error);
    }
  };

  return (
    <div className={`h-screen bg-black ${jost.className}`}>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="hidden lg:block lg:w-3/5 h-full">
          <img 
            src="/forgot-password.png" 
            alt="Fitness model"
            className="w-full h-full object-fit"
          />
        </div>

        <div className="w-full lg:w-2/5 bg-white min-h-screen lg:min-h-0 lg:h-full flex items-center p-8 lg:pl-16">
          <div className="w-full max-w-[445px] mx-auto lg:mx-0">
            <Link href="/login" className="flex items-center text-black mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </Link>

            <h1 className="text-2xl lg:text-[32px] font-semibold mb-1 text-black">Forgot Password</h1>
            
            {emailSent ? (
              <div className="text-center">
                <div className="mb-4 text-green-600">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">Check your email</h2>
                <p className="text-gray-600 mb-4">
                  We've sent a password reset link to {email}
                </p>
                <p className="text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or{' '}
                  <button 
                    onClick={() => setEmailSent(false)}
                    className="text-black underline"
                  >
                    try again
                  </button>
                </p>
              </div>
            ) : (
              <>
                <p className="text-[#9CA3AF] text-base mb-8">
                  Enter your registered email address, we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[#111827] text-sm block mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-b-4 border-white"></div>
                      </div>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>

                  {error && (
                    <div className="text-red-500 text-sm text-center">{error}</div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 