import React from 'react'

import { TableProduct } from '@/components'
import { products } from '@/data'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center mb-4'>
        <div className='text-5xl my-5'>Pagina Productos</div>
      </div>

      <TableProduct data={products} />

    </>
  )
}

export default page