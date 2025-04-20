import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-livegood-green/90 to-livegood-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-livegood-dark mb-4">
                It's Time To Make A <span className="text-livegood-orange">Change.</span>
              </h2>
              <div className="h-1 w-32 bg-livegood-orange mx-auto mb-6" />

              <p className="text-gray-700 mb-8">
                At <span className="text-livegood-green font-bold">LiveGood</span>, not only has our industry-leading team of natural health experts created the most complete, functional, and essential vitamins, supplements, and skin care products available anywhere using only the highest quality ingredients on the planet, but because we don't sell them through stores or affiliates, we make them available to you at a fraction of the cost of other brands!
              </p>

              <Link
                href="/membership"
                className="inline-block bg-livegood-green hover:bg-livegood-green/90 text-white font-heading font-bold text-xl px-10 py-4 rounded-md uppercase tracking-wide transition-colors"
              >
                ARE YOU READY!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
