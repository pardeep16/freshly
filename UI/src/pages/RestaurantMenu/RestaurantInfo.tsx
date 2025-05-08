import React from 'react'
import { Restaurant } from '../Restaurants/type'
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const RestaurantInfo = (restaurant:Restaurant) => {
  return (
    <div className='bg-white rounded-lg p-6 mb-8'>
         <div className="flex flex-col md:flex-row gap-6 items-start">
         <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{restaurant.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Delivery Time</p>
                  <p className="font-medium">{restaurant.deliveryTime} min</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">{restaurant?.phone}</p>
                </div>
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default RestaurantInfo