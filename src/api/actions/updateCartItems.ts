'use server'

import { getTokenFun } from "@/src/utilities/getTokenData"

   export async function updateCartItems({prodId, count}:{prodId: string, count: number}) {
   const token = await getTokenFun();

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${prodId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          count: count,
        }),
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
