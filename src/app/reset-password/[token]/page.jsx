"use client"

import React, { useState } from 'react'
import { Jost } from 'next/font/google';
import useAuthStore from '@/store/authStore';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Alert from '@/components/Alert';
import { useParams } from 'next/navigation';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

const ResetPassword = () => {
  const params = useParams();
  const token = params.token;
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { loading, error, resetPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      useAuthStore.setState({ error: 'Passwords do not match' });
      return;
    }
    if (password.length < 6) {
      useAuthStore.setState({ error: 'Password must be at least 6 characters' });
      return;
    }
    try {
      if (!token) {
        useAuthStore.setState({ error: 'Reset token is missing' });
        return;
      }
      await resetPassword(token, password);
      setShowAlert(true);
    } catch (error) {
      console.error('Failed to reset password:', error);
      useAuthStore.setState({ 
        error: error.response?.data?.message || 'Failed to reset password'
      });
    }
  };

  return (
    <div className={`h-screen bg-black ${jost.className}`}>
      {showAlert && (
        <Alert 
          title="Password Changed Successfully"
          message="Your password has been updated successfully."
          buttonText="Back to Login"
          buttonLink="/login"
        />
      )}
      <div className="flex flex-col lg:flex-row h-full">
        <div className="hidden lg:block lg:w-3/5 h-full">
          <img 
            src="/reset-password.png" 
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

            <h1 className="text-2xl lg:text-[32px] font-semibold mb-1 text-black">Reset Password</h1>
            <p className="text-[#9CA3AF] text-base mb-8">
              Please enter your new password
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[#111827] text-sm block mb-2">New Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5 text-gray-400" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[#111827] text-sm block mb-2">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5 text-gray-400" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3.5 px-4 rounded-lg text-sm font-medium"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-b-4 border-white"></div>
                  </div>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>

            {error && (
              <div className="text-red-500 text-sm text-center mt-4">{error}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword; 