"use client"

import React, { useEffect, useState } from 'react'
import { Modal } from '..'

export const TableCategory = () => {

	const [isOpen, setIsOpen] = useState(false)
	const [typeForm, setTypeForm] = useState('')
	const [categories, setCategories] = useState([])
	const [id, setId] = useState(null)

	const openModal = (type = 'crear', info) => {
		setIsOpen(!isOpen)
		setTypeForm(type)
		setId(data.filter(v => v.id === info)[0])
	}	

	const getCategories = async () => {
		fetch("http://127.0.0.1:8000/api/categories/")
			.then((response) => response.json())
			.then((result) => setCategories(result))
			.catch((error) => console.error(error));
	}

	useEffect(() => {
		getCategories()
	}, [])
	
	return (
		<>
			<div className="mx-16 flex items-center">
				<input type="text" className=" w-4/5 w rounded-lg border border-gray-400 p-2" placeholder="Search ..." />
				<button
					onClick={() => openModal('crear')}
					className="ml-2 rounded-lg w-1/5 p-2 bg-slate-800 text-white hover:bg-blue-600">
						Nueva Categoria
				</button>
			</div>

			<div className="flex flex-col">
				<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
					<thead className="text-left border-b border-gray-300">
						<tr>
							{
								JSON.stringify(categories)
							}
							<th className="px-4 py-3">Editar</th>
						</tr>
					</thead>
					<tbody>
						{
						categories.map(itm => {
							return (
								<tr key={itm.id} className="bg-gray-700 border-b border-gray-600">
									<td className="px-4 py-3">{itm.id}</td>
									<td className="px-4 py-3">{itm.categoria}</td>
									<td className="px-4 py-3" onClick={() => openModal('editar', itm.id)}>Editar</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>

			{
				isOpen
					? <Modal type={typeForm} id={id} openModal={() => openModal()}/>
					: null
			}
		</>
	)
}
