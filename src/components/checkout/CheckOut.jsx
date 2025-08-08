import React from "react";
import Adress from "./Adress";
import Payment from "./Payment";
import CartItem from "./CartItem";
import Account from "./Account";
import { useSelector } from "react-redux";
import Emptycart from "./Emptycart";

const CheckOut = () => {
  const itemcards = useSelector((store) => store?.cart?.items);

  return (
    <div className="pt-20 pb-5 px-32 bg-gray-100">
      {itemcards.length > 0 ? (
        <div className="flex justify-between ">
          <div className="w-full ">
            <Account />
            <Adress />
            <Payment />
          </div>
          <div className="w-1/2">
            <CartItem itemcard={itemcards} />
          </div>
        </div>
      ) : (
        <Emptycart />
      )}
    </div>
  );
};

export default CheckOut;
