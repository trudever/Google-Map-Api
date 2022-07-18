import { UserCircleIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { useState, useEffect } from 'react'
import getAxios from '../../helpers/wrappedAxios'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setCurrent } from '../../slices/currentSlice'

const axiosA = getAxios()

const GoogleMap = () => {
  const location = useSelector((state: RootState) => state.location)
  const [isShown, setIsShown] = useState<boolean>(false)
  const [nearTemple, setNearTemple] = useState<any>()
  const [countryName, setCountryName] = useState<string>('')
  const [currentLocation, setCurrentLocation] = useState<any>({
    lat: 0,
    lng: 0,
  })
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    } else {
      console.log('Geolocation is not supported')
    }
    const getCountryName = async () => {
      const repsonse = await axios.get('http://ip-api.com/json')
      setCountryName(repsonse.data.country)
    }
    getCountryName()
    console.log(countryName)
    setCurrent({
      countryName: countryName,
      lat: 0,
      lng: 0,
    })
  }, [])
  const dispatch = useDispatch()
  useEffect(() => {
    const getNearTemple = async () => {
      try {
        const result = await axiosA(
          '/getNearTemple/' + currentLocation.lat + '/' + currentLocation.lng
        )
        if (result.data) {
          setNearTemple(result.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (currentLocation.lat === 0 && currentLocation.lng === 0) return
    getNearTemple()
  }, [currentLocation])

  const handleClick = () => {
    if (countryName === 'United States') setIsShown(!isShown)
    if (!isShown) {
      dispatch(
        setCurrent({
          countryName: countryName,
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        })
      )
    } else {
      dispatch(
        setCurrent({
          countryName: countryName,
          lat: 0,
          lng: 0,
        })
      )
    }
  }

  return (
    <div className='relative w-full h-[300px] mt-[75px] md:mt-[60px] lg:mt-[70px]'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBHX0PQglCS_aCO5v2wgMf9ByGDaNSxHHI',
        }}
        center={isShown ? currentLocation : location.location}
        zoom={8}
      >
        <Marker
          lat={location.location.lat}
          lng={location.location.lng}
          name='My Marker'
          color='red'
          zIndex='100'
        />
        {isShown && (
          <Marker
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            name='My Location'
            color='blue'
            zIndex='200'
          />
          //   {nearTemple && nearTemple.map((temple: any, index: number) => (
          //     <Marker
          //       key={index}
          //       lat={temple.lat}
          //       lng={temple.lng}
          //       name='Temple'
          //       color='yellow'
          //     />
          //   ))}
        )}
        {isShown &&
          nearTemple.map((temple: any, index: number) => (
            <Marker
              key={index}
              lat={temple.lat}
              lng={temple.lng}
              name='Temple'
              color='yellow'
              zIndex={10}
            />
          ))}
      </GoogleMapReact>
      <div onClick={handleClick}>
        <UserCircleIcon
          className={`cursor-pointer absolute bottom-[22px] right-16 w-10 h-10 hover:scale-110 transition-all duration-200 ${
            isShown && 'fill-yellow-400'
          }`}
        />
      </div>
    </div>
  )
}

export default GoogleMap
