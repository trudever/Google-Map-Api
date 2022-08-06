import React, { useRef, useState } from 'react';
import Papa from 'papaparse';
import getAxios from 'helpers/wrappedAxios';
import styled from 'styled-components';
import uploadIcon from './upload.svg';
const axios = getAxios();

interface Props {
  name: string;
}
interface StyledProps {
  percentage: number;
}
const WidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: relative;

  img {
    width: 50px;
  }

  input {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .right {
    margin-left: 50px;
    height: 100%;
  }
`;
const ProgressBar = styled.div<StyledProps>`
  width: 500px;
  height: 10px;
  border-radius: 10px;
  background: #e8eef4;
  margin-top: 20px;
  position: relative;

  div {
    width: ${({ percentage }) => `${percentage}%`};
    transition: width 1s;
    height: 100%;
    background: #f17d7d;
  }
`;
const Count = styled.p`
  font-size: 20px;
  margin-left: 50px;
`;
const UploadCSV: React.FC<Props> = ({ name }) => {
  const inputFile = useRef<any>(null);
  const [percentage, setPercentage] = useState<number>(0);

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

  const onButtonClick = () => {
    if (name === '') {
      alert('Select Country!');
      return;
    }
    inputFile.current.click();
  };
  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split('.');
      const fileType = parts[parts.length - 1];
      console.log('fileType', fileType); //ex: zip, rar, jpg, svg etc.

      Papa.parse(files[0], {
        complete: async function (results: any) {
          for (let i = 1; i < results.data.length; i++) {
            if (results.data[i][1] !== '') {
              console.log(results.data[i]);
              setPercentage(Math.ceil((i * 100) / (results.data.length - 1)));
              await handleCreateTemple(results.data[i], name);
            }
          }
          alert('Finished');
          setPercentage(0);
        },
      });
    }
  };

  return (
    <WidgetWrapper>
      {/*
      <div
        className='p-2 bg-blue-600 ml-2 rounded-md text-white active:scale-90'
        onClick={onButtonClick}
      ></div>
        UploadCSV
      </div> */}

      <div className='left'>
        <img src={uploadIcon} width='50px' alt='file' onClick={onButtonClick} />
      </div>
      <div className='right'>
        <ProgressBar percentage={percentage} className='progress_bar'>
          <div />
        </ProgressBar>
      </div>
      <Count>{percentage}%</Count>
      <input
        style={{ display: 'none' }}
        ref={inputFile}
        type='file'
        onChange={handleFileUpload}
      />
    </WidgetWrapper>
  );
};

export default UploadCSV;
