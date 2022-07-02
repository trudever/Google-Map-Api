import SelectBox from '../../../../components/forms/selectbox';
import FlexBox from '../../../../components/containers/flexbox/FlexBox';
import LabelInput from '../inputlabel';
import KeywordInput from './keyword/KeywordInput';
import GridBox from '../../../../components/containers/gridbox';

const SelectPanel = () => {
  return (
    <FlexBox addClass='flex-col gap-[10px] w-[25%] p-4 border-[1px] border-gray-100 shadow-md rounded-md'>
      <LabelInput label={'Status'}>
        <SelectBox list={['okay', 'okay1']} placeholder={'Any Status'} />
      </LabelInput>
      <LabelInput label={'Keywords'}>
        <KeywordInput placeholder='Address, States...' />
      </LabelInput>
      <GridBox addClass='grid-cols-2 gap-[4%]'>
        <LabelInput label={'Keywords'} addClass=''>
          <SelectBox
            list={['okay', 'okay1']}
            placeholder={'Address, Street, State...'}
          />
        </LabelInput>
        <LabelInput label={'Categories'} addClass=''>
          <SelectBox list={['okay', 'okay1']} placeholder={'All Categories'} />
        </LabelInput>
      </GridBox>
    </FlexBox>
  );
};

export default SelectPanel;
