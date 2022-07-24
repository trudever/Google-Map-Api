import { FolderIcon, HomeIcon } from '@heroicons/react/solid';
import FlexBox from '../containers/flexbox/FlexBox';

const Footer = () => {
  return (
    <footer className='lg:hidden fixed bottom-0 h-20 w-full bg-black bg-opacity-[95%]'>
      <FlexBox addClass='w-full h-full items-center justify-between px-[20%]'>
        <HomeIcon className='w-10 h-10 text-white' />
        <FolderIcon className='w-10 h-10 text-white' />
      </FlexBox>
    </footer>
  );
};

export default Footer;
