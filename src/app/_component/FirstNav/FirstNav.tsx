import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import Link from 'next/link';


export default function FirstNav() {
  return (
    <div className='bg-white lg:flex p-3 justify-between hidden'>
      <div className="leftSide flex gap-5 ">
        <span className='flex gap-2 items-center font-medium text-gray-500 text-sm'>
          <MdLocalShipping className='text-green-600' />
          Free Shipping on Orders 500 EGP
        </span>
        <span className='flex gap-2 items-center font-medium text-gray-500 text-sm'>
          <FaGift className='text-green-600' />
          New Arrivals Daily
        </span>
      </div>

      <div className="rightSide flex gap-5">
        <div className='firstNavLinks flex gap-3 border-r border-gray-300 pr-6'>
          <Link href='tel: +1 (800) 123-4567' className='flex gap-1.5 items-center font-medium text-gray-500 text-sm hover:text-green-600 cursor-pointer transition-all'>
            <HiPhone className='text-sm text-current' />
            +1 (800) 123-4567
          </Link>
          <Link href='mailto: support@freshcart.com' className='flex gap-1.5 items-center font-medium text-gray-500 text-sm hover:text-green-600 cursor-pointer  transition-all'>
            <MdOutlineEmail className='text-sm' />
            support@freshcart.com
          </Link>
        </div>

        <div className='firstNavLinks flex gap-3'>
          <Link href='/login' className='flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer  transition-all'>
            <BiUser className='text-sm' />
            Sign In
          </Link>
          <Link href='/register' className='flex gap-1.5 items-center text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer  transition-all'>
            <HiUserAdd className='text-sm' />
            Sign Up
          </Link>
        </div>



      </div>
    </div>
  )
}
