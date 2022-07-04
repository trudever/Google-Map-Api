import { GlobeAltIcon, UserIcon } from '@heroicons/react/solid';
import FlexBox from '../containers/flexbox/FlexBox';
import AddListButton from './components/addlistingbutton';
import DropDown from './components/dropdown';

const Header = () => {
  return (
    <header className='w-full lg:border-b-[1px] lg:border-b-gray-200 fixed top-0 z-10 bg-[url("/assets/mobile-header-background.webp")] bg-cover first-letter: lg:bg-none lg:bg-white shadow-lg lg:shadow-none'>
      <FlexBox addClass='w-full p-[40px_5%_70px_5%] lg:p-[12px_5%] justify-between items-center'>
        <FlexBox addClass='gap-[20px] lg:gap-0 items-center'>
          <img
            src='/assets/toggle.webp'
            alt='switch'
            className='cursor-pointer lg:hidden hover:shadow-md transition-all duration-150 w-[30px] h-[24px]'
          />
          <span className='text-[18px] md:text-[22px] lg:text-[32px] font-bold text-white lg:text-black'>
            IBAA Buddhist Directory
          </span>
        </FlexBox>

        <FlexBox addClass='items-center'>
          <DropDown addClass='hidden lg:block' toShow={'Home'} />
          <button className='items-center gap-2 hidden lg:flex'>
            <UserIcon className='w-5 h-5' opacity={0.5} />
            <span className='text-[12px] font-bold'>Sign In</span>
          </button>
          <DropDown
            addClass='hidden lg:block'
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
