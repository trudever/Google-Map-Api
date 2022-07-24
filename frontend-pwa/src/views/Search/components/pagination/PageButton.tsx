import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import FlexBox from '../../../../components/containers/flexbox/FlexBox';
import { gotoIndex, moveIndex } from '../../../../slices/pageSlice';

interface NumberProps {
  value: number | string;
  type?: 'NEXT' | 'PREV';
}

const PageButton = ({ value, type }: NumberProps) => {
  const pageIndex = useSelector((state: RootState) => state.pagedata.index);
  const dispatch = useDispatch();

  const clickHandler = (_index: number | string) => {
    if (typeof _index === 'string') {
      if (!type) return;
      dispatch(moveIndex(type));
      return;
    }
    if (_index !== pageIndex) {
      dispatch(gotoIndex(_index));
    }
  };

  return (
    <div onClick={() => clickHandler(value)}>
      <FlexBox
        addClass={`cursor-pointer w-12 h-12 justify-center items-center hover:text-white hover:bg-[rgb(0,114,251)] transition-all duration-200 ${
          value === pageIndex
            ? 'bg-[rgb(0,114,251)] text-white'
            : 'text-black border-[1px] border-gray-300'
        }`}
      >
        {value}
      </FlexBox>
    </div>
  );
};

export default PageButton;
