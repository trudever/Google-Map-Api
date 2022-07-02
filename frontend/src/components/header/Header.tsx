import { GlobeAltIcon, UserIcon } from '@heroicons/react/solid';
import FlexBox from '../containers/flexbox/FlexBox';
import AddListButton from './components/addlistingbutton';
import DropDown from './components/dropdown';

const Header = () => {
  return (
    <header className='w-full border-b-[1px] border-b-gray-200 sticky top-0 z-10 bg-white'>
      <FlexBox addClass='w-full py-3 justify-between items-center px-[5%]'>
        <span className='text-[32px] font-bold'>IBAA Buddhist Directory</span>
        <FlexBox addClass='items-center'>
          <DropDown toShow={'Home'} />
          <button className='flex items-center gap-2'>
            <UserIcon className='w-5 h-5' opacity={0.5} />
            <span className='text-[12px] font-bold'>Sign In</span>
          </button>
          <DropDown
            toShow={
              <GlobeAltIcon className='w-5 h-5' opacity={0.5} strokeWidth={1} />
            }
          />
          <AddListButton />
        </FlexBox>
      </FlexBox>
    </header>
  );
};

export default Header;
