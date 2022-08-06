import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../app/store'
import FlexBox from '../../../../components/containers/flexbox/FlexBox'
import { setLocation } from '../../../../slices/locationSlice'
import CardIcon from './CardIcon'

const Card = ({ index }: any) => {
	const [open, setOpen] = useState<boolean>(false)

	const _data = useSelector((state: RootState) => state.pagedata.data)
	const data = _data && _data[index]

	const dispatch = useDispatch()
	const handleClick = () => {
		setOpen(!open)
		dispatch(setLocation({ lat: data.latitude, lng: data.longitude }))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return !data ? (
		<></>
	) : (
		<div
			onClick={handleClick}
			className='cursor-pointer pb-4 border-[1px] shadow-md rounded-md overflow-hidden'
		>
			<img
				className='w-full h-[180px] object-cover'
				src={data.photo}
				draggable={false}
				loading='lazy'
				alt='Temp'
			/>
			<div className='px-3'>
				<FlexBox addClass='items-center gap-2 min-h-[10vw] lg:min-h-[5vw]'>
					<h2 className='py-3 font-bold text-lg'>{data.name}</h2>
					{data.verified && (
						<img
							src='/assets/card/verify_badge.webp'
							width='20'
							className='w-[20px] h-[20px]'
							alt='badge'
						/>
					)}
				</FlexBox>
				<FlexBox addClass='text-xs py-1 items-center gap-1'>
					<CardIcon type='location' />
					<a
						href={data.location_link}
						target='_blank'
						className='overflow-hidden whitespace-nowrap overflow-ellipsis'
						rel='noreferrer'
					>
						{data.full_address}
					</a>
				</FlexBox>
				<FlexBox addClass='text-xs py-1 items-center gap-1'>
					<CardIcon type='globe' />
					<a
						href={data.site}
						target='_blank'
						className='overflow-hidden whitespace-nowrap overflow-ellipsis'
						rel='noreferrer'
					>
						{data.site}
					</a>
				</FlexBox>
				{/* Dropdowned */}
				{open && (
					<div>
						<FlexBox addClass='py-1'>
							<CardIcon type='phone' />
							{data.phone || "Sorry we didn't find the number"}
						</FlexBox>

						<FlexBox addClass='py-1 items-start'>
							<CardIcon type='email' />
							<span className='card-email'>
								{data.email_1 || data.email_2 || data.email_3 || 'Non Exist'}
							</span>
						</FlexBox>

						<FlexBox addClass='justify-between py-1 px-4'>
							<FlexBox addClass='gap-3'>
								{data.youtube ? (
									<a href={data.youtube} target='_blank' rel='noreferrer'>
										<CardIcon type='socials/youtube' />
									</a>
								) : (
									<></>
								)}
								{data.twitter ? (
									<a href={data.twitter} target='_blank' rel='noreferrer'>
										<CardIcon type='socials/twitter' />
									</a>
								) : (
									<></>
								)}
								{data.facebook ? (
									<a href={data.facebook} target='_blank' rel='noreferrer'>
										<CardIcon type='socials/facebook' />
									</a>
								) : (
									<></>
								)}
							</FlexBox>
							<a href={data.goto} target='_blank' rel='noreferrer'>
								<CardIcon type='goTo' />
							</a>
						</FlexBox>
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
