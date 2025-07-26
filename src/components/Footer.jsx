/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100  border">
      <div className="flex justify-center border-b-2  py-5">
        <h1 className="font-bold text-2xl  py-5 ">
          For better experience,download the Swiggy app now
        </h1>
        <img
          className="w-72 h-20 px-5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt="social"
        />
        <img
          className="w-60 h-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt="social"
        />
      </div>
      <div className="flex  justify-between py-5 mx-48">
        <h1 className="font-bold text-1xl">Company</h1>
        <h1 className="font-bold text-1xl">Contact us</h1>
        <h1 className="font-bold text-1xl">Legal</h1>
        <h1 className="font-bold text-1xl">Life at Swiggy</h1>
        <h1 className="font-bold text-1xl">Available in:</h1>
      </div>
    </div>
  );
};

export default Footer;
