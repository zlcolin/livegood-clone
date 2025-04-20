'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import categories from '@/data/categories'

interface CategoryFilterProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onSelectCategory }: CategoryFilterProps) => {
  const handleCategoryClick = (categorySlug: string) => {
    if (onSelectCategory) {
      onSelectCategory(categorySlug)
    }
  }

  // Featured categories to show at the top
  const featuredCategories = categories.filter(cat => cat.featured)
  // All other categories
  const otherCategories = categories.filter(cat => !cat.featured)

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-lg font-bold mb-4 font-heading text-livegood-dark">Categories</h3>

      <div className="space-y-6">
        {/* Featured Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Featured</h4>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => handleCategoryClick('all')}
                className={`w-full text-left px-2 py-1.5 rounded text-sm flex items-center ${
                  !activeCategory || activeCategory === 'all'
                    ? 'bg-livegood-green/10 text-livegood-green font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChevronRight className={`h-4 w-4 mr-1 transition-transform ${
                  !activeCategory || activeCategory === 'all' ? 'transform rotate-90' : ''
                }`} />
                All Products
              </button>
            </li>
            {featuredCategories.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-2 py-1.5 rounded text-sm flex items-center ${
                    activeCategory === category.slug
                      ? 'bg-livegood-green/10 text-livegood-green font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight className={`h-4 w-4 mr-1 transition-transform ${
                    activeCategory === category.slug ? 'transform rotate-90' : ''
                  }`} />
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* All Other Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">All Categories</h4>
          <ul className="space-y-1">
            {otherCategories.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-2 py-1.5 rounded text-sm flex items-center ${
                    activeCategory === category.slug
                      ? 'bg-livegood-green/10 text-livegood-green font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight className={`h-4 w-4 mr-1 transition-transform ${
                    activeCategory === category.slug ? 'transform rotate-90' : ''
                  }`} />
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
