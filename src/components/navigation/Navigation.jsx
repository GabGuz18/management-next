import Link from 'next/link'
import React from 'react'
import { Item } from '..'
import { IoBrowsersOutline, IoCartOutline } from 'react-icons/io5'

const menuItems = [
  {
    path: '/dashboard',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subTitle: 'Visualizacion inventario'
  },
  {
    path: '/ventas',
    icon: <IoCartOutline size={30} />,
    title: 'Ventas',
    subTitle: 'Crear nueva venta'
  },
]

export const Navigation = () => {
  return (
    <div id="menu" style={{ width: '300px' }} 
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex text-lg items-center md:text-2xl font-bold text-white">Cafe del centro</h1>
        <p className="text-slate-500 text-sm">Inventario y ventas</p>
      </div>
      <div id="nav" className="w-full px-1 py-10">
        {
          menuItems.map(({ path, icon, title, subTitle }, index) => {
            return (
              <Item title={title} subTitle={subTitle} path={path} icon={icon} key={title} />
            )
          })
        }
      </div>
    </div>
  )
}
