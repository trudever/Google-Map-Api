import PropsType from './Container.types';

const Container = ({ children, addClass }: PropsType) => {
  return <div className={`px-[5%] ${addClass}`}>{children}</div>;
};

export default Container;
