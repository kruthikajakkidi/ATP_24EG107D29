import React, { useState } from 'react'
import {
  pageBackground, pageWrapper, formCard, formTitle,
  formGroup, labelClass, inputClass, submitBtn,
  bodyText, secondaryBtn, linkClass,
} from '../styles/common'
import { NavLink, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [apiError, setApiError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setApiError(null)
    setIsSubmitting(true)

    try {
      const res = await api.post('/auth/login', formData)

      login(res.data.user ?? res.data)

      navigate('/')
    } catch (err) {
      setApiError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={pageBackground}>
      <div className={pageWrapper}>
        <div className={formCard}>

          {/* Title */}
          <h1 className={formTitle}>Welcome Back</h1>
          <p className={`${bodyText} text-center mb-8`}>
            Login to continue to your social experience.
          </p>

          {/* API Error */}
          {apiError && (
            <p className="text-red-500 text-sm text-center mb-4">{apiError}</p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className={formGroup}>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={formGroup}>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className={inputClass}
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`${submitBtn} disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 border-t border-[#e8e8ed]" />
            <span className="text-xs text-[#a1a1a6]">OR</span>
            <div className="flex-1 border-t border-[#e8e8ed]" />
          </div>

      
          {/* Footer */}
          <p className={`${bodyText} text-center text-sm mt-8`}>
            Don't have an account?{' '}
            <NavLink to="/register" className={linkClass}>Register</NavLink>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login