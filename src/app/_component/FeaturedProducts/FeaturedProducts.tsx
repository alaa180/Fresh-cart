import { getAllProducts } from '@/src/api/services/productApi'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default async function FeaturedProducts() {
  const data = await getAllProducts()

  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-8 py-2 pl-4 border-l-4 border-l-black">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  )
}