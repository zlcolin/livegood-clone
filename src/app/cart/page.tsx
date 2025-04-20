'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { useCart } from '@/lib/CartContext'
import { Minus, Plus, Trash2, ArrowRight, ChevronLeft, ShoppingBag } from 'lucide-react'

const CartPage = () => {
  const router = useRouter()
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId)
  }

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  const handleCheckout = () => {
    // In a real app, this would navigate to checkout page
    // For this demo, we'll just navigate to a thank you page
    alert('This would proceed to checkout in a real app.')
    router.push('/checkout')
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-livegood-dark mb-4">
              Your Shopping Cart
            </h1>
            <p className="text-gray-600">
              Review your items before checking out
            </p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-livegood-dark">
                        Cart Items ({cartItems.length})
                      </h2>
                      <button
                        onClick={handleClearCart}
                        className="text-sm text-gray-500 hover:text-red-500 flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Clear Cart
                      </button>
                    </div>

                    <div className="divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <div key={item.product.id} className="py-4 flex flex-col sm:flex-row">
                          {/* Product Image */}
                          <div className="sm:w-28 h-28 mb-4 sm:mb-0 relative flex-shrink-0 mx-auto sm:mx-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>

                          {/* Product Details */}
                          <div className="sm:ml-6 flex-1 flex flex-col sm:flex-row justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-livegood-dark mb-1">
                                <Link href={`/products/${item.product.slug}`} className="hover:text-livegood-green">
                                  {item.product.name}
                                </Link>
                              </h3>
                              <p className="text-gray-500 text-sm mb-4">
                                Member Price: ${item.product.memberPrice.toFixed(2)}
                              </p>

                              {/* Mobile Price - shown only on small screens */}
                              <div className="sm:hidden flex justify-between items-center mb-4">
                                <p className="font-medium text-livegood-dark">
                                  ${(item.product.memberPrice * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => handleRemoveItem(item.product.id)}
                                  className="text-gray-400 hover:text-red-500"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center">
                                <button
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                  className={`p-1 rounded-full border ${
                                    item.quantity <= 1
                                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                  }`}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="mx-3 w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                  className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>

                            {/* Desktop Price and Remove - hidden on small screens */}
                            <div className="hidden sm:flex flex-col items-end justify-between">
                              <p className="font-medium text-livegood-dark">
                                ${(item.product.memberPrice * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => handleRemoveItem(item.product.id)}
                                className="text-gray-400 hover:text-red-500 text-sm"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="flex justify-between items-center">
                  <Link
                    href="/products"
                    className="text-livegood-green hover:text-livegood-green/80 flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-livegood-dark mb-6">
                      Order Summary
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                      </div>

                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="flex justify-between text-lg font-bold text-livegood-dark">
                          <span>Total</span>
                          <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Taxes calculated at checkout
                        </p>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full bg-livegood-green hover:bg-livegood-green/90 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center mt-6"
                      >
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-livegood-dark mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link
                href="/products"
                className="bg-livegood-green hover:bg-livegood-green/90 text-white py-3 px-6 rounded-md font-medium inline-flex items-center"
              >
                Start Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
