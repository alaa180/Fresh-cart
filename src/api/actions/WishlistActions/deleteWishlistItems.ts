'use server'

import { getTokenFun } from "@/src/utilities/getTokenData"

   export async function deleteWishlistItems(prodId: string) {
   const token = await getTokenFun();

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`,
      {
        method: "DELETE",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Unauthorized");
    }

 const payload = await response.json()

 console.log(payload)

 return payload
  } catch (error) {
    throw error;
  }
}
