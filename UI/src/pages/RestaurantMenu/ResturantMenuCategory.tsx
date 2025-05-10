import { MenuCategory } from "./RestaurantMenu";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/outline";
import Rating from "../../components/common/Rating";
import { useAppDispatch } from "../../store/hooks";
import { addItem } from "../../store/feature/cart";

interface ResturantMenuCategory extends MenuCategory{
    restaurantId:string;
    restaurantName:string
}

const ResturantMenuCategory = (category: ResturantMenuCategory) => {
  const dispatch = useAppDispatch();


  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{category.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.items?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 relative cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            {item.discount && (
              <span
                className="absolute top-2 left-2 bg-red-500 text-white
                  text-xs px-2 py-1 rounded"
              >
                {item.discount}% Off
              </span>
            )}
            <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    // Handle favorite toggle logic here
                  }}
                >
                  {item.favorite ? <HeartIcon className="h-6 w-6 text-red-500" /> : <HeartIcon className="h-6 w-6" />}
            </button>
            <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-32 object-cover rounded-lg transition-transform
                     duration-300 hover:scale-105"
                  />
            </div>
            <div className="flex justify-center mb-2">
                <Rating rating={item.rating}/>
            </div>
            <h3 className="text-center font-medium mb-1">{item.name}</h3>
            <p className="text-gray-500 text-sm text-center mb-2 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                  <button
                    className="bg-primary text-white p-2 rounded-md hover:bg-amber-600 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      dispatch(addItem({
                        item:item as any,
                        restaurantId: category.restaurantId,
                        restaurantName: category.restaurantName,
                        
                      })) 
                    }}
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenuCategory;
