"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Item = ({title, subTitle, path, icon}) => {

  const currentPath = usePathname()
  console.log(currentPath)

  return (
    <Link href={path} className={`my-2 w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${currentPath.includes(path) && 'bg-blue-800'} hover:bg-white/5 transition ease-linear duration-150 rounded-md`}>
      <div>
        { icon }
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{ title }</span>
        <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
      </div>
    </Link>
  )
}
