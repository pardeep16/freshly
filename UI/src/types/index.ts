export interface SearchOptions {
    query: string;
}

export interface FoodItem {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    discount?: number;
    favorite?: boolean;
    restaurantId?: string;
    restaurantName?: string; 
}