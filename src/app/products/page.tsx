'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ProductCard from '@/components/product/ProductCard'
import CategoryFilter from '@/components/product/CategoryFilter'
import products from '@/data/products'
import categories from '@/data/categories'
import { ArrowUpDown, Search, GridIcon, ListIcon } from 'lucide-react'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc'

const ProductsPage = () => {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Update active category when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam)
    }
  }, [categoryParam])

  // Filter products based on active category and search query
  const filteredProducts = products.filter(product => {
    // Filter by category
    const categoryMatch =
      activeCategory === 'all' ||
      product.category.some(cat => {
        const matchingCategory = categories.find(c => c.slug === activeCategory)
        return matchingCategory ? cat.toLowerCase() === matchingCategory.name.toLowerCase() : false
      })

    // Filter by search query
    const searchMatch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.some(desc =>
        desc.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return categoryMatch && searchMatch
  })

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.memberPrice - b.memberPrice
      case 'price-high':
        return b.memberPrice - a.memberPrice
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      default:
        // Sort by best sellers first, then new items, then by ID
        if (a.isBestSeller && !b.isBestSeller) return -1
        if (!a.isBestSeller && b.isBestSeller) return 1
        if (a.isNew && !b.isNew) return -1
        if (!a.isNew && b.isNew) return 1
        return a.id - b.id
    }
  })

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption)
  }

  const activeTitle = activeCategory === 'all'
    ? 'All Products'
    : categories.find(c => c.slug === activeCategory)?.name || 'Products'

  const activeDescription = activeCategory === 'all'
    ? 'Browse our complete selection of premium health supplements and products.'
    : categories.find(c => c.slug === activeCategory)?.description || ''

  return (
    <Layout>
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-livegood-dark mb-4">
              {activeTitle}
            </h1>
            <p className="text-gray-600 max-w-3xl">
              {activeDescription}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Filters */}
            <div className="md:w-64 flex-shrink-0">
              <CategoryFilter
                activeCategory={activeCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative flex-1 w-full">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-livegood-green"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="flex items-center">
                      <label htmlFor="sort-select" className="text-sm text-gray-600 mr-2 whitespace-nowrap">
                        Sort by:
                      </label>
                      <select
                        id="sort-select"
                        value={sortBy}
                        onChange={handleSortChange}
                        className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-livegood-green"
                      >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                      </select>
                    </div>

                    <div className="flex border border-gray-300 rounded-md overflow-hidden">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
                        aria-label="Grid view"
                      >
                        <GridIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 ${viewMode === 'list' ? 'bg-gray-200' : 'bg-white'}`}
                        aria-label="List view"
                      >
                        <ListIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="mb-4">
                <p className="text-gray-600">
                  Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Products grid */}
              {sortedProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                }`}>
                  {sortedProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showDetails={viewMode === 'grid'}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-lg text-gray-600 mb-4">No products found for your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('all')
                    }}
                    className="bg-livegood-green hover:bg-livegood-green/90 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
