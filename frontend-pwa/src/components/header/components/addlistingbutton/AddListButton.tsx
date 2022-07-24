import FlexBox from '../../../containers/flexbox/FlexBox'

const AddListButton = () => {
  const handleClick = () => {
    window.open('https://form.jotform.com/221731520681449', '_blank')
  }

  return (
    <button
      className='group bg-[rgb(0,101,224)] group-hover:bg-[rgb(89,156,238)] transition-all duration-150 p-[8px_20px] rounded-[4px] block ml-2'
      onClick={handleClick}
    >
      <FlexBox addClass='items-center gap-4'>
        <FlexBox addClass='justify-center items-center text-white text-[16px] w-[28px] h-[28px] bg-[#ffffff30] rounded-full font-bold'>
          +
        </FlexBox>
        <span className='text-[12px] text-white font-bold'>Add Listing</span>
      </FlexBox>
    </button>
  )
}

export default AddListButton
