
export interface Restaurant {
    id: number;
    name: string;
    image: string;
    rating: number;
    ratingCount: number;
    cuisineType: string;
    priceRange: string;
    address: string;
    distance: number;
    deliveryTime: number;
    minOrder: number;
    favorite?: boolean;
    phone?:string
}

export interface CuisineFilter {
    id: number;
    name: string;
}