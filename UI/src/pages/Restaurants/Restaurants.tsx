import { useEffect, useState } from "react";
import { CuisineFilter, Restaurant } from "./type";
import { cuisineData, restaurantData, sortOptions } from "./constants";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [restaurants, ] = useState<Restaurant[]>(restaurantData);
  const [cuisineFilters, ] =
    useState<CuisineFilter[]>(cuisineData);
  const [activeCuisine,setActiveCuisine] = useState<CuisineFilter>(cuisineFilters[0]);
  const [activeSort,setActiveSort]= useState<string>('rating');
  const [filteredRestaurants,setFilteredRestaurants] = useState<Restaurant[]>(restaurants);

  useEffect(()=>{
    let results = [...restaurants];

    if(activeCuisine.id !== 1){
        results = results.filter(restaurant=> restaurant.cuisineType === activeCuisine.name);
    }

    //Sorting

    if(activeSort === 'rating'){
        results.sort((a,b)=> b?.rating - a?.rating);
    }
    else if(activeSort === 'deliveryTime'){
        results.sort((a, b) => a.deliveryTime - b.deliveryTime);
    }
    else if(activeSort === 'minOrder'){
        results.sort((a, b) => a.minOrder - b.minOrder);
    }
    setFilteredRestaurants(results);

  },[restaurants,activeCuisine,activeSort]);
  return (
    <div className="pb-8">
      {/* Banner */}
      <div className="rounded-lg mb-8 flex items-center justify-between overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Restaurant banner"
          className="h-48 w-full object-cover"
        />
        <div className="absolute p-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">
              Discover Restaurants
            </h2>
            <h3 className="text-xl font-bold text-white mb-4">
              Find Your Favorite Food
            </h3>
            <p className="text-white text-sm mb-4">
              Explore the best restaurants in your area with fast delivery and
              amazing food.
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Sort options */}
      <div className="mb-4">
        <div className="flex justify-between flex-col md:flex-row md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
                {
                    cuisineFilters.map(filter=>(
                        <button key={filter.id} className={`px-4 py-2 rounded-full text-sm
                         ${activeCuisine.id === filter.id ? 'bg-primary text-white' : 'bg-white'}`} onClick={()=> setActiveCuisine(filter)}>
                            {filter.name}
                        </button>
                    ))
                }
            </div>
            <div className="flex items-center gap-2">
                <AdjustmentsHorizontalIcon className='h-5 w-5 text-gray-500'/>
                <select className="bg-white border border-gray-200
                 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                 value={activeSort} onChange={(e)=> setActiveSort(e.target.value)}>
                    {
                        sortOptions?.map(option=>(
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>

      </div>

      {/* Resturants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            filteredRestaurants?.map(restaurant=> (
                <RestaurantCard {...restaurant} key={restaurant.id}/>
            ))
          }          
      </div>
      {filteredRestaurants.length === 0 && (
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No restaurants found</h3>
          <p className="text-gray-500">Try changing your filters or check back later for new restaurants.</p>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
