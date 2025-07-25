import React, { useState, useEffect } from "react";
import OfferComponent from "./OfferComponent";
import Toppickscard from "./Toppickscard";
import TopResAccordion from "./TopResAccordion";
import { Link } from "react-router-dom";

const TopRestaurantMenu = ({ resmenu }) => {
  const [offers, setOffers] = useState([]);
  const [search,setsearch]=useState("");
  const [searchupdate,setsearchupdate]=useState([]);

  const heading = resmenu?.cards?.[0]?.card?.card?.text;
  const info = resmenu?.cards?.[2]?.card?.card?.info;

  const handlesearch= async(value)=>{
    setsearch(value)
    if(!value){
      setsearchupdate([])
    }

      const data=await fetch("https://www.swiggy.com/dapi/menu/pl/search?lat=13.08950&lng=80.27390&restaurantId=708880&isMenuUx4=true&query="+value)
      const json=await data.json()

      setsearchupdate(json)
      console.log(json)
  }

  useEffect(() => {
    const offerList =
      resmenu?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    if (Array.isArray(offerList)) {
      setOffers(offerList);
    }
  }, [resmenu]);


  return (
    <div className="m-w-[200px] mx-[300px] py-4 px-2 space-y-6">
      <ul className="flex text-sm text-center">
        <li className="px-1 mx-1">
          <Link to="/" className="hover:underline hover:text-orange-700">
            Home
          </Link>
          /
        </li>
        <li className="px-1 mx-1">Location</li> /
        <li className="px-1 mx-1">Food name</li>
      </ul>

      <h1 className="font-bold text-3xl my-6">{heading}</h1>

      <div className="border border-black rounded-lg p-2 m-2">
        <p className="px-2 font-bold">
          {info?.avgRating} ({info?.totalRatingsString}){" "}
          {info?.costForTwoMessage}
        </p>
        <button className="px-2 text-orange-500 font-bold">
          {info?.cuisines?.join(", ")}
        </button>
        <section className="px-2">
          <select>
            <option>Outlet</option>
          </select>
        </section>
        <p className="px-2">25-30 mins</p>
      </div>

      <h1 className="text-lg font-bold ">Deals for you</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-6">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div className="  " key={offer.info?.header} >
              <OfferComponent offer={offer.info} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No offers available</p>
        )}
      </div>

      <div className="text-center my-2 py-2">
        <p className="my-4">Menu</p>
        <input
          className="text-center border w-full h-12 rounded-lg font-bold bg-gray-100"
          type="text"
          placeholder="Search for dishes"
          value={search}
          onChange={(e)=>handlesearch(e.target.value)}
        />
        <div>{searchupdate}</div>
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

      <div className="my-4">
        <h1 className="text-lg font-bold">Top Picks</h1>
        <Toppickscard />
      </div>

      <div>
        <h1>Recommended</h1>
        <TopResAccordion />
      </div>
    </div>
  );
};

export default TopRestaurantMenu;
