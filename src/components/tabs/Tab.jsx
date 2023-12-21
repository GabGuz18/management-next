"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Tab = ({ path, title }) => {

  const currentPath = usePathname()

  return (
    <>
      <Link 
        href={path}
        className={`${path === currentPath ? 'text-blue-500' : 'text-white/50'} py-4 px-6 block hover:text-blue-500 focus:outline-none text-xl`}>
        { title }
      </Link>
    </>
  )
}
