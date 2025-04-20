'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    image: 'https://ext.same-assets.com/2483704932/2765615363.jpeg',
    title: "PUREST MOST HEALTHY INGREDIENTS",
  },
  {
    id: 2,
    image: 'https://ext.same-assets.com/2483704932/3164950786.jpeg',
    title: "PREMIUM QUALITY SUPPLEMENTS",
  }
]

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                    {index === 0 && (
                      <>
                        <span className="text-gray-900">PUREST MOST HEALTHY</span><br />
                        <span className="text-livegood-green text-6xl md:text-7xl">INGREDIENTS</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="text-gray-900">PREMIUM QUALITY</span><br />
                        <span className="text-livegood-green text-6xl md:text-7xl">SUPPLEMENTS</span>
                      </>
                    )}
                  </h1>
                  <div className="mt-8">
                    <Link href="/products"
                      className="bg-livegood-orange hover:bg-livegood-orange/90 text-white px-8 py-3 rounded-md font-heading font-semibold text-lg">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((slide) => (
          <button
            key={`indicator-${slide.id}`}
            onClick={() => setCurrentSlide(slides.findIndex(s => s.id === slide.id))}
            className={`w-3 h-3 rounded-full ${
              slides.findIndex(s => s.id === slide.id) === currentSlide ? 'bg-livegood-green' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${slide.title}`}
          />
        ))}
      </div>

      {/* Product Showcase Overlay */}
      <div className="hidden md:block absolute bottom-0 right-0 w-1/2 h-[350px]">
        <Image
          src="https://ext.same-assets.com/2483704932/558655422.png" // Using organic coffee product image
          alt="LiveGood Products"
          width={600}
          height={350}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export default HeroBanner
