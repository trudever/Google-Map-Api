interface PropsType {
  type: string;
}

const CardIcon = ({ type }: PropsType) => {
  return (
    <img
      draggable={false}
      src={'/assets/card/' + type + '.webp'}
      alt={type}
      width='30'
      className='w-[24px] lg:w-[28px]'
    />
  );
};

export default CardIcon;
