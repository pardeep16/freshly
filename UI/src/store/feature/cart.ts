import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface RestaurantCart {
    restaurantId: string;
    restaurantName: string;
    items: CartItem[];
    totalAmount: number;
}

interface CartState {
    carts: RestaurantCart[];
    activeCartIndex: number | null;
}

const initialState : CartState = {
    carts:[],
    activeCartIndex:null
}

const cartSlice = createSlice({
    name:'cartState',
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<{item:CartItem;restaurantId:string;restaurantName:string}>)=> {
            const { item, restaurantId, restaurantName } = action.payload;

            const cartIndex = state.carts?.findIndex(cart=> cart.restaurantId === restaurantId);

            if(cartIndex>=0){
                const existingItem = state.carts[cartIndex]?.items?.findIndex(cartItem=> cartItem.id=== item.id);
                if(existingItem>=0){
                    state.carts[cartIndex].items[existingItem].quantity++;
                }
                else{
                    state.carts[cartIndex].items.push({...item,quantity:1});
                }

                state.carts[cartIndex].totalAmount = state.carts[cartIndex].items.reduce(
                    (total,item) => total + (item.price * item?.quantity),0
                )

                state.activeCartIndex = cartIndex;
            }
            else{
                const newCart:RestaurantCart = {
                    restaurantId,
                    restaurantName,
                    items:[{...item,quantity:1}],
                    totalAmount: item.price
                }
                state.carts.push(newCart);
                state.activeCartIndex = state.carts.length -1;
            }
        },
        removeItem:(state,action:PayloadAction<{itemId: string;
            restaurantId: string;}>)=>{
            const { itemId, restaurantId } = action.payload;
            const cartIndex = state.carts.findIndex(cart => cart.restaurantId === restaurantId);
            if(cartIndex>=0){
                const indexItem = state.carts[cartIndex]?.items?.findIndex(cartItem=> cartItem.id=== itemId);
                if(indexItem>=0){
                    if(state.carts[cartIndex].items[indexItem].quantity >1){
                        state.carts[cartIndex].items[indexItem].quantity--;
                    }
                    else{
                        state.carts[cartIndex].items.splice(indexItem,1);
                    }
                    state.carts[cartIndex].totalAmount = state.carts[cartIndex].items.reduce(
                        (total,item) => total + (item.price * item.quantity),0
                    )
                    
                    if(state.carts[cartIndex].items.length ===0){
                        state.carts.splice(cartIndex,1);
                        state.activeCartIndex = state.carts.length >0 ? 0 : null;
                    }
                }
            }
        },

        setActiveCart : (state,action:PayloadAction<number>)=>{
            if(action.payload >=0 && action.payload < state.carts.length){
                state.activeCartIndex = action.payload;
            }
        },
        clearCart: (state, action: PayloadAction<string>) => {
            const restaurantId = action.payload;
            const cartIndex = state.carts.findIndex(cart => cart.restaurantId === restaurantId);
            
            if (cartIndex >= 0) {
              state.carts.splice(cartIndex, 1);
              state.activeCartIndex = state.carts.length > 0 ? 0 : null;
            }
          },
          
          clearAllCarts: (state) => {
            state.carts = [];
            state.activeCartIndex = null;
          },
    }
});

export const { addItem,removeItem,setActiveCart,clearCart,clearAllCarts} = cartSlice.actions;

export const selectCarts = (state:RootState) => state.cartState.carts;
export const selectActiveCartIndex = (state:RootState)=> state.cartState.activeCartIndex;


export default cartSlice.reducer;
