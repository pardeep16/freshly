import React, { useState } from "react";
import Address from "../../components/Address/Address";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart, selectActiveCartIndex, selectCarts } from "../../store/feature/cart";
import { useNavigate } from "react-router-dom";

const serviceCharge = 5.00;
const deliveryFee = 2.50;

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const carts = useAppSelector(selectCarts);
  const activeCartIndex = useAppSelector(selectActiveCartIndex);
  const [isProcessing,setIsProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    if(!activeCart){
        return;
    }

    setIsProcessing(true);

   setTimeout(()=>{
    setIsProcessing(false);
    const order = {
       
        ...activeCart,
        id:`oder-${Date.now()}`,
        paymentMethod:paymentMethod,
        status:'PENDING',
        timestamp : new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString()
    }

    const existingOrders = JSON.parse(localStorage.getItem('order')||'[]');
    localStorage.setItem('orders',JSON.stringify([...existingOrders,order]));

    dispatch(clearCart(activeCart.restaurantId));
    navigate('/order-track/'+order.id);
   },2000);
  }
  
  const activeCart = activeCartIndex!=null ? carts[activeCartIndex] : null;

  const total = activeCart?.totalAmount ?? 0 + serviceCharge + deliveryFee ;

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 gap-4">
        
          <div className="bg-white rounded-lg shadow-md p-6 my-2">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <div
                className={`flex-1 border rounded-lg p-4 cursor-pointer ${
                  paymentMethod === "card"
                    ? "border-primary bg-amber-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full w-5 h-5 border-2 flex items-center
                   justify-center border-amber-500"
                  >
                    {paymentMethod === "card" && (
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    )}
                  </div>
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
              </div>

              <div
                className={`flex-1 border rounded-lg p-4 cursor-pointer ${
                  paymentMethod === "paypal"
                    ? "border-primary bg-amber-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full w-5 h-5 border-2 flex items-center
                   justify-center border-amber-500"
                  >
                    {paymentMethod === "paypal" && (
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    )}
                  </div>
                  <span className="font-medium">Paypal</span>
                </div>
              </div>
              <div
                className={`flex-1 border rounded-lg p-4 cursor-pointer ${
                  paymentMethod === "cash"
                    ? "border-primary bg-amber-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full w-5 h-5 border-2 flex items-center
                   justify-center border-amber-500"
                  >
                    {paymentMethod === "cash" && (
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    )}
                  </div>
                  <span className="font-medium">Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Form */}
            {paymentMethod === 'card' && <h2>Card </h2>}

            {paymentMethod === 'paypal' && 
            <div className="p-6 text-center">
            <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="mx-auto h-12" />
          </div>}
            
          {paymentMethod === 'cash' && (
              <div className="p-6 text-center">
                <p className="text-gray-600">Pay when your order is delivered. Please have the exact amount ready.</p>
              </div>
            )}

          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-2">
            <Address />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-2">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <h3 className="font-medium text-gray-700 mb-2">{activeCart?.restaurantName}</h3>

            <div className="max-h-60 overflow-y-auto mb-4">
                {activeCart?.items?.map((item:any)=>(
                    <div key={item.id} className="py-2 border-b last:border-b-0 flex justify-between">
                    <div>
                      <span className="font-medium">{item.quantity}x </span>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
            </div>
            <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${activeCart?.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Service Fee</span>
                <span>${serviceCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-3 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleSubmit} disabled={isProcessing}
            className={`w-full py-3 rounded-md font-medium ${isProcessing ? 'bg-gray-400 cursor-not-allowed':
            'bg-primary text-white hover:bg-amber-400'}`}>
                {isProcessing ? 'Processing....':'Place Order'}
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Checkout;
