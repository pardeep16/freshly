import React, { useState } from 'react'
import SectionLink from '../Links/SectionLink'
import { FoodItem } from '../../types'
import { HeartIcon, PlusIcon } from '@heroicons/react/24/outline'

const foodItems :FoodItem[] = [
    { id: 1, name: 'Burger', price: 5.59,
         image: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
          rating: 3, discount: 15 },
    { id: 2, name: 'Double Patty Burger', price: 5.59, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvBSYpdrmjC6s63P5oWgTiU4gPl36dkdVfQ&s', rating: 5, discount: 15 },
    { id: 3, name: 'Cheese Burger', price: 5.59, image: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger.jpg', rating: 4, discount: 15 },
]

const PopularDish = () => {
    const [popularItems,setPopularItems] = useState<FoodItem[]>(foodItems);
    const handleDiskClick = (item:FoodItem)=>{

    }
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={`text-${i <= rating ?
                 'yellow-400' : 'gray-300'}`}>★</span>
          );
        }
        return stars;
      };

  return (
    <div className='mb-4'>
        <SectionLink label='Popular Dishes' onClick={()=> {}}/>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
        {
            popularItems?.map((item)=>(
                <div key={item.id} className='bg-white rounded-lg p-4 relative cursor-pointer
                hover:shadow-lg transition-all duration-300' onClick={()=> handleDiskClick(item)}>
                    {
                        item.discount && (
                            <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded'>
                                {item.discount}% off
                            </span>
                        )
                    }
                    <button className='absolute top-2 right-2 text-gray-400 hover:text-red-500'
                    onClick={(e)=>{
                        e.stopPropagation();
                        // Add item to favourites
                    }}>
                    {item.favorite ? <HeartIcon className='h-6 w-6 text-red-500'/>:<HeartIcon className='h-6 w-6'/>}
                    </button>
                    <div className='flex justify-center mb-4'>
                        <img src={item.image} alt={item.name} className='md:h-32 md:w-32 h-28 w-28 object-cover rounded-lg transition-transform duration-300 hover:scale-105'/>
                    </div>
                    <div className='flex mb-2'>
                        {renderStars(item.rating)}
                    </div>
                    <h3 className='font-medium mb-2'>{item.name}</h3>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-primary'>${item.price?.toFixed(2)}</span>
                        <button className='bg-primary text-white p-2 rounded-md hover:bg-amber-600 transition-colors'>
                            <PlusIcon className='h-5 w-5'/>
                        </button>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default PopularDish