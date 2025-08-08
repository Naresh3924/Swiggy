import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RES_URL } from "../../utils/constant";
import { updateToggleCart } from "../../redux/slice/restaurantSlice";

const CartDetailPopUp = ({ itemCards }) => {
  const dispatch = useDispatch();
  const RestaurantDetailInfo = useSelector(
    (store) => store?.restaurantDetail?.restaurantDetail[0]
  );
  const { restaurantInfo } = RestaurantDetailInfo || {};
  return (
    <div>
      {itemCards?.length === 0 ? (
        <div
          className="emptyCardDetailsModal p-5  shadow-xl rounded "
          onMouseLeave={() => dispatch(updateToggleCart(false))}
        >
          <div className="text-gray-500 font-bold text-start">
            <h1 className="text-4xl">Cart Empty</h1>
            <div className="pt-2">
              <p>Good Food is always cooking!!</p>
              <p>Go Ahead Order Some yummy items</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="cartDetailsModal p-5  shadow-xl rounded"
          onMouseLeave={() => dispatch(updateToggleCart(false))}
        >
          <div className=" flex border-b text-start text-sm py-2.5 ">
            <div>
              <img
                className="w-16"
                src={RES_URL + restaurantInfo?.cloudinaryImageId}
              />
            </div>

            <div className="px-4 ">
              <div>
                <h1 className="font-bold text-lg">
                  {RestaurantDetailInfo?.restaurantDetailHeader}
                </h1>
                <p className="text-slate-600 semi-bold">
                  {restaurantInfo?.areaName}
                </p>
              </div>
              <div
                className=" text-blue-400 font-bold my-3"
                onClick={() => dispatch(updateToggleCart(false))}
              >
                <Link to="/restaurantdetail/:resId">
                  <p>VIEW FULL MENU</p>
                </Link>
              </div>
            </div>
          </div>

          <div className=" border-b  text-start text-sm py-2 my-2 overflow-y-scroll h-48 scrollbar-hide">
            {itemCards?.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex justify-between py-1"
              >
                <p className="font-bold my-2">{item?.card?.info?.name}</p>
                <p className="font-bold text-slate-500 my-2 ">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
            ))}
          </div>

          <div className=" flex justify-between border-b text-start text-sm my-4">
            <h1 className="font-bold my-2 ">Sub total</h1>
            <p className="font-bold">
              ₹
              {itemCards.reduce((total, item) => {
                const price =
                  item?.card?.info?.price || item?.card?.info?.defaultPrice;
                return total + price;
              }, 0) / 100}
            </p>
          </div>
          <div className=" border-orange-600 bg-orange-600 text-white w-full  mx-auto p-2 m-2  my-2">
            <Link
              to="/checkout"
              onClick={() => dispatch(updateToggleCart(false))}
            >
              <button className=" font-bold text-center">CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
CartDetailPopUp.propTypes = {
  itemCards: PropTypes,
};
export default CartDetailPopUp;
