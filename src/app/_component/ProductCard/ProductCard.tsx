import { ProductType } from '@/src/api/types/productType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddBtn from '../AddBtn/AddBtn'
import WishlistBtn from '../WishlistBtn/WishlistBtn'

const starPath =
  'M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z'

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="h-full flex flex-col bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5">
      <div className="relative">
        <span className="absolute top-2 left-2 z-10 bg-orange-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          -20%
        </span>
        <WishlistBtn
          prodId={product._id}
          cls={'absolute top-2 right-0 z-10 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 transition-colors'
          }
          child={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
          }
        />

        <Link href={`/productDetails/${product._id}`} className="block">
          <div className="flex items-center justify-center py-3">
            <Image
              width={300}
              height={200}
              src={product.imageCover}
              alt={product.title}
              className="object-contain w-full h-56"
            />
          </div>
        </Link>
      </div>

      <div className="mt-4 flex flex-col flex-1 gap-1">
        <p className="uppercase text-gray-500 text-xs font-medium tracking-wide">
          {product.category.name}
        </p>

        <h3
          className="text-gray-800 font-medium text-lg min-h-[3.5rem]"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.title}
        </h3>
        <div className="flex gap-1 text-orange-500 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${star === 5 ? 'text-gray-300' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d={starPath} />
            </svg>
          ))}
        </div>
        <div className="flex items-end justify-between mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-green-600 text-xl font-semibold">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="text-gray-400 text-sm line-through">
                  {product.price} EGP
                </span>
              </>
            ) : (
              <span className="text-black font-semibold text-xl">
                {product.price} EGP
              </span>
            )}
          </div>

          <AddBtn
            prodId={product._id}
            cls={
              'cursor-pointer w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center shadow text-white'
            }
            child={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}