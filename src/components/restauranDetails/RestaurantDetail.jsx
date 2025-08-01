import React from "react";
import { useState, useEffect } from "react";
import OfferComponent from "./OfferComponent";
import TopResAccordion from "./TopResAccordion";
import { Link, useParams } from "react-router-dom";
import { RestaurantDetailapiCall } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";

const RestaurantDetail = () => {
  const { resId } = useParams();
  const [search, setsearch] = useState("");
  const [setsearchupdate] = useState([]);

  const dispatch = useDispatch();
  const RestaurantDetailInfo = useSelector(
    (store) => store?.restaurantDetail?.restaurantDetail[0]
  );
  const { restaurantInfo, offersList, recomendedList } =
    RestaurantDetailInfo || {};

  useEffect(() => {
    if (resId) {
      RestaurantDetailapiCall({ resId, dispatch });
    }
  }, [resId]);

  const handlesearch = async (value) => {
    setsearch(value);
    if (!value) {
      setsearchupdate([]);
    }
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl/search?lat=21.99740&lng=79.00110&restaurantId=${resId}&isMenuUx4=true&query=${value}`
    );
    const json = await data.json();
    setsearchupdate(json);
  };

  return (
    <div className="m-w-[200px] mx-[300px] py-16 px-1 space-y-6">
      <ul className="flex text-sm text-center">
        <li className="px-1 ">
          <Link
            data-testid="restaurantMenu"
            to="/"
            className="px-1 hover:underline hover:text-orange-700"
          >
            Home
          </Link>
          /
        </li>
        <li className=" ">
          <Link
            to="/"
            data-testid="location"
            className="px-1 hover:underline hover:text-orange-700"
          >
            Location
          </Link>
          /
        </li>
        <li className=" ">
          <Link
            to="/"
            data-testid="foodName"
            className="px-1 hover:underline hover:text-orange-700"
          >
            Food name
          </Link>
        </li>
      </ul>

      <h1 className="font-bold text-3xl my-6">
        {RestaurantDetailInfo?.restaurantDetailHeader}
      </h1>
      <div className="border border-slate rounded-2xl p-5 shadow-xl ">
        <div className="flex">
          <img
            className="w-6"
            src="https://img.icons8.com/?size=100&id=11254&format=png&color=40C057"
            alt="rating-icon"
          />
          <p className="px-1 font-bold">{restaurantInfo?.avgRating}</p>
          <p className="px-1 font-bold">{restaurantInfo?.totalRatingsString}</p>
          <p className="px-1 font-bold"> {restaurantInfo?.costForTwoMessage}</p>
        </div>
        <button className="px-2 text-orange-500 font-bold">
          {restaurantInfo?.restaurantInfo?.cuisines?.join(", ")}
        </button>
        <div>
          {restaurantInfo?.labels?.map((i) => (
            <div className="flex" key={i?.title}>
              <div className="font-bold">{i?.title} :</div>
              <div className="mx-2 font-semibold text-gray-600">
                {i?.message}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-lg font-bold ">Deals for you</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-6">
        {offersList?.map((offer) => (
          <div className="  " key={offer?.info?.header}>
            <OfferComponent offer={offer} />
          </div>
        ))}
      </div>
      <div className="text-center my-2 py-2">
        <p className="my-4">Menu</p>
        <input
          className="text-center border w-full h-12 rounded-lg font-bold bg-gray-100"
          type="text"
          placeholder="Search for dishes"
          value={search}
          onChange={(e) => handlesearch(e.target.value)}
        />
      </div>

      <div className="flex h-[30px] w-[100px]">
        <button className="border bg-gray-200 mx-4 px-6 rounded-full">
          All
        </button>
        <button className="border bg-gray-200 mx-4 px-6 rounded-full">
          Veg
        </button>
        <button className="border bg-gray-200 mx-4 px-6 rounded-full">
          BestSeller
        </button>
      </div>

      {/* <div className="my-4">
        <h1 className="text-lg font-bold">Top Picks</h1>
        <TopPicksCard toppickscard={restaurantInfo} />
      </div> */}

      <div>
        <h1 className="font-bold text-xl">
          {recomendedList?.title} ({recomendedList?.itemCards?.length}){" "}
        </h1>
        <TopResAccordion recomendedList={recomendedList} />
      </div>
    </div>
  );
};

export default RestaurantDetail;
