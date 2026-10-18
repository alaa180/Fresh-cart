import { getShopCategories } from '@/src/api/services/categoriesApi'
import Image from 'next/image'
import React from 'react'

export default async function ShopCategory() {
  const data = await getShopCategories()

  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-8 py-2 pl-4 border-l-4 border-l-black">
        Shop by category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
        {data.map((category) => (
          <div
            key={category._id}
            className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-200 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-green-500 transition-all duration-300">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h4 className="text-sm sm:text-base font-semibold text-gray-700 text-center group-hover:text-green-600 transition-colors">
              {category.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}