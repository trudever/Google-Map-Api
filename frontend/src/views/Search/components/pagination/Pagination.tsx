import PageButton from './PageButton';
import FlexBox from '../../../../components/containers/flexbox/FlexBox';

const PaginationBar = () => {
  let array = [1, 2, 3, 4];

  return (
    <FlexBox addClass='w-full justify-center mt-28'>
      <FlexBox addClass='gap-4'>
        <PageButton type='PREV' value={'<'} />
        {array.map((one, index) => (
          <PageButton key={'PGButton' + index} value={one} />
        ))}
        <PageButton type='NEXT' value={'>'} />
      </FlexBox>
    </FlexBox>
  );
};

export default PaginationBar;
