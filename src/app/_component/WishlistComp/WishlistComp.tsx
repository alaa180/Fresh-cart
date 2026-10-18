'use client'
import AddBtn from '../AddBtn/AddBtn'
import { toast } from '@/components/ui/toast'
import { getWishlist } from '@/src/api/actions/WishlistActions/getWishlist'
import { deleteWishlistItems } from '@/src/api/actions/WishlistActions/deleteWishlistItems'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { WishlistProduct } from '@/src/api/types/productType'

export default function WishlistComp() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getWishlist,
  })

  const products: WishlistProduct[] = data?.data ?? []

  const { mutate: removeItem, isPending } = useMutation({
    mutationFn: (id: string) => deleteWishlistItems(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
      toast.add({ type: 'success', description: 'Removed from wishlist' })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Something went wrong!' })
    },
  })

  return (
    <>
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-800">Wishlist</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-xs text-gray-500">{products.length} items saved</p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <p className="text-center text-gray-500 py-20">Loading...</p>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="mb-4">Your wishlist is empty.</p>
            <Link href="/" className="text-green-600 font-semibold hover:underline">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 text-xs text-gray-500">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>

            {products.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 border-t border-gray-100"
              >
                <div className="md:col-span-6 flex items-center gap-4">
                  <Link
                    href={`/productDetails/${product._id}`}
                    className="relative w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden"
                  >
                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  </Link>
                  <div className="min-w-0">
                    <Link
                      href={`/productDetails/${product._id}`}
                      className="text-sm font-medium text-gray-800 hover:text-green-600 line-clamp-2"
                    >
                      {product.title}
                    </Link>
                    <p className="text-xs text-gray-400 mt-1">{product.category?.name}</p>
                  </div>
                </div>

                <div className="md:col-span-2 flex md:flex-col items-center justify-between md:justify-center">
                  <span className="md:hidden text-xs text-gray-500">Price</span>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-900">
                      {product.priceAfterDiscount ?? product.price} EGP
                    </p>
                    {product.priceAfterDiscount && (
                      <p className="text-xs text-gray-400 line-through">{product.price} EGP</p>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 flex md:justify-center items-center justify-between">
                  <span className="md:hidden text-xs text-gray-500">Status</span>
                  {product.quantity > 0 ? (
                    <span className="text-[11px] font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                      • In Stock
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                      • Out of Stock
                    </span>
                  )}
                </div>

                <div className="md:col-span-2 flex items-center justify-end md:justify-center gap-2">
                  <AddBtn
                    prodId={product._id}
                    cls="cursor-pointer flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-colors"
                    child={<>Add to Cart</>}
                  />

                  <button
                    type="button"
                    aria-label="Remove from wishlist"
                    disabled={isPending}
                    onClick={() => removeItem(product._id)}
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors disabled:opacity-50"
                  >
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
                      <path d="M3 6h18" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}