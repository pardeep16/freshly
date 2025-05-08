import React from 'react'
import SearchBar from '../../SearchBar/SearchBar';

const userName = 'Pradeep';
const Header = () => {
  return (
    <header className='flex justify-between md:items-center py-4 md:px-6 md:flex-row flex-col gap-4 md:gap-0'>
        <h2 className="text-xl font-bold">Hello, {userName}</h2>
        <div className='flex items-center gap-6'>
            <SearchBar />
        </div>
    </header>
  )
}

export default Header