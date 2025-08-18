import PropTypes from "prop-types";
import React from "react";
import { MdLocationPin } from "react-icons/md";
const UpdatedFooter = ({ footerinfo }) => {
  const { footerInfo, restaurantDetailHeader } = footerinfo || {};
  // console.log(recomendedList);

  return (
    <div className="bg-gray-100  pb-12 my-2 py-2 text-sm font-bold text-gray-500 w-3/5 mx-auto ">
      <div className=" border-b border-b-black p-2 mx-4 flex">
        <div>
          <img
            alt="img"
            className="h-8"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
          />
        </div>
        <div className="p-2">
          <p>License No. 11424210000145</p>
        </div>
      </div>
      <div className="border-b border-b-black my-4   mx-4">
        <h1 className="p-2">
          {footerInfo?.card?.card?.name || restaurantDetailHeader}
        </h1>
        <p className="p-2">(Outlet:{footerInfo?.card?.card?.area}City)</p>
        <p className="p-2 text-gray-400 font-normal flex">
          <MdLocationPin size={24} className="" />
          {footerInfo?.card?.card?.completeAddress || "Adress not found"}
        </p>
      </div>
      <div className="p-2  my-4 mx-4">
        <div className="flex justify-center">
          <p className="font-bold text-black">
            For better experience, download the Swiggy app now
          </p>
        </div>
        <div className="flex justify-center my-4">
          <img
            className="h-12 px-2 hover:cursor-pointer"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              )
            }
          />
          <img
            className="h-12 hover:cursor-pointer"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"
              )
            }
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

UpdatedFooter.propTypes = {
  footerinfo: PropTypes,
};

export default UpdatedFooter;
