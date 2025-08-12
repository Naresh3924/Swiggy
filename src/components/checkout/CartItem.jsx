import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RES_URL } from "../../utils/constant";
import { cartCheckoutDetail } from "../../utils/util";
import { Decrement, Increment } from "../../redux/slice/restaurantSlice";
// import { Decrement, Increment } from "../../redux/slice/restaurantSlice";

const CartItem = ({ itemcard }) => {
  const [text, settext] = useState("");
  const RestaurantDetailInfo = useSelector(
    (store) => store?.restaurantDetail?.restaurantDetail[0]
  );
  const { restaurantInfo } = RestaurantDetailInfo || {};

  const dispatch = useDispatch();

  const handlesearch = (e) => {
    const value = e.target.value;
    settext(value);
  };

  useEffect(() => {
    cartCheckoutDetail({ dispatch });
  }, []);

  return (
    <>
      <div className=" bg-white p-2 m-2 w-full">
        <>
          <div className="flex shadow py-2">
            <div className="">
              <img
                className="w-16"
                src={RES_URL + restaurantInfo?.cloudinaryImageId}
              />
            </div>
            <div className="px-2">
              <h1 className="font-bold">
                {RestaurantDetailInfo?.restaurantDetailHeader}
              </h1>
              <p>{restaurantInfo?.city}</p>
            </div>
          </div>
        </>
        <div className="overflow-y-scroll h-96 my-4 p-2 m-2">
          {itemcard?.map((item) => (
            <>
              <div className="flex justify-between px-2 py-2">
                <div className="font-semibold">{item?.name?.slice(0, 20)}</div>
                <div className="flex border font-bold  ">
                  <p
                    className="text-green-500 px-2 hover:cursor-pointer"
                    onClick={() => dispatch(Decrement())}
                  >
                    -
                  </p>
                  <p className="text-green-500 px-2">{itemcard?.length}</p>
                  <p
                    className="text-green-700 px-2 hover:cursor-pointer"
                    onClick={() => dispatch(Increment())}
                  >
                    +
                  </p>
                </div>
                <div className="">
                  <p className="text-sm font-bold">
                    ₹{item?.price / 100 || item?.defaultPrice / 100}
                  </p>
                </div>
              </div>
            </>
          ))}

          <div className="my-4 p-2 m-2">
            <input
              className="bg-gray-100 border  text-sm w-full p-4 "
              type="text"
              value={text}
              placeholder="Any Suggesions, we will pass it on.."
              onChange={(e) => handlesearch(e)}
            />
          </div>
          <div className=" border border-dotted border-black shadow my-4 p-4 m-4  text-center ">
            <buttom className="  text-sm w-full">Apply coupons</buttom>
          </div>
        </div>
        <div className="flex px-4 py-4 justify-between border-t-2 font-bold">
          <div>
            <p className="">TO PAY</p>
          </div>
          ₹
          {itemcard.reduce((total, item) => {
            const price = item?.price || item?.defaultPrice;
            return total + price;
          }, 0) / 100}
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  itemcard: PropTypes,
};

export default CartItem;
