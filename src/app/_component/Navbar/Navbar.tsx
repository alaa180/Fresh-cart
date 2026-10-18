"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"
import logo from "../../../assets/freshcart-logo.svg"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@base-ui/react"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { callbackify } from "util"
import { useQuery } from "@tanstack/react-query"
import { CartResponseType } from "@/src/api/types/cartType"


export default function Navbar() {
  const { data: cartData, isLoading } = useQuery<CartResponseType>({
    queryKey: ['getCart'],
    queryFn: async () => {
      const response = await fetch('/api/cart');

      if (!response.ok) {
        throw new Error('Failed To Fetch');
      }

      return response.json();
    },
  });

  console.log('cart Data..', cartData);

  function handleLogout() {
    signOut({ redirect: true, callbackUrl: '/login' })
  }
  const { data: sessionData, status } = useSession()
  return (
    <NavigationMenu className={'bg-white sticky top-0 max-w-full z-50 p-4 border-t-1 border-b-1'}>
      <NavigationMenuList className={'justify-between'}>

        <Image src={logo} alt='fresh-cart' />

        <div className="md:flex gap-4 hidden">
          <NavigationMenuItem>
            <Link className="hover:text-green-500" href='/'>Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className="hover:text-green-500" href='/shop'>Shop</Link>
          </NavigationMenuItem> <NavigationMenuItem>
            <Link className="hover:text-green-500" href='/categories'>Categories</Link>
          </NavigationMenuItem> <NavigationMenuItem>
            <Link className="hover:text-green-500" href='/brands'>Brands</Link>
          </NavigationMenuItem>
        </div>

        <div className="md:flex gap-4 hidden items-center">
          {status === 'authenticated' ?
            <>
              <Link href='/wishlist'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              </Link>
              <Link className="relative" href='/cart'>
                <span className="absolute -top-2 -right-2 flex h-5 min-w-5 px-1 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-white ring-2 ring-white">{cartData?.numOfCartItems}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg></Link>

              <Button onClick={handleLogout} className={'bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-3xl font-medium'}>
                <Link className="flex items-center gap-1" href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-LineCap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                  Sign Out</Link>
              </Button>
            </>
            :
            <Button className={'bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-3xl font-medium'}>
              <Link className="flex items-center gap-1" href='/login'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
              </svg>
                Sign In</Link>
            </Button>
          }
        </div>

        <NavigationMenuItem className={'md:hidden'}>
          <NavigationMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/" title="Home">
              </ListItem>
              <ListItem href="/shop" title="Shop">
              </ListItem>
              <ListItem href="/categories" title="Categories">
              </ListItem>
              <ListItem href="/brands" title="Brands">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div></Link>} />
    </li>
  )
}
