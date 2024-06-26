"use client"

import React, { useState } from 'react'
import { ModalProduct } from '..'

export const TableProduct = ({ data }) => {

	const [isOpen, setIsOpen] = useState(false)
	const [typeForm, setTypeForm] = useState('')
	const [id, setId] = useState(null)

	const openModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="mx-16 flex items-center">
				<input type="text" className=" w-4/5 w rounded-lg border border-gray-400 p-2" placeholder="Search ..." />
				<button
					onClick={() => openModal('crear')}
					className="ml-2 rounded-lg w-1/5 p-2 bg-slate-800 text-white hover:bg-blue-600">
						Nuevo Producto
				</button>
			</div>

			<div className="flex flex-col">
				<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
					<thead className="text-left border-b border-gray-300">
						<tr>
							{
								Object.keys(data[0]).map(key => {
									return (
											<th key={key} className="px-4 py-3">{key}</th>
											)
										})
									}
							<th className="px-4 py-3">Editar</th>
						</tr>
					</thead>
					<tbody>
						{
						data.map(itm => {
							return (
								<tr key={itm.id} className="bg-gray-700 border-b border-gray-600">
									<td className="px-4 py-3">{itm.id}</td>
									<td className="px-4 py-3">{itm.producto}</td>
									<td className="px-4 py-3">{itm.cantidad}</td>
									<td className="px-4 py-3">{itm.price}</td>
									<td className="px-4 py-3">{itm.categoria}</td>
									<td className="px-4 py-3">Editar</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>

			{
				isOpen
					? <ModalProduct openModal={() => openModal()}/>
					: null
			}
		</>
	)
}
