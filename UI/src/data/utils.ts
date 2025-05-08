import { MenuCategory } from "../pages/RestaurantMenu/RestaurantMenu";
import { menuCategories, restaurantData } from "../pages/Restaurants/constants";
import { Restaurant } from "../pages/Restaurants/type";


export const getRestaurantById = (id: number): Restaurant | undefined => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

export const getMenuForRestaurant = (id: number): MenuCategory[] => {
    return menuCategories[id] || [];
  };