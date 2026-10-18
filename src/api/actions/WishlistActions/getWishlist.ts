'use server'

import { getTokenFun } from '@/src/utilities/getTokenData'

export async function getWishlist() {
  const token = await getTokenFun()

  if (!token) {
    throw new Error('Unauthorized')
  }

  const response = await fetch(
    'https://ecommerce.routemisr.com/api/v1/wishlist',
    {
      method: 'GET',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist (${response.status})`)
  }

  return response.json()
}