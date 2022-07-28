import getAxios from 'helpers/wrappedAxios'
import React, { useState, useEffect } from 'react'
import './TableComponent.css'

const axios = getAxios()
const AddPlace = () => {
	const [tableData, setTableData] = useState<Array<any>>([])

	useEffect(() => {
		loadTableData()
	}, [])

	const loadTableData = async () => {
		try {
			const result = await axios.get('/temple/findAll')
			setTableData(result.data)
		} catch (error: any) {
			console.log(error)
		}
	}

	return (
		<div className='mt-[80px]'>
			<button
				className='w-24 bg-blue-600 text-white rounded-md py-2 m-3 active:scale-90'
				onClick={() => window.open('/add-temple')}
			>
				Add
			</button>
			<table>
				<thead>
					<tr>
						<th className='no'>No</th>
						<th className='name'>Name</th>
						<th className='address'>Full Address</th>
						<th className='phone'>Phone</th>
						<th className='email'>Email</th>
						<th className='location'>Location Link</th>
						<th className='photo'>Photo</th>
						<th className='status'>Business Status</th>
						<th className='site'>Site</th>
						{/* <th className='youtube'>Youtube</th>
						<th className='twitter'>Twitter</th>
						<th className='facebook'>Facebook</th> */}
						<th className='latlng'>Lat, Lng</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, index) => (
						<tr key={`place ${index}`}>
							<td>{index + 1}</td>
							<td className='name'>{row.name}</td>
							<td>{row.full_address}</td>
							<td>{row.phone}</td>
							<td>{row.email_1 || row.email_2 || row.email_3}</td>
							<td>
								{row.location_link &&
									row.location_link
										.replace('http://', '')
										.replace('https://', '')
										.slice(0, 50)}
							</td>
							<td>
								{row.photo &&
									row.photo
										.replace('https://www.', '')
										.replace('https://', '')
										.replace('http://', '')
										.slice(0, 40)}
							</td>
							<td>{row.business_status}</td>
							<td>
								{row.site &&
									row.site
										.replace('http://', '')
										.replace('https://', '')
										.slice(0, 30)}
							</td>
							{/* <td>{row.youtube && row.youtube.replace('https://www.', '')}</td>
							<td>
								{row.twitter &&
									row.twitter
										.replace('https://www.', '')
										.replace('https://', '')
										.replace('http://', '')}
							</td>
							<td>
								{row.facebook && row.facebook.replace('https://www.', '')}
							</td> */}
							<td>{`${row.latitude}, ${row.longitude}`}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default AddPlace
