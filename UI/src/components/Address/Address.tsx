import { MapPinIcon } from "@heroicons/react/24/outline";

const Address = () => {
  return (
    <div className="mb-4">
      <h2 className="text-lg mb-2">Your Address</h2>

      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          <MapPinIcon className="h-5 w-5 text-primary" />
          <p className="font-medium">Gurgaon,Sector 12</p>
        </div>
        <div>
          <button className="rounded-lg border-1 border-primary hover:bg-primary hover:text-white w-[80px] h-[32px]">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
