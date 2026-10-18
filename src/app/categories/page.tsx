import { getShopCategories } from '@/src/api/services/categoriesApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Categories() {
  const data = await getShopCategories()

  return (
    <>
      <div className="w-full bg-gradient-to-b from-green-600 via-green-500 to-green-400 px-6 py-10 text-white md:px-7 md:py-12">
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/70 hover:text-white">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span>Categories</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/20 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="m2 12 10 5 10-5" fill="none" />
              <path d="m2 17 10 5 10-5" fill="none" />
            </svg>
          </div>

          <div>
            <h2 className="text-3xl font-bold md:text-4xl">All Categories
            </h2>
            <p className="mt-2 text-md text-white/85 md:text-md">
              Browse our wide range of product categories
            </p>
          </div>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {data.map((categorie) => (
            <Link
              key={categorie._id}
              href={`/categories/${categorie._id}`}
              className="group flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden">
                <Image
                  src={categorie.image}
                  alt={categorie.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h4 className="text-sm sm:text-base font-bold text-black text-center group-hover:text-green-500 transition-colors duration-300">
                {categorie.name}
              </h4>

              <span
                className="flex items-center gap-1 text-xs font-medium text-green-500
                 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                 group-focus-visible:opacity-100 group-focus-visible:translate-y-0
                 transition-all duration-300"
              >
                View Subcategories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}