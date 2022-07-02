import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import getAxios from '../../../../helpers/wrappedAxios';
import { PropsType } from './propsType';

const axios = getAxios();

const Card = ({ index }: any) => {
  const data = useSelector((state: RootState) => state.pagedata.data);

  useEffect(() => {
    console.log(data[index]);
  });
  // const [imgURL, setImgURL] = useState<string>(' ');

  // const getImagesFromServer = async (size: number, reference: string) => {
  //   let url = await axios('/getplaceimages/' + size + '/' + reference);
  //   console.log(url);
  //   setImgURL(url.data.source);
  // };

  // useEffect(() => {
  //   console.log(index, data);
  //   if (data) {
  //     // const photoReference = data.result.photos[0].photo_reference;
  //     // getImagesFromServer(400, photoReference);
  //   }
  // });

  return (
    <div className='pb-4 border-[1px] shadow-md rounded-md overflow-hidden'>
      <img
        className='w-full h-[180px]'
        src={
          data[index]
            ? 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' +
              data[index].result.photos[0].photo_reference +
              '&key=AIzaSyCg6O22nD-Tpam6DP4aZG-Y7a51xDGvMQg'
            : '/assets/welcome.png'
        }
        draggable={false}
        loading='lazy'
        alt='Temp'
      />
      <div className='px-3'>
        <h2 className='py-3 font-bold text-lg'>Higashi Honganji Temple</h2>
        <p className='text-xs py-2'>
          {!data[index]
            ? 'Higashi Honganji Temple'
            : data[index].result.formatted_address}
        </p>
        <p className='text-xs py-1'>
          <a
            href={
              !data[index]
                ? 'Higashi Honganji Temple'
                : data[index].result.website
            }
          >
            {!data[index]
              ? 'Higashi Honganji Temple'
              : data[index].result.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
