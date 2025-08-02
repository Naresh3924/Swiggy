import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../redux/slice/restaurantSlice";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoriesCard = ({ itemCards }) => {
  // console.log(itemCards)

  const dispatch = useDispatch();

  return (
    <div>
      {itemCards.length ? (
        itemCards?.map((item) => (
          <div
            className="flex justify-between border-b-2 my-12 py-5 h-full overflow-hidden "
            key={item?.card?.info?.id}
          >
            <div className="px-2 w-2/3">
              <img
                className="w-8"
                src="https://img.icons8.com/?size=100&id=EfABkyOzZSl7&format=png&color=000000"
                alt="check-icon"
              />
              <h1 className="font-bold py-2">{item?.card?.info?.name}</h1>
              <div className="font-bold flex">
                <span>&#8377;</span>
                <div className="px-1">{item?.card?.info?.price / 100}</div>
              </div>
              <div className="text-slate-600 font-semibold">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="rounded-sm px-2">
              <img
                className="rounded-xl w-[200px]"
                alt="acc"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item?.card?.info?.imageId
                }
              />
              <div className=" text-center mx-10 -my-6">
                <button
                  className="bg-white hover:bg-slate-100  border border-slate-300   px-10 py-2 rounded-xl font-extrabold text-green-600 "
                  onClick={() => dispatch(removeCartItem(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
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

            <Link to="/" data-testid="restaurantMenu">
              {" "}
              <button className=" border border-orange-600 bg-orange-600 font-bold text-white w-80 h-12 mx-4">
                SEE RESTAURANT NEAR YOU
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

CategoriesCard.propTypes = {
  itemCards: PropTypes,
};
export default CategoriesCard;
