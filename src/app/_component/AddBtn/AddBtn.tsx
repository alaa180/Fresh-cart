'use client'
import { toast } from '@/components/ui/toast'
import { addToCart } from '@/src/api/actions/CartActions/AddToCart'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

export default function AddBtn({ cls, child, prodId }: { cls: string, child: ReactNode, prodId: string }) {
  const query = useQueryClient();
  async function HandleAddToCart() {    
    mutate(prodId)
}

  const {data,mutate} = useMutation({
    mutationFn: addToCart,
    onSuccess:()=>{
       toast.add({
        type:'success',
        description:'Product added successfully to your cart'
      })
          query.invalidateQueries({queryKey:['getCart']})

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
      <button onClick={HandleAddToCart} className={cls}>
        {child}
      </button>

    </>
  )
}
