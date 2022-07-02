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
    <div className='w-full h-[300px]'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDHC-oX_KAPJ__uxY28HsV6j_ZLeuAuFs0',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
