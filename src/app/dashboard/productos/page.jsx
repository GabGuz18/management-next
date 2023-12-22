import { Table } from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center mb-4'>
        <div className='text-5xl my-5'>Pagina Productos</div>
      </div>

      <Table tipo='Producto' />

    </>
  )
}

export default page