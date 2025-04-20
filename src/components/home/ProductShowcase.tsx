import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 1,
    name: 'Bio-Active Complete Multi-Vitamin For Men',
    image: 'https://ext.same-assets.com/2560348819/476148013.png',
    description: [
      '24 Vitamins and Minerals',
      'Immune and Cardiovascular Support',
      'Promotes Healthy Aging'
    ],
    link: '/multivitamin-for-men'
  },
  {
    id: 2,
    name: 'Bio-Active Complete Multi-Vitamin for Women with Iron',
    image: 'https://ext.same-assets.com/2560348819/3057610637.png',
    description: [
      '24 Vitamins and Minerals',
      'Immune and Cardiovascular Support',
      'Promotes Healthy Aging'
    ],
    link: '/multivitamin-for-women'
  },
  {
    id: 3,
    name: 'Organic D3-K2 2000',
    image: 'https://ext.same-assets.com/2560348819/1638590167.png',
    description: [
      'Support Strong Bone Density',
      'Maintain Healthy Heart Function',
      'Highest Quality Vitamins D and K'
    ],
    link: '/d3-k2'
  },
  {
    id: 4,
    name: 'Ultra Magnesium Complex',
    image: 'https://ext.same-assets.com/2560348819/2348031465.png',
    description: [
      'Maximum Muscle, Nerve and Energy Support',
      'Supports Over 300 Enzyme Reactions',
      'Sleep Support',
      'Most Bio-Available Magnesium'
    ],
    link: '/ultra-magnesium-complex'
  }
]

const ProductShowcase = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-livegood-dark mb-4">
            Life Changing Products<span className="text-livegood-green">.</span><br />
            <span className="text-livegood-green">Unmatched Quality</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are good products, there are great products, and there are Live<strong className="text-livegood-green">Good</strong> products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 flex flex-col h-full">
                <div className="relative h-48 mb-4 mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <h3 className="text-lg font-bold text-livegood-dark mb-3 font-heading">
                  {product.name}
                </h3>

                <ul className="mb-4 flex-grow">
                  {product.description.map((item, index) => (
                    <li key={`${product.id}-desc-${index}`} className="text-sm text-gray-600 mb-1 flex items-start">
                      <span className="text-livegood-green mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.link}
                  className="mt-auto block text-center bg-livegood-green hover:bg-livegood-green/90 text-white py-2 px-4 rounded-md font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-block bg-livegood-orange hover:bg-livegood-orange/90 text-white py-3 px-8 rounded-md font-bold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
