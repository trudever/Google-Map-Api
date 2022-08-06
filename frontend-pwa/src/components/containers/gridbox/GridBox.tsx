import PropsType from './propsType';

const GridBox = ({ addClass, children }: PropsType) => {
  return <div className={`grid ${addClass ? addClass : ''}`}>{children}</div>;
};

export default GridBox;
