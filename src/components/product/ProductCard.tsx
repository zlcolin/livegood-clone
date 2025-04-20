'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart } from 'lucide-react'
import type { Product } from '@/data/products'
import { useCart } from '@/lib/CartContext'

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

const ProductCard = ({ product, showDetails = true }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  const renderBadges = () => {
    return (
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
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
    )
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative p-4 flex flex-col h-full">
        {renderBadges()}

        <div className="relative h-52 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <h3 className="text-base font-bold text-livegood-dark mb-2 line-clamp-2 font-heading min-h-[2.5rem]">
          {product.name}
        </h3>

        {showDetails && (
          <ul className="mb-4 flex-grow">
            {product.shortDescription.slice(0, 3).map((item, index) => (
              <li key={`${product.id}-desc-${index}`} className="text-sm text-gray-600 mb-1 flex items-start">
                <span className="text-livegood-green mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-400 line-through text-sm">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-livegood-dark font-bold text-lg">
                ${product.memberPrice.toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`rounded-full p-2 transition-colors ${
                isInCart(product.id)
                  ? 'bg-green-100 text-livegood-green'
                  : 'bg-gray-100 hover:bg-livegood-green hover:text-white'
              }`}
              aria-label={isInCart(product.id) ? "Added to cart" : "Add to cart"}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-livegood-green hover:bg-livegood-green/90 text-white py-2 px-3 rounded text-sm font-medium"
            >
              Add to Cart
            </button>

            <Link
              href={`/products/${product.slug}`}
              className="flex-1 border border-livegood-green text-livegood-green hover:bg-livegood-green/10 py-2 px-3 rounded text-sm font-medium text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
