import SelectBox from '../../../../components/forms/selectbox';
import FlexBox from '../../../../components/containers/flexbox/FlexBox';
import LabelInput from '../inputlabel';
import KeywordInput from './keyword/KeywordInput';
import GridBox from '../../../../components/containers/gridbox';

const SelectPanel = () => {
  return (
    <FlexBox addClass='flex-col gap-[10px] w-full md:w-[40%] xl:w-[25%] p-4 border-[1px] border-gray-100 shadow-md rounded-md'>
      <LabelInput label={'Status'}>
        <SelectBox list={['okay', 'okay1']} placeholder={'Any Status'} />
      </LabelInput>
      <LabelInput label={'Keywords'}>
        <KeywordInput addClass='mt-1' placeholder='Address, States...' />
      </LabelInput>
      <LabelInput label={'Country'}>
        <SelectBox list={['okay', 'okay1']} placeholder={'Any Countries'} />
      </LabelInput>
      <LabelInput label={'State'}>
        <SelectBox list={['okay', 'okay1']} placeholder={'Any States'} />
      </LabelInput>
      <GridBox addClass='grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[8px]'>
        <LabelInput label={'Cities'} addClass=''>
          <SelectBox list={['okay', 'okay1']} placeholder={'All Cities'} />
        </LabelInput>
        <LabelInput label={'Categories'} addClass=''>
          <SelectBox list={['okay', 'okay1']} placeholder={'All Categories'} />
        </LabelInput>
      </GridBox>
    </FlexBox>
  );
};

export default SelectPanel;
