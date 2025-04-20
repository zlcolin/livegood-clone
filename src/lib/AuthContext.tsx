'use client'

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface User {
  id: string;
  email: string;
  name: string;
  isMember: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'member@example.com',
    name: 'John Member',
    password: 'password123',
    isMember: true
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Jane User',
    password: 'password123',
    isMember: false
  }
]

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check if user is already logged in
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error)
    } finally {
      setIsLoading(false)
      setIsInitialized(true)
    }
  }, [])

  // Save user to localStorage when it changes
  useEffect(() => {
    if (isInitialized) {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
    }
  }, [user, isInitialized])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Find user with matching credentials
      const foundUser = MOCK_USERS.find(
        u => u.email === email && u.password === password
      )

      if (foundUser) {
        // Remove password from user object before setting in state
        const { password, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check if email already exists
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error('Email already in use')
      }

      // Create new user (in real app, this would be an API call)
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        isMember: false
      }

      // In a real app, we would save the user to the database here

      setUser(newUser)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
