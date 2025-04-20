import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        {/* Footer Navigation */}
        <div className="mb-6 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <Link href="/" className="hover:text-livegood-green">Home</Link>
            <span className="text-gray-500">|</span>
            <Link href="/products" className="hover:text-livegood-green">Products</Link>
            <span className="text-gray-500">|</span>
            <Link href="/our-mission" className="hover:text-livegood-green">Our Mission</Link>
            <span className="text-gray-500">|</span>
            <Link href="/our-team" className="hover:text-livegood-green">Our Team</Link>
            <span className="text-gray-500">|</span>
            <Link href="/shop" className="hover:text-livegood-green">Shop</Link>
            <span className="text-gray-500">|</span>
            <Link href="/faqs" className="hover:text-livegood-green">FAQ</Link>
            <span className="text-gray-500">|</span>
            <Link href="/blog" className="hover:text-livegood-green">Blog</Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/pay-plan" className="hover:text-livegood-green">Affiliate Compensation Plan</Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy-policy" className="hover:text-livegood-green">Privacy Policy</Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms-and-conditions" className="hover:text-livegood-green">Terms and Conditions</Link>
            <span className="text-gray-500">|</span>
            <Link href="/refund-policy" className="hover:text-livegood-green">Refund Policy</Link>
            <span className="text-gray-500">|</span>
            <Link href="/certificates-of-analysis" className="hover:text-livegood-green">Certificates Of Analysis</Link>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="border border-gray-700 p-4 mb-6 text-sm text-center text-gray-400">
          *These statements have not been evaluated by the Food and Drug Administration.<br />
          These products are not intended to diagnose, treat, cure or prevent any disease.
        </div>

        {/* Copyright and Info */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">Copyright © 2021 All Rights Reserved</p>
          </div>

          <div className="mb-4 md:mb-0 flex justify-center">
            <Link href="/" className="block">
              <Image
                src="https://ext.same-assets.com/2483704932/1729031798.png"
                alt="LiveGood"
                width={150}
                height={45}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end">
            {/* Social Media */}
            <div className="flex space-x-4 mb-2">
              <a href="https://www.facebook.com/LiveGoodMembers" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-livegood-green">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="http://instagram.com/livegood_company/" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-livegood-green">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCXKqlv6OG8aEs6RdLFKhNNQ" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-livegood-green">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@livegood_supplements" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-livegood-green">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            {/* Contact Information */}
            <p className="text-sm text-gray-400 text-center md:text-right">
              1201 Jupiter Park Dr. Unit 5<br />
              Jupiter, FL 33458
            </p>
            <a href="mailto:support@livegood.com" className="text-sm hover:text-livegood-green mt-1">
              support@livegood.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
