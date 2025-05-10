import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import { ChatBubbleLeftIcon, CheckIcon, ClipboardDocumentCheckIcon, DevicePhoneMobileIcon, PhoneIcon, TruckIcon } from "@heroicons/react/24/outline";
import Rating from "../../components/common/Rating";

const deliveryPerson = {
  id: "DELI726637",
  name: "Rahul",
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  phone: "+1 (555) 123-4567",
  vehicle: "Honda Motorcycle",
  licensePlate: "HD-5432",
  rating: 4.8,
};

const initialDeliveryLocation: [number, number] = [28.44215, 77.057167];
const destinationLocation: [number, number] = [28.473463, 77.029292];

const ORDER_STATUSES = [
  "Order confirmed",
  "Restaurant preparing your food",
  "Driver picking up your order",
  "Order is on the way",
  "Order arrived",
];

const OrderTracking = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [deliveryLocation, setDeliveryLocation] = useState(
    initialDeliveryLocation
  );
  const [estimatedTime, setEstimatedTime] = useState(30); // 30 minutes
  const [currentStep,setCurrentStep] = useState(0);

  useEffect(() => {
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const foundOrder = existingOrders.find((o: any) => o.id === orderId);
    if (foundOrder) {
      setOrder(foundOrder);
    }
    setLoading(false);

    const orderProgressInterval = setInterval(()=>{
        setCurrentStep(prevStep => {
            if(prevStep < ORDER_STATUSES.length -1){
                return prevStep+1;
            }
            clearInterval(orderProgressInterval);
            return prevStep;
        });
    },10000);

    const deliveryProgressInterval = setInterval(()=>{
        setEstimatedTime(prevTime => {
            if (prevTime > 1) {
              return prevTime - 1;
            }
            clearInterval(deliveryProgressInterval);
            return 0;
          });

      const totalDeliveryTime = 30; // minutes
      const timeRemaining = estimatedTime;
      const progress = 1 - (timeRemaining / totalDeliveryTime);
      
      const newLocation = calculateIntermediatePoint(
        initialDeliveryLocation,destinationLocation,progress
      );
      setDeliveryLocation(newLocation);
    },5000);


  }, [orderId, estimatedTime]);

  const calculateIntermediatePoint = (
    start: [number, number], 
    end: [number, number], 
    progress: number
  ): [number, number] => {
    const lat = start[0] + (end[0] - start[0]) * progress;
    const lng = start[1] + (end[1] - start[1]) * progress;
    return [lat, lng];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="animate-spin rounded-full h-16 w-16 border-t-4
         border-amber-500 border-solid"
        ></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order not found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the order you're looking for.
          </p>
          <button
            className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Order #{order?.id?.slice(-5)}</h2>
            <span className="text-amber-500 font-medium">
                {estimatedTime > 0 ? `${estimatedTime} mins` : 'Arrived'}
              </span>
            </div>
        

        {/* Map */}

        <div style={{ height: '400px', width: '100%', zIndex: 0 }} className="mb-4 rounded-lg overflow-hidden">
            <MapContainer center={[
                  (deliveryLocation[0] + destinationLocation[0]) / 2,
                  (deliveryLocation[1] + destinationLocation[1]) / 2
                ]} 
                zoom={14} style={{ height: '100%', width: '100%' }}
                zoomControl={false}>
                <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={deliveryLocation}>
                    <Popup>{'Delivery Driver (Order)'}</Popup>
                </Marker>
                <Marker position={destinationLocation}>
                    <Popup>{'Your Location'}</Popup>
                </Marker>
            </MapContainer>
        </div>

        <div className="mb-4">
            <h3 className="font-medium mb-3">Order Status</h3>
            <div className="space-y-4">
                {ORDER_STATUSES.map((status,index)=>(
                    <div key={index} className="flex items-start">
                        <div className={`rounded-full w-6 h-6 mt-0.5 flex items-center justify-center ${
                      index <= currentStep ? 'bg-amber-500 text-white' : 'bg-gray-200'
                    }`}>
                        {index < currentStep ? <CheckIcon className="h-4 w-4" />: (index+1)}
                        </div>
                        <div className="ml-3">
                            <p className={`font-medium ${index <= currentStep ? 'text-black' : 'text-gray-500'}`}>{status}</p>
                            {index === currentStep && (
                        <p className="text-sm text-gray-500">
                          {index === 0 && 'We\'ve received your order and are processing it.'}
                          {index === 1 && 'The restaurant is preparing your delicious meal.'}
                          {index === 2 && 'Your driver is at the restaurant picking up your order.'}
                          {index === 3 && 'Your driver is on the way to your address.'}
                          {index === 4 && 'Your order has arrived at your address.'}
                        </p>
                      )}
                        </div>
                    </div>
                ))}
            </div>        
        </div>
        </div>
        {/* Delivery Person Details */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Delivery Person</h2>
        <div className="flex items-center gap-4 mb-4">
            <img 
                src={deliveryPerson.photo} 
                alt={deliveryPerson.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{deliveryPerson.name}</p>
                <Rating rating={deliveryPerson.rating}/>
              </div>  
        </div>
        <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
                <DevicePhoneMobileIcon className="h-5 w-5"/>
                <p>{deliveryPerson?.phone}</p>

            </div>
            <div className="flex items-center gap-2">
                <TruckIcon className="h-5 w-5"/>
                <p>{deliveryPerson?.vehicle}</p>

            </div>
            <div className="flex items-center gap-2">
                <ClipboardDocumentCheckIcon className="h-5 w-5"/>
                <p>{deliveryPerson?.licensePlate}</p>

            </div>
            <div className="flex justify-between">
                <button className="flex items-center justify-center gap-1 px-3 py-2 bg-green-100 text-green-800 rounded-md">
                    <PhoneIcon className="h-4 w-4"/>
                </button>

                <button className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-100 text-green-800 rounded-md">
                    <ChatBubbleLeftIcon className="h-4 w-4"/>
                </button>

            </div>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 my-2">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <h3 className="font-medium text-gray-700 mb-2">{order?.restaurantName}</h3>

            <div className="max-h-60 overflow-y-auto mb-4">
                {order?.items?.map((item:any)=>(
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
            

            <div className="border-t pt-3 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total (include charges)</span>
                <span>${order?.totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
                <p>Payment Method: {order.paymentMethod === 'card' ? 'Credit Card' : order.paymentMethod === 'paypal' ? 'PayPal' : 'Cash on Delivery'}</p>
                <p>Order placed: {new Date(order.timestamp).toLocaleString()}</p>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default OrderTracking;
