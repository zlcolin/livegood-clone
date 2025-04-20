import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeatureShowcase = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-8">
            With a commitment to helping people, <strong className="text-livegood-green">LiveGood</strong> brings you the most advanced nutritional supplements on the market, made with only the purest, highest quality, results-driven ingredients on the planet, without the expensive pricing mark-ups of other companies.
          </p>
          <div className="h-1 w-32 bg-livegood-orange mx-auto" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Feature 1 */}
          <Link
            href="/vitamin-deficient"
            className="group relative overflow-hidden rounded-full border-8 border-livegood-green hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square relative">
              <Image
                src="https://ext.same-assets.com/2483704932/2613790625.png"
                alt="Vitamin Deficiency"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-black/60">
                <h3 className="text-2xl font-heading font-bold text-orange-500">
                  Are YOU one of<br />
                  <span className="text-3xl text-orange-500">92% OF<br />AMERICANS</span>
                </h3>
                <p className="text-white font-body mt-2">
                  who are Vitamin<br />Deficient!
                </p>
              </div>
            </div>
          </Link>

          {/* Feature 2 */}
          <Link
            href="/highest-quality-products"
            className="group relative overflow-hidden rounded-full border-8 border-livegood-green hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square relative">
              <Image
                src="https://ext.same-assets.com/2483704932/1903558554.png"
                alt="Highest Quality Products"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-black/60">
                <h3 className="text-2xl font-heading font-bold text-orange-500">
                  Highest<br />Quality<br />
                  <span className="text-white">Ingredients on<br />the Planet!</span>
                </h3>
              </div>
            </div>
          </Link>

          {/* Feature 3 */}
          <Link
            href="/best-products"
            className="group relative overflow-hidden rounded-full border-8 border-livegood-green hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square relative">
              <Image
                src="https://ext.same-assets.com/2483704932/2900378119.png"
                alt="Best Products"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-black/60">
                <h3 className="text-2xl font-heading font-bold text-orange-500">
                  Best<br />Products
                </h3>
                <p className="text-white font-body mt-2">
                  Less than HALF<br />the Price!
                </p>
                <p className="text-orange-500 font-heading font-bold mt-2">
                  How does it work?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
