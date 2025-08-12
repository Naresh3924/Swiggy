import React from "react";
import { Link } from "react-router-dom";

const Emptycart = () => {
  return (
    <div className="flex  my-12 py-5 justify-center h-full ">
      <div className="">
        <img
          className="h-[250px] w-[350px] "
          alt="food-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        />
        <h1 className="font-bold text-2xl text-center py-2 my-2">
          Your cart is empty
        </h1>
        <p className=" my-2 py-2">
          You can go to home page to view more restaurants
        </p>

        <Link to="/restaurantdetail/:resId" data-testid="restaurantMenu">
          <button className=" border border-orange-600 bg-orange-600 font-bold text-white w-80 h-12 mx-4">
            SEE RESTAURANT NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Emptycart;
