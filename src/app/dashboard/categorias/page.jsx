import React from 'react'
import { TableCategory } from '@/components'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center mb-4'>
        <div className='text-5xl my-5'>Pagina Categorias</div>
      </div>

      <TableCategory />

    </>
  )
}

export default page