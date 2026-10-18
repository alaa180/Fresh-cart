import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../assets/freshcart-logo.svg"

import React from 'react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Categories', href: '/categories' },
      { label: 'Brands', href: '/brands' },
      { label: 'Electronics', href: '/categories' },
      { label: "Men's Fashion", href: '/categories' },
      { label: "Women's Fashion", href: '/categories' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'My Account', href: '/profile' },
      { label: 'Order History', href: '/allorders' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'Shopping Cart', href: '/cart' },
      { label: 'Sign In', href: '/login' },
      { label: 'Create Account', href: '/register' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help Center', href: '/help' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns & Refunds', href: '/returns' },
      { label: 'Track Order', href: '/allorders' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

const socials = [
  {
    name: 'Facebook',
    path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
  },
  {
    name: 'Twitter',
    path: 'M23 4.56a9.4 9.4 0 01-2.7.74 4.7 4.7 0 002.07-2.6 9.4 9.4 0 01-2.99 1.14 4.7 4.7 0 00-8.02 4.29A13.35 13.35 0 011.64 3.16a4.7 4.7 0 001.46 6.27 4.7 4.7 0 01-2.13-.59v.06a4.7 4.7 0 003.77 4.6 4.7 4.7 0 01-2.12.08 4.7 4.7 0 004.39 3.26A9.43 9.43 0 010 19.54a13.3 13.3 0 007.2 2.11c8.64 0 13.36-7.16 13.36-13.36 0-.2 0-.41-.01-.61A9.5 9.5 0 0023 4.56z',
  },
  {
    name: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
  },
  {
    name: 'YouTube',
    path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z',
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center bg-white rounded-lg px-4 py-2"
            >
              <Image src={logo} alt='fresh-cart' />
              
            </Link>

            <p className="mt-6 text-base leading-7 text-gray-400 max-w-md">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+18001234567" className="hover:text-green-500 transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:support@freshcart.com" className="hover:text-green-500 transition-colors">
                  support@freshcart.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                </svg>
                <span>123 Commerce Street, New York, NY 10001</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-12 h-12 rounded-full bg-[#1f2a44] flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xl font-semibold text-white mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-green-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {['Visa', 'Mastercard', 'PayPal'].map((name) => (
              <span key={name} className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}