import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import PropsType from './propsType';

const optionClass = 'p-8 border-gray-200';

const SelectBox = ({ list, placeholder }: PropsType) => {
  const [selected, setSelected] = useState('');

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1'>
        <Listbox.Button
          className={`relative w-full cursor-default rounded-lg ${
            selected ? 'bg-white text-balck' : 'bg-gray-100 text-gray-400'
          } py-3 pl-4 pr-10 text-left border-[1px] border-gray-200 shadow-sm sm:text-sm`}
        >
          <span className='block truncate font-semibold text-[12px]'>
            {selected ? selected : placeholder}
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <SelectorIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md focus:outline-none sm:text-sm z-10'>
            {list.map((optionValue, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={optionValue}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {optionValue}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectBox;
