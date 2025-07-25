import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { togglesigninbar } from "../../utils/userSlice";

const Sigin = () => {
  const [phone, setphone] = useState();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(phone);
  };

  return (
    <div>
      <form
        className="modal shadow-xl rounded-lg"
        onSubmit={handleLogin}
      >
        <AiOutlineClose
          className="w-10 h-10 py-2 my-2 hover:cursor-pointer"
          onClick={() => dispatch(togglesigninbar(true))}
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
          className="flex border h-16 p-2 my-4 w-[400px] mx-auto"
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          required
        />

        <button
          type="submit"
          className="border bg-orange-600 text-white h-16 p-2 my-4 w-[400px] mx-auto"
        >
          LOGIN
        </button>

        <p className="text-sm ">
          By clicking on Login, I accept the{" "}
          <button className="font-bold text-sm">
            Terms & Conditions & Privacy Policy
          </button>
        </p>
      </form>
    </div>
  );
};

export default Sigin;
