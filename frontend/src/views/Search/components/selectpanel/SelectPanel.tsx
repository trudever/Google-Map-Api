import SelectBox from '../../../../components/forms/selectbox'
import FlexBox from '../../../../components/containers/flexbox/FlexBox'
import usState from './usState.json'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setSearch } from '../../../../slices/searchSlice'

const SelectPanel = () => {
  const [status, setStatus] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSearch({ status, keyword, country, state, city, category }))
  }, [status, keyword, country, state, city, category])

  return (
    <div className='flex flex-col gap-[10px] w-full md:w-[40%] xl:w-[25%] p-4 border-[1px] border-gray-100 shadow-md rounded-md'>
      <span>Status</span>
      <select
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        onChange={(e) => setStatus(e.currentTarget.value)}
      >
        <option value='OPERATIONAL'>OPERATIONAL</option>
        <option value='CLOSED_TEMPORARILY'>CLOSED_TEMPORARILY</option>
      </select>
      <span>Keywords</span>
      <input
        type='text'
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <span>Country</span>
      <select
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        onChange={(e) => setCountry(e.currentTarget.value)}
      >
        <option value='United States'>United States</option>
      </select>
      <span>State</span>
      <select
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        onChange={(e) => setState(e.currentTarget.value)}
      >
        <option value=''>All</option>
        {usState.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <span>City</span>
      <input
        type='text'
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <span>Categories</span>
      <select
        className='border-[1px] h-10 px-2 border-solid border-gray-400 rounded-md'
        onChange={(e) => setCategory(e.currentTarget.value)}
        disabled
      >
        <option value=''></option>
      </select>
    </div>
  )
}

export default SelectPanel
