'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { useAuth } from '@/lib/AuthContext'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

const LoginPage = () => {
  const router = useRouter()
  const { login, isLoading, error } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    if (!email.trim()) {
      setFormError('Email is required')
      return false
    }

    if (!password) {
      setFormError('Password is required')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await login(email, password)

      // Redirect to home page or previous page after successful login
      router.push('/')
    } catch (err) {
      if (err instanceof Error) {
        setFormError(err.message)
      } else {
        setFormError('An error occurred during login. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold font-heading text-livegood-dark mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to access your account
                  </p>
                </div>

                {/* Demo Account Notice */}
                <div className="mb-6 p-3 bg-blue-50 text-blue-700 rounded-md text-sm">
                  <p className="font-medium mb-1">Demo Accounts:</p>
                  <ul className="ml-4 list-disc">
                    <li>Member: member@example.com / password123</li>
                    <li>Regular User: user@example.com / password123</li>
                  </ul>
                </div>

                {(formError || error) && (
                  <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{formError || error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-livegood-green"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-livegood-green"
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-livegood-green focus:ring-livegood-green"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <Link href="/forgot-password" className="text-livegood-green hover:text-livegood-green/80">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-livegood-green hover:bg-livegood-green/90 text-white py-2 px-4 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-livegood-green hover:text-livegood-green/80 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
