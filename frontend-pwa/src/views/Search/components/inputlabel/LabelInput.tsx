import PropsType from './propsType';

const LabelInput = ({ label, children, addClass }: PropsType) => {
  return (
    <div className={`${addClass ? addClass : ''}`}>
      <label className='text-gray-500 font-bold text-sm'>{label}</label>
      {children}
    </div>
  );
};

export default LabelInput;
