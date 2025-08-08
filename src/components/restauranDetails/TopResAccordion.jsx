import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/slice/restaurantSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TopResAccordion = ({ recomendedList }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { itemCards } = recomendedList || {};

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(updateCartItem(item));
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <>
        <div className="  ">
          {itemCards?.map((item, index) => (
            <>
              <div
                key={item.card?.info?.id}
                className="border  rounded  py-4 my-4 px-4   "
              >
                <div
                  className="font-bold text-lg p-2 hover:cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex justify-between ">
                    <button className=" text-left ">
                      {recomendedList?.title}({itemCards?.length})
                    </button>
                    <div className="">
                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                </div>
                <div className=" p-2">
                  {openIndex === index && (
                    <div className=" flex justify-between  ">
                      <div className="">
                        <img
                          className="w-8"
                          src="https://img.icons8.com/?size=100&id=EfABkyOzZSl7&format=png&color=000000"
                          alt="check-icon"
                        />

                        <h1 className="font-bold">{item.card?.info?.name}</h1>
                        <p className="font-bold">
                          ₹
                          {item.card?.info?.price / 100 ||
                            item.card?.info?.defaultPrice / 100}
                        </p>
                        <p>{item.card?.info?.description}</p>
                      </div>
                      <div className="rounded-sm  text-center ">
                        <img
                          className="rounded-xl w-44 h-32"
                          alt="acc"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                            item?.card?.info?.imageId
                          }
                        />
                        <button
                          data-testid="addcartbutton"
                          className="bg-white hover:bg-slate-100   border border-slate-300   px-10 py-2 rounded-xl font-extrabold text-green-600 "
                          onClick={() => handleAddItem(item)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    </>
  );
};

TopResAccordion.propTypes = {
  recomendedList: PropTypes,
  itemCards: PropTypes,
};

export default TopResAccordion;
