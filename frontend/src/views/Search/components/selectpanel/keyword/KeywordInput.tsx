import PropsType from './propsType';

const KeywordInput = ({ placeholder, addClass }: PropsType) => {
  return (
    <input
      className={`${
        addClass ? addClass : ''
      } block w-full text-sm text-black p-[12px_16px] border-[1px] border-gray-200 shadow-sm rounded-md`}
      placeholder={placeholder}
    />
  );
};

export default KeywordInput;
