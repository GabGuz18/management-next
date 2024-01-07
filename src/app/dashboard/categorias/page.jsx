import React from 'react'
import { TableCategorie } from '@/components'
import { categories } from '@/data'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center mb-4'>
        <div className='text-5xl my-5'>Pagina Categorias</div>
      </div>

      <TableCategorie data={categories} />

    </>
  )
}

export default page