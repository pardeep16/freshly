import { useState } from 'react'
import Bakery from '../../assets/img/baked.png';
import Burger from '../../assets/img/burger.png';
import SeaFood from '../../assets/img/fish.png';
import Beverages from '../../assets/img/coffee.png';
import FastFood from '../../assets/img/fast.png';
import NonVeg from '../../assets/img/chicken.png';

import SectionLink from '../Links/SectionLink';

interface FoodCategoryItem {
    id:number;
    name:string;
    icon:any
}
const foodCategoryItems:FoodCategoryItem[]=[
    { id: 1, name: 'Bakery', icon: Bakery},
    { id: 2, name: 'Burger', icon: Burger },
    { id: 3, name: 'Beverage', icon: Beverages },
    { id: 4, name: 'Chicken', icon: NonVeg },
    { id: 5, name: 'Pizza', icon: FastFood },
    { id: 6, name: 'Seafood', icon: SeaFood },
]

const Categories = () => {
  const [categories,] = useState<FoodCategoryItem[]>(foodCategoryItems);
  return (
    <div className='mb-8'>
        <SectionLink label='Category' onClick={()=> {}}/>
        <div className='grid md:grid-cols-6 grid-cols-3 gap-4'>
            {
                categories?.map((category)=>(
                    <div key={category.id} className='bg-white rounded-lg p-4 flex flex-col items-center
                     justify-center cursor-pointer hover:shadow-md transition-shadow'>
                        <div className='test-3xl mb-2'><img className='h-8 w-8' src={category.icon}/></div>
                        <span className='text-sm'>{category.name}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories