'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { useAuth } from '@/lib/AuthContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const { getCartCount } = useCart()
  const { user, isAuthenticated, logout } = useAuth()

  const toggleDropdown = (menu: string) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null)
    } else {
      setDropdownOpen(menu)
    }
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Our Mission', href: '/our-mission' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Shop', href: '/shop' },
    { name: 'Become a Member', href: '/membership' },
  ]

  return (
    <header className="relative bg-white border-b border-gray-200">
      {/* Mini Cart */}
      <div className="hidden md:block bg-gray-100 py-1">
        <div className="container mx-auto flex justify-end">
          <div className="text-sm text-gray-700">
            Your Cart
            <select className="ml-2 border-none bg-transparent text-sm">
              <option>My Country</option>
            </select>
          </div>
          <div className="ml-4 flex space-x-2">
            <button className="text-xs text-gray-700 hover:underline">CHECKOUT</button>
            <span className="text-gray-500">|</span>
            <button className="text-xs text-gray-700 hover:underline">CONTINUE SHOPPING</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-14 w-56">
                <Image
                  src="https://ext.same-assets.com/2483704932/1092955363.png"
                  alt="LiveGood"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-4 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-800 px-2 py-1 hover:text-livegood-green font-body ${
                  item.name === 'Home' ? 'text-livegood-orange border-b-2 border-livegood-orange' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center ml-4">
            <select className="border text-sm px-2 py-1 rounded">
              <option>Select Language</option>
            </select>
            <div className="text-xs text-gray-500 flex items-center ml-1">
              Powered by
              <Image
                src="https://ext.same-assets.com/2483704932/256514404.png"
                alt="Google Translate"
                width={14}
                height={14}
                className="mx-1"
              />
              Translate
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center ml-4 space-x-4">
            {isAuthenticated ? (
              <div className="hidden md:block relative">
                <button
                  className="text-gray-800 hover:text-livegood-green flex items-center"
                  onClick={() => toggleDropdown('user')}
                >
                  <User className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">{user?.name.split(' ')[0]}</span>
                </button>
                {dropdownOpen === 'user' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(null)}
                      >
                        My Account
                      </Link>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(null)}
                      >
                        My Orders
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => {
                          logout();
                          setDropdownOpen(null);
                        }}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="hidden md:block text-gray-800 hover:text-livegood-green">
                Login
              </Link>
            )}

            <Link href="/cart" className="text-gray-800 hover:text-livegood-green relative">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-livegood-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              className="hidden md:block text-gray-800 hover:text-livegood-green"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 py-2 px-4 hover:bg-gray-100 font-body"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    href="/account"
                    className="text-gray-800 py-2 px-4 hover:bg-gray-100 font-body"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  <button
                    className="text-left text-red-600 py-2 px-4 hover:bg-gray-100 font-body"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-gray-800 py-2 px-4 hover:bg-gray-100 font-body"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
            <div className="mt-4 px-4">
              <select className="w-full border text-sm px-2 py-1 rounded">
                <option>Select Language</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu */}
      <div className="hidden md:block bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex space-x-2 py-1">
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:text-livegood-green"
                onClick={() => toggleDropdown('products')}
              >
                <span>All Products</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen === 'products' && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Shop All
                    </Link>
                    <Link
                      href="/products/category/weight-management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Weight Management
                    </Link>
                    <Link
                      href="/products/category/immune-support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Immune Support
                    </Link>
                    <Link
                      href="/products/category/brain-health"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Brain Health
                    </Link>
                    <Link
                      href="/products/category/cardiovascular-health"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Cardiovascular Health
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:text-livegood-green"
                onClick={() => toggleDropdown('packs')}
              >
                <span>Products Packs</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen === 'packs' && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    <Link
                      href="/products/packs/daily-essentials"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Daily Essentials
                    </Link>
                    <Link
                      href="/products/packs/ultimate-wellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Ultimate Wellness
                    </Link>
                    <Link
                      href="/products/packs/maximum-energy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Maximum Energy
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:text-livegood-green"
                onClick={() => toggleDropdown('skincare')}
              >
                <span>Skin Care Products</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen === 'skincare' && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    <Link
                      href="/products/skincare/ageless-renewal"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Ageless Renewal
                    </Link>
                    <Link
                      href="/products/skincare/ageless-skin-serum"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Ageless Skin Serum
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:text-livegood-green"
                onClick={() => toggleDropdown('accessories')}
              >
                <span>Accessories and Swag</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen === 'accessories' && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    <Link
                      href="/products/accessories/apparel"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      LiveGood Apparel
                    </Link>
                    <Link
                      href="/products/accessories/bottles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      Shaker Bottles
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar - Conditional Render */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 py-3 z-20">
          <div className="container mx-auto">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-livegood-green"
              />
              <button className="bg-livegood-green hover:bg-livegood-green/90 text-white px-4 py-2 rounded-r">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2">
              <button
                className="text-sm text-gray-500 hover:text-livegood-green"
                onClick={() => setSearchOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
