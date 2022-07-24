import PropsType from './propsType';

const FlexBox = ({ addClass, children }: PropsType) => {
  return <div className={`flex ${addClass ? addClass : ''}`}>{children}</div>;
};

export default FlexBox;
