import React, { useState, useEffect } from 'react'
import './Add.css'
import getAxios from 'helpers/wrappedAxios'
const axios = getAxios()

const Add = () => {
	const [name, setName] = useState<string>('')
	const [business_status, setBusiness_status] = useState<string>('OPERATIONAL')
	const [photo, setPhoto] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [full_address, setFull_address] = useState<string>('')
	const [state, setState] = useState<string>('')
	const [city, setCity] = useState<string>('')
	const [location_link, setLocation_link] = useState<string>('')
	const [site, setSite] = useState<string>('')
	const [email_1, setEmail_1] = useState<string>('')
	const [youtube, setYoutube] = useState<string>('')
	const [twitter, setTwitter] = useState<string>('')
	const [facebook, setFacebook] = useState<string>('')
	const [latitude, setLatitude] = useState<string>('')
	const [longitude, setLongitude] = useState<string>('')

	useEffect(() => {
		const ss = document.getElementById('address') as HTMLInputElement

		const autocomplete = new (window as any).google.maps.places.Autocomplete(
			ss,
			{
				types: ['address'],
			}
		)
		autocomplete.setComponentRestrictions({
			country: ['us'],
		})
		autocomplete.addListener('place_changed', function (this: any) {
			const place = this.getPlace()
			let tempAddress = place.formatted_address
			const value = tempAddress.split(', ')
			const count = value.length
			let tempCity = value[count - 3]
			let tempState = value[count - 2].slice(0, 2)
			setCity(tempCity)
			setState(tempState)
			setFull_address(tempAddress)
		})
	}, []) //eslint-disable-line

	const handleCreateTemple = async () => {
		try {
			await axios.post('/temple/addTemple', {
				name,
				business_status,
				photo,
				phone,
				location_link,
				full_address,
				city,
				state,
				site,
				email_1,
				youtube,
				twitter,
				facebook,
				latitude,
				longitude,
			})
      alert('Successfully created a temple')
		} catch (error) {}
	}

	return (
		<div className='flex justify-center'>
			<div className='mt-[78px] w-[600px] flex flex-col border-solid border-2 p-2 rounded-md add-place-form gap-2'>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Temple Name'
					defaultValue={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input type='text' id='address' name='address' />
				<input
					type='text'
					id='site'
					name='site'
					placeholder='site'
					defaultValue={site}
					onChange={(e) => setSite(e.target.value)}
				/>
				<input
					type='text'
					id='photo'
					name='photo'
					placeholder='Photo'
					defaultValue={photo}
					onChange={(e) => setPhoto(e.target.value)}
				/>
				<input
					type='text'
					id='phone'
					name='phone'
					placeholder='PhoneNumber'
					defaultValue={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input
					type='text'
					id='location_link'
					name='location_link'
					placeholder='Location Link'
					defaultValue={location_link}
					onChange={(e) => setLocation_link(e.target.value)}
				/>
				<select
					name='business_status'
					id='business_status'
					onChange={(e) => setBusiness_status(e.target.value)}
				>
					<option value='OPERATIONAL'>OPERATIONAL</option>
					<option value='CLOSED_PERMANENTLY'>CLOSED_PERMANENTLY</option>
				</select>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='Email'
					defaultValue={email_1}
					onChange={(e) => setEmail_1(e.target.value)}
				/>
				<input
					type='text'
					name='youtube'
					id='youtube'
					placeholder='youtube'
					defaultValue={youtube}
					onChange={(e) => setYoutube(e.target.value)}
				/>
				<input
					type='text'
					name='twitter'
					id='twitter'
					placeholder='twitter'
					defaultValue={twitter}
					onChange={(e) => setTwitter(e.target.value)}
				/>
				<input
					type='text'
					name='facebook'
					id='facebook'
					placeholder='facebook'
					defaultValue={facebook}
					onChange={(e) => setFacebook(e.target.value)}
				/>
				<input
					type='text'
					name='latitude'
					id='latitude'
					placeholder='latitude'
					defaultValue={latitude}
					onChange={(e) => setLatitude(e.target.value)}
				/>
				<input
					type='text'
					name='longitude'
					id='longitude'
					placeholder='longitude'
					defaultValue={longitude}
					onChange={(e) => setLongitude(e.target.value)}
				/>
				<button
					type='submit'
					onClick={handleCreateTemple}
					className='ml-auto px-4 py-1 bg-blue-500 font-medium text-white active:scale-90 rounded-md'
				>
					Create
				</button>
			</div>
		</div>
	)
}

export default Add
