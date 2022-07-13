import { UserCircleIcon } from "@heroicons/react/solid"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import GoogleMapReact from "google-map-react"
import Marker from './Marker';

const GoogleMap = () => {
  const location = useSelector((state: RootState) => state.location)

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: location.location,
      map,
      title: "Hello World!",
    })
  }

  return (
    <div className="relative w-full h-[300px] mt-[75px] md:mt-[60px] lg:mt-[70px]">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBHX0PQglCS_aCO5v2wgMf9ByGDaNSxHHI",
        }}
        center={location.location}
        zoom={8}
      >
        <Marker
            lat={location.location.lat}
            lng={location.location.lng}
            name="My Marker"
            color="red"
          />
      </GoogleMapReact>
      <div>
        <UserCircleIcon className="cursor-pointer absolute bottom-[22px] right-16 w-10 h-10 hover:scale-110 transition-all duration-200" />
      </div>
    </div>
  )
}

export default GoogleMap
