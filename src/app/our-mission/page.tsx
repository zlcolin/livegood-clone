import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function OurMission() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://ext.same-assets.com/455004553/1094742615.jpeg"
          alt="Our Mission"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gray-800">Our</span> <span className="text-livegood-green">Mission</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Mission is Simple
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl mb-8">
              To Help People <span className="text-livegood-green font-bold">Get Healthy</span>, And <span className="text-livegood-green font-bold">Stay Healthy</span> Without Having To Spend A Fortune To Do It.
            </p>
            <div className="h-1 w-32 bg-livegood-orange mx-auto" />
          </div>
        </div>
      </section>

      {/* Vitamin Deficiency Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-8">
              With over <strong className="text-livegood-green">92% of Americans</strong> deficient in one or more vitamins or minerals, most people are not getting everything their body needs from food. The longer your body goes without the nutrients it needs to stay healthy, you don't digest food properly, your organs fail to function at peak levels and your immune system breaks down. All of which can be avoided through proper supplementation.
            </p>
          </div>
        </div>
      </section>

      {/* Supplementation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="text-livegood-green font-bold">Supplementation</span> Is Not Only Important, It Is Literally Vital To <span className="text-livegood-green font-bold">Your Health</span>
              </h2>
              <p className="text-lg text-gray-700">
                With the combination of our food not giving our bodies what they need, and people not getting enough fresh air and exercise on a daily basis, this country is becoming more unhealthy than it's ever been. What's worse is that when people get sick, they turn to drugs to treat their symptoms, instead of supplements to prevent the issue from happening in the first place. This has become an endless cycle for so many people, and it's getting worse and worse.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] rounded-full overflow-hidden border-8 border-livegood-green">
                <Image
                  src="https://ext.same-assets.com/455004553/1771502654.jpeg"
                  alt="Supplementation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-livegood-dark mb-4">
                  It's Time To Make A <span className="text-livegood-orange">Change.</span>
                </h2>
                <div className="h-1 w-32 bg-livegood-orange mx-auto mb-6" />

                <p className="text-gray-700 mb-8">
                  At <span className="text-livegood-green font-bold">LiveGood</span>, not only has our industry-leading team of natural health experts created the most complete, functional, and essential vitamins, supplements, and skin care products available anywhere using only the highest quality ingredients on the planet, but because we don't sell them through stores or affiliates, we make them available to you at a fraction of the cost of other brands!
                </p>

                <Link
                  href="/membership"
                  className="inline-block bg-livegood-green hover:bg-livegood-green/90 text-white font-bold text-xl px-10 py-4 rounded-md uppercase tracking-wide transition-colors"
                >
                  ARE YOU READY!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
