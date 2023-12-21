"use client"

import React, { useState } from 'react'
import { Modal } from '..'

export const Table = () => {

	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="mx-16 flex items-center">
				<input type="text" className=" w-4/5 w rounded-lg border border-gray-400 p-2" placeholder="Search ..." />
				<button
					onClick={openModal}
					className="ml-2 rounded-lg w-1/5 p-2 bg-slate-800 text-white hover:bg-blue-600">
						Nueva categoria
				</button>
			</div>

			<div className="flex flex-col">
				<div className="sm:-mx-6 lg:-mx-6">
					<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
						<thead className="text-left border-b border-gray-300">
							<tr>
								<th className="px-4 py-3">No.</th>
								<th className="px-4 py-3">Categoria</th>
								<th className="px-4 py-3">Editar</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-gray-700 border-b border-gray-600">
								<td className="px-4 py-3">1</td>
								<td className="px-4 py-3">Cafe</td>
								<td className="px-4 py-3">
									s
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{
				isOpen
					? <Modal openModal={() => openModal()}/>
					: null
			}
		</>
	)
}
