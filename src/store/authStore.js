import { create } from 'zustand'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

const useAuthStore = create((set) => ({
  email: '',
  password: '',
  name: '',
  showPassword: false,
  loading: false,
  error: null,
  user: null,
  
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setName: (name) => set({ name }),
  togglePassword: () => set((state) => ({ showPassword: !state.showPassword })),
  
  register: async (userData) => {
    set({ loading: true, error: null })
    try {
      const response = await api.post('/users/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password
      })
      set({ loading: false, email: userData.email })
      localStorage.setItem('pendingVerificationEmail', userData.email)
      window.location.href = '/verify-otp'
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed'
      set({ loading: false, error: errorMessage })
      throw error
    }
  },

  verifyOtp: async (otp) => {
    set({ loading: true, error: null })
    try {
      const response = await api.post('/users/verify-email', { 
        email: useAuthStore.getState().email,
        otp 
      })
      set({ loading: false, user: response.data.user })
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      window.location.href = '/'
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'OTP verification failed'
      set({ loading: false, error: errorMessage })
      throw error
    }
  },

  resendOtp: async () => {
    set({ loading: true, error: null })
    try {
      const response = await api.post('/users/resend-otp', {
        email: useAuthStore.getState().email
      })
      set({ loading: false })
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to resend OTP'
      set({ loading: false, error: errorMessage })
      throw error
    }
  },

  login: async (credentials) => {
    set({ loading: true, error: null })
    try {
      const response = await api.post('/users/login', credentials)
      set({ loading: false, user: response.data.user })
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      window.location.href = '/'
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed'
      set({ loading: false, error: errorMessage })
      throw error
    }
  },

  logout: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      await api.post('/users/logout', { refreshToken })
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('pendingVerificationEmail')
      set({ user: null })
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  },

  resetForm: () => set({ 
    email: '', 
    password: '', 
    name: '',
    showPassword: false,
    error: null 
  }),

  sendPasswordResetLink: async (email) => {
    set({ loading: true, error: null })
    try {
      const response = await api.post('/users/forgot-password', { email })
      set({ loading: false })
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send reset email'
      set({ loading: false, error: errorMessage })
      throw error
    }
  },

  resetPassword: async (token, newPassword) => {
    set({ loading: true, error: null })
    try {
      if (!token) {
        throw new Error('Reset token is missing');
      }
      
      const response = await api.post(`/users/reset-password/${token}`, {
        newPassword
      });
      
      set({ loading: false });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to reset password';
      set({ loading: false, error: errorMessage });
      throw error;
    }
  }
}))

export default useAuthStore 