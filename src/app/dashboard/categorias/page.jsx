import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='text-5xl my-5'>Pagina Categorias</div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-6">
          <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
            <thead class="text-left border-b border-gray-300">
              <th class="px-4 py-3">Firstname</th>
              <th class="px-4 py-3">Lastname</th>
              <th class="px-4 py-3">Age</th>
            </thead>
            <tr class="bg-gray-700 border-b border-gray-600">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">50</td>
            </tr>
            <tr class="bg-gray-700 border-b border-gray-600">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">50</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default page