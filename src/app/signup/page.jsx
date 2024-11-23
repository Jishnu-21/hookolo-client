"use client"

import React from 'react'
import { Jost } from 'next/font/google';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useAuthStore from '@/store/authStore';
import Link from 'next/link';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

const SignupPage = () => {
  const { 
    email, 
    password, 
    name, 
    showPassword, 
    loading,
    error,
    setEmail,
    setPassword,
    setName,
    togglePassword,
    register 
  } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      useAuthStore.setState({ error: 'Please fill in all fields' });
      return;
    }
    try {
      await register({ email, password, name });
      // Redirect is handled in the store
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className={`h-screen bg-black ${jost.className}`}>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left side - Image (hidden on mobile) */}
        <div className="hidden lg:block lg:w-3/5 h-full">
          <img 
            src="/signup.png" 
            alt="Fitness model"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Right side - Signup Form */}
        <div className="w-full lg:w-2/5 bg-white min-h-screen lg:min-h-0 lg:h-full flex items-center p-8 lg:pl-16">
          <div className="w-full max-w-[445px] mx-auto lg:mx-0">
            <h1 className="text-2xl lg:text-[32px] font-semibold mb-1 text-black">Create New Account </h1>
            <p className="text-[#9CA3AF] text-base mb-8">Please fill in your details</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[#111827] text-sm block mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-[#111827] text-sm block mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-[#111827] text-sm block mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-black placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}

              <div className="flex items-center mt-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mr-2 h-4 w-4 rounded-sm border-gray-300 focus:ring-black focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm text-[#111827]">
                  I agree to the <a href="#" className="text-black underline">Terms of Service</a> and <a href="#" className="text-black underline">Privacy Policy</a>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-white py-3.5 rounded-lg font-medium mt-4 hover:bg-gray-900 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                Sign up with Google
              </button>
            </form>

            {/* Login link */}
            <p className="text-center mt-8 text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-black font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage