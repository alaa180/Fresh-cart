import { getAllBrands } from '@/src/api/services/brandsApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Brands() {
  const data = await getAllBrands()

  return (
    <>
      <div className="w-full bg-gradient-to-b from-violet-600 via-purple-500 to-purple-400 px-6 py-10 text-white md:px-7 md:py-12">
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/70 hover:text-white">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span>Brands</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/20 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3H4a2 2 0 0 0-2 2v5.59A2 2 0 0 0 2.59 12L12.17 21.59a2 2 0 0 0 2.83 0l5.59-5.59a2 2 0 0 0 0-2.59Z" />
              <circle cx="6.5" cy="6.5" r=".5" fill="currentColor" />
              <path d="m16 5 5 5" />
            </svg>
          </div>

          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Top Brands</h2>
            <p className="mt-2 text-md text-white/85 md:text-md">
              Shop from your favorite brands
            </p>
          </div>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {data.map((brand) => (
            <Link
              key={brand._id}
              href={`/brands/${brand._id}`}
              className="group flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h4 className="text-sm sm:text-base font-bold text-black text-center group-hover:text-purple-700 transition-colors duration-300">
                {brand.name}
              </h4>

              <span
                className="flex items-center gap-1 text-sm font-medium text-purple-500
                 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                 group-focus-visible:opacity-100 group-focus-visible:translate-y-0
                 transition-all duration-300"
              >
                View Products
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