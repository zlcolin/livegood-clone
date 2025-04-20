'use client'

import React, { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import products from '@/data/products'
import { Minus, Plus, ShoppingCart, Heart, Check, ChevronRight } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import ProductCard from '@/components/product/ProductCard'

const ProductDetailPage = () => {
  const params = useParams()
  const slug = params.slug as string

  const product = products.find(p => p.slug === slug)

  // Recommended products - products in the same category
  const recommendedProducts = products
    .filter(p => p.id !== product?.id && p.category.some(cat => product?.category.includes(cat)))
    .slice(0, 4)

  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'benefits' | 'directions'>('description')
  const { addToCart, isInCart } = useCart()

  if (!product) {
    return notFound()
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex items-center text-sm">
              <Link href="/" className="text-gray-500 hover:text-livegood-green">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              <Link href="/products" className="text-gray-500 hover:text-livegood-green">Products</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              <span className="text-livegood-dark font-medium">{product.name}</span>
            </nav>
          </div>

          {/* Product Main Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image */}
              <div className="md:w-1/2 flex justify-center items-start">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-livegood-orange text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-livegood-green text-white text-xs font-bold px-2 py-1 rounded">
                        BEST SELLER
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-bold font-heading text-livegood-dark mb-4">
                  {product.name}
                </h1>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-livegood-dark font-bold text-3xl">${product.memberPrice.toFixed(2)}</span>
                    <span className="text-livegood-green text-sm font-medium">
                      Save ${(product.price - product.memberPrice).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Member price</p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 my-4">
                  <ul className="space-y-1">
                    {product.shortDescription.map((item) => (
                      <li key={`desc-${item.substring(0, 20)}`} className="flex items-start">
                        <Check className="h-5 w-5 text-livegood-green mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 font-medium mr-4">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={decrementQuantity}
                        className="px-3 py-1 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                        className="w-16 text-center border-x border-gray-300 py-1 focus:outline-none"
                      />
                      <button
                        onClick={incrementQuantity}
                        className="px-3 py-1 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-livegood-green hover:bg-livegood-green/90 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {isInCart(product.id) ? 'Update Cart' : 'Add to Cart'}
                    </button>
                    <button
                      className="border border-gray-300 p-3 rounded-md hover:bg-gray-100"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  <p>Categories: {product.category.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'description'
                    ? 'text-livegood-green border-b-2 border-livegood-green'
                    : 'text-gray-600 hover:text-livegood-green hover:bg-gray-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'features'
                    ? 'text-livegood-green border-b-2 border-livegood-green'
                    : 'text-gray-600 hover:text-livegood-green hover:bg-gray-50'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'benefits'
                    ? 'text-livegood-green border-b-2 border-livegood-green'
                    : 'text-gray-600 hover:text-livegood-green hover:bg-gray-50'
                }`}
              >
                Benefits
              </button>
              {product.directions && (
                <button
                  onClick={() => setActiveTab('directions')}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === 'directions'
                      ? 'text-livegood-green border-b-2 border-livegood-green'
                      : 'text-gray-600 hover:text-livegood-green hover:bg-gray-50'
                  }`}
                >
                  Directions
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
              )}
              {activeTab === 'features' && (
                <div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={`feature-${feature.substring(0, 20)}`} className="flex items-start">
                        <Check className="h-5 w-5 text-livegood-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'benefits' && (
                <div>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit) => (
                      <li key={`benefit-${benefit.substring(0, 20)}`} className="flex items-start">
                        <Check className="h-5 w-5 text-livegood-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'directions' && product.directions && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{product.directions}</p>
                </div>
              )}
            </div>
          </div>

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-heading text-livegood-dark mb-6">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-white rounded-lg shadow-md p-4 text-xs text-gray-500 text-center">
            *These statements have not been evaluated by the Food and Drug Administration.<br />
            These products are not intended to diagnose, treat, cure or prevent any disease.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetailPage
