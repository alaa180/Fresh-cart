import React from 'react'
import notFound from "../assets/notfound.png"
import Image from 'next/image'


export default function Notfound() {
  return (
    <div className='h-screen text-2xl flex justify-center items-center'>
              <Image src={notFound} alt='not-founf-img' />
      
  </div>
  )
}
