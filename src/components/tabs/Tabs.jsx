import React from 'react'
import { Tab } from './Tab'

const menuTabs = [
  {
    path: '/dashboard/categorias',
    title: 'Categorias',
  },
  {
    path: '/dashboard/productos',
    title: 'Productos',
  },
]

export const Tabs = () => {
  return (
    <div className="bg-gray-900">
      <nav className="flex flex-col sm:flex-row">
        {
          menuTabs.map(item => {
            return (
              <Tab path={item.path} title={item.title} key={item.title} />
            )
          })
        }
      </nav>
    </div>
  )
}
