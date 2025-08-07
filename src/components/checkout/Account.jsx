import React from "react";
import { HiOutlineUser } from "react-icons/hi";

const Account = () => {
  return (
    <div>
      <div className="border-l-2 border-dotted border-gray-400 h-96 -mx-4 absolute "></div>
      <div className="flex absolute py-1 my-4 -mx-10 px-2 border shadow bg-white  ">
        <HiOutlineUser size={34} />
      </div>
      <div className=" bg-white p-4 m-3">
        <div className="flex   ">
          <div>
            <div className="text-lg p-2 m-2 ">
              <h1 className="font-bold ">Account</h1>
              <p className="">
                To place your order now, log in to your existing account or sign
                up.
              </p>
            </div>

            <div className=" mt-4 pt-4">
              <button className=" text-green-600 border border-green-600 px-6 mx-6 font-bold py-2">
                <p className="font-normal">Have an account?</p> LOGIN
              </button>
              <button
                className=" bg-green-600 text-white border-green-600 px-6 mx-6 font-bold py-2"
                onClick={() => "siged in"}
              >
                <p className="fon">New to swiggy?</p>
                SIGN UP
              </button>
            </div>
          </div>

          <div className="px-24 py-4">
            <img
              className="w-40 "
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
