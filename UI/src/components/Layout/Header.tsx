import React from 'react'
import SearchBar from '../../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const userName = 'Pradeep';
const Header = () => {
  return (
    <header className='flex justify-between md:items-center py-4 md:px-6 md:flex-row flex-col gap-4 md:gap-0'>
        <div className='flex justify-between items-center'>
        <h2 className="text-xl font-bold">Hello, {userName}</h2>
        <Link className='bg-primary w-[120px] h-[42px] text-center
         pt-2 text-white md:hidden' to="/cart" >View Cart</Link>
        </div>
        <div className='flex items-center gap-6'>
            <SearchBar />
        </div>
        
    </header>
  )
}

export default Header