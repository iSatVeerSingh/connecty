'use client';

import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="bg-light-gray px-2 py-2 relative rounded-full flex-grow">
      <FiSearch size="20" className='absolute top-1/2 -translate-y-1/2 left-2 text-navi-gray'/>
      <input type="search" className="bg-transparent border-none outline-none pl-6" placeholder="Search" />
    </div>
  )
};

export default SearchBar;