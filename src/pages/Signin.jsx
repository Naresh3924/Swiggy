import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { togglesigninbar } from "../redux/slice/userSlice";

const Signin = () => {
  const [phone, setphone] = useState();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleMobileNumber = (e) => setphone(e?.target?.value);
  const handleToggle = () => {
    dispatch(togglesigninbar(true));
  };

  return (
    <div>
      <form className="modal shadow-xl rounded-lg" onSubmit={handleLogin}>
        <AiOutlineClose
          data-testid="outlineclose"
          className="w-10 h-10 py-2 my-2 hover:cursor-pointer"
          onClick={handleToggle}
        />
        <img
          className="h-32 w-22 mx-auto "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="login"
        />
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <button type="button" className="text-orange-500 font-bold my-4">
          or create an account
        </button>

        <input
          data-testid="phonenumber"
          className="flex border h-16 p-2 my-4 w-[400px] mx-auto"
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={handleMobileNumber}
          required
        />

        <button
          data-testid="submit"
          type="submit"
          className="border bg-orange-600 text-white h-16 p-2 my-4 w-[400px] mx-auto"
          onClick={() => {
            console.log("CLICKED");
          }}
        >
          LOGIN
        </button>
        <div className="flex justify-center">
          <p className="text-sm ">By clicking on Login, I accept the </p>
          <button
            data-testid="terms"
            className="font-bold text-sm"
            onClick={() => {
              console.log("CLICKED");
            }}
          >
            Terms & Conditions & Privacy Policy
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
