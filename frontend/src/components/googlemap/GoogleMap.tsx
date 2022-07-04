import { UserCircleIcon } from '@heroicons/react/solid';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 60.192059,
    lng: 24.945831,
  },
  zoom: 11,
};

const GoogleMap = () => {
  return (
    <div className='relative w-full h-[300px] mt-[120px] lg:mt-[70px]'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDHC-oX_KAPJ__uxY28HsV6j_ZLeuAuFs0',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
      <div>
        <UserCircleIcon className='cursor-pointer absolute bottom-[22px] right-16 w-10 h-10 hover:scale-110 transition-all duration-200' />
      </div>
    </div>
  );
};

export default GoogleMap;
