'use client'
import { toast } from '@/components/ui/toast'
import { addToWishlist } from '@/src/api/actions/WishlistActions/AddToWishlist'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

export default function WishlistBtn({ cls, child, prodId }: { cls: string, child: ReactNode, prodId: string }) {
  const query = useQueryClient();
  async function HandleAddToWishlist() {    
    mutate(prodId)

}

  const {data,mutate} = useMutation({
    mutationFn: addToWishlist,
    onSuccess:()=>{
       toast.add({
        type:'success',
        description:'Product added successfully to your wishlist'
      })
    },
    onError:()=>{
       toast.add({
        type:'error',
        description:'Login First'
      })
    }
  })
  

  return (
    <>
      <button onClick={HandleAddToWishlist} className={cls}>
        {child}
      </button>

    </>
  )
}
