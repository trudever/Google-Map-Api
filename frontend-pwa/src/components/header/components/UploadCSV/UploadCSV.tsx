import React, { useState, useRef } from 'react';
import Papa from 'papaparse';
import getAxios from 'helpers/wrappedAxios';
const axios = getAxios();

interface Props {
  name: string;
}
const UploadCSV: React.FC<Props> = ({ name }) => {
  const [file, setFile] = useState<any>('');
  const inputFile = useRef<any>(null);

  const handleCreateTemple = async (
    params: ReadonlyArray<string>,
    country: string
  ) => {
    try {
      await axios.post('/temple/addTemple', {
        name: params[1],
        site: params[3],
        phone: params[7],
        full_address: params[8],
        city: params[11],
        latitude: params[17],
        longitude: params[18],
        state: params[13],
        country: country,
        photo: params[32],
        business_status: params[39],
        location_link: params[53],
        email_1: params[59],
        email_2: params[67],
        email_3: params[75],
        facebook: params[86],
        twitter: params[95],
        youtube: params[97],
      });
    } catch (error) {}
  };

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split('.');
      const fileType = parts[parts.length - 1];
      console.log('fileType', fileType); //ex: zip, rar, jpg, svg etc.

      setFile(files[0]);
      Papa.parse(files[0], {
        complete: function (results: any) {
          for (let i = 1; i < results.data.length; i++) {
            if (results.data[i][1] !== '') {
              console.log(results.data[i]);
              handleCreateTemple(results.data[i], name);
            }
          }
        },
      });
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        ref={inputFile}
        onChange={handleFileUpload}
        type='file'
      />
      <div
        className='p-2 bg-blue-600 ml-2 rounded-md text-white active:scale-90'
        onClick={onButtonClick}
      >
        UploadCSV
      </div>
    </div>
  );
};

export default UploadCSV;
