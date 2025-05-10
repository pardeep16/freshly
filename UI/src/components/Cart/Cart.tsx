import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addItem,
  clearCart,
  removeItem,
  selectActiveCartIndex,
  selectCarts,
  setActiveCart,
} from "../../store/feature/cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const carts = useAppSelector(selectCarts);
  const activeCartIndex = useAppSelector(selectActiveCartIndex);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClearCart = (id: string) => {
    dispatch(clearCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    if (!activeCart) {
      return;
    }
    const item = activeCart.items.find((item:any) => item.id === id);
    if (item) {
      dispatch(
        addItem({
          item: { ...item },
          restaurantId: activeCart.restaurantId,
          restaurantName: activeCart.restaurantName,
        })
      );
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    if (!activeCart) {
      return;
    }
    dispatch(
      removeItem({
        itemId: id,
        restaurantId: activeCart.restaurantId,
      })
    );
  };

  const activeCart = activeCartIndex !== null ? carts[activeCartIndex] : null;
  return (
    <div className="m-2">
      {carts?.length > 1 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Your Restaurant Carts</h2>
          <div className="flex flex-wrap gap-2">
            {carts.map((cart:any, index:any) => (
              <button
                key={cart.restaurantId}
                onClick={() => dispatch(setActiveCart(index))}
                className={`px-3 py-2 text-sm rounded-lg ${
                  activeCartIndex === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cart.restaurantName}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold">
            {activeCart ? `${activeCart.restaurantName} Cart` : "Your Cart"}
          </h2>
          {activeCart && (
            <button
              onClick={() => handleClearCart(activeCart.restaurantId)}
              className="text-red-500 text-sm hover:text-red-700"
            >
              Clear Cart
            </button>
          )}
        </div>
        {activeCart?.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="mb-4">
            {activeCart?.items?.map((item:any) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-[88px] mb-4 h-[88px] bg-amber-100 rounded-md flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[88px] w-[88px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {carts?.length !== 0 && activeCart && (
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Service</span>
                  <span className="font-medium">+${5}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Total</span>
                  <span className="font-medium">
                    ${activeCart?.totalAmount?.toFixed(2) ?? 0 + 5}
                  </span>
                </div>

                <button
                  className="mt-8 w-full text-white py-3 rounded-md font-medium bg-primary hover:bg-amber-600 transition-colors"
                  onClick={() => navigate('/checkout')}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
