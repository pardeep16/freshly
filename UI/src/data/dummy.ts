import { SearchOptions } from "../types";


export const smartSearch = (options: SearchOptions): any[] => {
    
    // For now, we'll use a simple mock implementation
    const query = options.query.toLowerCase();
    
    // Mock search results
    if (query.includes('pizza')) {
      return [
        { id: 201, name: 'Margherita Pizza', type: 'dish' },
        { id: 1, name: 'Tasty Delights', type: 'restaurant' },
        { id: 6, name: 'Pizza Paradise', type: 'restaurant' }
      ];
    } else if (query.includes('burger')) {
      return [
        { id: 201, name: 'Classic Cheeseburger', type: 'dish' },
        { id: 202, name: 'Double Bacon Burger', type: 'dish' },
        { id: 2, name: 'Burger Palace', type: 'restaurant' }
      ];
    } else if (query.includes('sushi')) {
      return [
        { id: 3, name: 'Sushi Express', type: 'restaurant' },
        { id: 201, name: 'California Roll', type: 'dish' },
        { id: 202, name: 'Spicy Tuna Roll', type: 'dish' }
      ];
    }
    
    // Default empty results
    return [];
  };