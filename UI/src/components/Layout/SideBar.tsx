import { BanknotesIcon, ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
interface SideBarProps {
  isSideBarOpen?:boolean;
  setIsSiderBar:any;
}
const SideBar = ({isSideBarOpen,setIsSiderBar}:SideBarProps) => {

  return (
    <div className={`h-screen bg-white py-6 px-4 flex
     flex-col justify-between fixed md:static z-40 transition-all
      duration-300 ease-in-out md:w-64 w-[60%]
       ${isSideBarOpen ? 'left-0' : '-left-64'} md:left-0 shadow-sm`}>

      <button 
          onClick={()=> setIsSiderBar(false)}
          className="absolute top-4 right-4 md:hidden"
          aria-label="Close sidebar"
        >
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button> 

      <div>
        {/* Logo */}
        <div className='mb-10 px-2'>
            <h1 className='text-2xl font-bold'>Freshly <span className='text-primary text-3xl'>.</span></h1>
        </div>
        <nav className='space-y-6'>
          <Link to="/" className="flex mb-8 items-center gap-3 text-gray-500 hover:text-primary">
            <HomeIcon className="h-6 w-6" />
            <span>Dashboard</span>
          </Link>
          <Link to="/restaurants" className="flex mb-8  items-center gap-3 text-gray-500 hover:text-primary">
            <BanknotesIcon className="h-6 w-6" />
            <span>Restaurants</span>
          </Link>
          <Link to="/messages" className="flex mb-8  items-center gap-3 text-gray-500 hover:text-primary">
            <ChatBubbleLeftIcon className="h-6 w-6" />
            <span>Message</span>
          </Link>
          <Link to="/history" className="flex mb-8  items-center gap-3 text-gray-500 hover:text-primary">
            <ClockIcon className="h-6 w-6" />
            <span>Order History</span>
          </Link>
          
          <Link to="/bills" className="flex mb-8  items-center gap-3 text-gray-500 hover:text-primary">
            <BanknotesIcon className="h-6 w-6" />
            <span>Bills</span>
          </Link>
          <Link to="/settings" className="flex mb-8  items-center gap-3 text-gray-500 hover:text-primary">
          <Cog6ToothIcon className="h-6 w-6" />
          <span>Setting</span>
        </Link>
        </nav>
      </div>

      <div>
        
        
        <div className="mt-6 absolute bottom-10 w-54 bg-amber-500 p-4 rounded-lg">
          <h3 className="text-sm text-white font-semibold">Upgrade your Account to Get Free Voucher</h3>
          <button className="mt-3 bg-white text-sm py-2 px-4 rounded-md hover:bg-amber-100">Upgrade</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar