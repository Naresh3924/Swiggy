import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/slice/restaurantSlice";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const TopResAccordion = ({ resAccordianList }) => {
  const [showIndex, setShowIndex] = useState(0);

  const dispatch = useDispatch();

  const filteredCards = resAccordianList?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleShow = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddItem = (item) => {
    dispatch(updateCartItem(item));
  };
  return (
    <div className="m-2 p-2">
      {filteredCards?.map((item, index) => {
        const title = item?.card?.card?.title;
        const dishes = item?.card?.card?.itemCards || [];

        return title ? (
          <React.Fragment key={index}>
            <div
              className="my-4 py-4 text-lg border-b-8 font-bold cursor-pointer flex justify-between"
              onClick={() => handleShow(index)}
            >
              <div>
                {title}({dishes.length})
              </div>
              <div>
                {showIndex === index ? (
                  <SlArrowUp size={24} />
                ) : (
                  <SlArrowDown size={24} />
                )}
              </div>
            </div>

            {showIndex === index &&
              dishes.map((dish, dishIndex) => (
                <div
                  key={dishIndex}
                  className="my-2 py-2 flex justify-between border-b-2"
                >
                  <div className=" py-2 my-2">
                    <h1 className="font-bold text-lg">
                      {dish?.card?.info?.name}
                    </h1>
                    <img
                      className="w-8 my-2"
                      src="https://img.icons8.com/?size=100&id=EfABkyOzZSl7&format=png&color=000000"
                      alt="check-icon"
                    />
                    <p className="font-bold my-2">
                      ₹
                      {dish?.card?.info?.defaultPrice / 100 ||
                        dish?.card?.info?.price / 100}
                    </p>
                    <p className="my-2">
                      {dish?.card?.info?.ratings?.aggregatedRating?.rating}
                    </p>
                    <p className="my-2">{dish?.card?.info?.description}</p>
                  </div>
                  <div className="">
                    <div className="py-2 my-2 ">
                      {dish?.card?.info?.imageId ? (
                        <div>
                          <img
                            className="rounded-xl w-44 "
                            alt="acc"
                            src={
                              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fit/" +
                              dish?.card?.info?.imageId
                            }
                          />
                        </div>
                      ) : (
                        <div className="border rounded-xl w-44 text-center bg-gray-100 ">
                          <p className="my-6 py-6">Image not found</p>
                        </div>
                      )}
                      <div className=" text-center  mx-6  ">
                        <button
                          data-testid="addcartbutton"
                          className="bg-white hover:bg-slate-100  border border-slate-300   px-10 py-2 rounded-xl font-extrabold text-green-600 "
                          onClick={() => handleAddItem(dish?.card?.info)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </React.Fragment>
        ) : null;
      })}
    </div>
  );
};

TopResAccordion.propTypes = {
  resAccordianList: PropTypes.object,
};

export default TopResAccordion;
