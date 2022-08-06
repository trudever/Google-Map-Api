import React, { useState, useMemo } from 'react';
import UploadCSV from 'components/header/components/UploadCSV';
import Container from '../../components/containers';
import Select from 'react-select';
import countryList from 'react-select-country-list';

interface IfirstChildProps {
  name: string;
  updateName: (arg: string) => void;
}

const CountrySelector: React.FC<IfirstChildProps> = ({ name, updateName }) => {
  const [value, setValue] = useState<any>('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: string) => {
    setValue(value);
    updateName(value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        menuPlacement='auto'
        menuPosition='fixed'
      />
    </div>
  );
};

const ImportTemples = () => {
  const [countryName, setCountryName] = useState<string>('');
  const updateName = (name: any): void => {
    console.log(name.label);
    setCountryName(name.label);
  };

  return (
    <Container addClass='flex flex-col md:flex-row w-full gap-[20px] md:px-[4%] md:gap-[50px] lg:gap-[20px] mt-[20px] md:mt-[100px] lg:mt-[100px]'>
      <CountrySelector name={countryName} updateName={updateName} />
      <UploadCSV name={countryName} />
    </Container>
  );
};

export default ImportTemples;
