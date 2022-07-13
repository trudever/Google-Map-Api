import { UserCircleIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { useState, useEffect } from 'react'

const GoogleMap = () => {
  const location = useSelector((state: RootState) => state.location)
  const [isShown, setIsShown] = useState<boolean>(false)
  const [currentLocation, setCurrentLocation] = useState<any>({
    lat: 0,
    lng: 0,
  })
  // const renderMarkers = (map: any, maps: any) => {
  //   let marker = new maps.Marker({
  //     position: location.location,
  //     map,
  //     title: 'Hello World!',
  //   })
  // }

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
    console.log(currentLocation)
  }, [])

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
        />
        {isShown && (
          <Marker
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            name='My Location'
            color='blue'
          />
        )}
      </GoogleMapReact>
      <div onClick={() => setIsShown(!isShown)}>
        <UserCircleIcon className='cursor-pointer absolute bottom-[22px] right-16 w-10 h-10 hover:scale-110 transition-all duration-200' />
      </div>
    </div>
  )
}

export default GoogleMap
