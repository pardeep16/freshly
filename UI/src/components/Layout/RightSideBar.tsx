import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Address from '../Address/Address'
import Cart from '../Cart/Cart'

const RightSideBar = () => {
  return (
    <div className='mt-4 p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-wrap gap-2'>
          <BellIcon className="h-5 w-5"/>
          <Cog6ToothIcon className="h-5 w-5"/>
        </div>
        <div>
          <img src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' alt='profile' className='bg-gray-400 rounded-lg w-[48px] h-[48px]'/>
        </div>
      </div>
      <Address />
      <div className="flex gap-2 mt-4">
          <button className="flex-1 border border-gray-200 rounded-md py-2 text-sm">Add Details</button>
          <button className="flex-1 border border-gray-200 rounded-md py-2 text-sm">Add Note</button>
      </div>
      <Cart />
    </div>
  )
}

export default RightSideBar