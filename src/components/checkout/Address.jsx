import React from "react";
import { MdLocationPin } from "react-icons/md";

const Address = () => {
  return (
    <div>
      <div className="flex absolute py-1 my-4 -mx-10 px-2 border shadow bg-white">
        <MdLocationPin size={34} />
      </div>
      <div className="bg-white p-2 m-2">
        <div className="text-lg p-4 m-3 ">
          <h1 className="font-bold text-lg text-gray-500">Delivery adress</h1>
        </div>
      </div>
    </div>
  );
};

export default Address;
