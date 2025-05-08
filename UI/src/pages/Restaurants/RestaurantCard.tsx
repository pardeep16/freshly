import React from 'react'
import { Restaurant } from './type'
import { Link } from 'react-router-dom'
import { ClockIcon, HeartIcon } from '@heroicons/react/24/outline'
import Rating from '../../components/common/Rating'

const RestuarantCard = ({id,image,name,favorite,cuisineType,priceRange,rating,ratingCount,deliveryTime,distance,minOrder}:Restaurant) => {
  return (
    <Link to={`/restaurants/${id}`} key={id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
        <div className='relative h-48'>
            <img src={image} alt={name} className='w-full h-full object-cover'/>
            <button className='absolute top-3 right-3 text-white hover:text-red-500 transition-colors'>
                {favorite ? <HeartIcon className="h-6 w-6 text-red-500"/>:  <HeartIcon className="h-6 w-6" />}
            </button>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
                <h3 className='text-white text-lg font-bold'>{name}</h3>
                <p className='text-white text-sm'> {cuisineType} • {priceRange}</p>
            </div>
        </div>
        <div className='p-4'>
            <div className='flex items-center gap-1 mb-2'>
                <div className='flex'>
                    <Rating rating={rating}/>
                </div>
                <span className='text-sm text-gray-600'>{rating} ({ratingCount})</span>
            </div>
            <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-1 text-sm text-gray-600'>
                    <ClockIcon className="h-4 w-4"/>
                    <span>{deliveryTime} min</span>
                </div>
                <div className='text-sm text-gray-600'>
                    {distance} km away
                </div>
            </div>
            <div className='text-sm text-gray-600'>
                Min. order: {minOrder}$
            </div>
        </div>
    </Link>
  )
}

export default RestuarantCard