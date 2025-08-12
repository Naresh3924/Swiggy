import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { togglesigninbar } from "../redux/slice/userSlice";
import axios from "axios";

const Signin = () => {
  const [phone, setphone] = useState();
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [isSentOTP, setIsSentOTP] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleMobileNumber = (e) => {
    setphone(e?.target?.value);
  };

  const handleOTP = (e) => {
    setIsSentOTP(false);
    setOtp(e.target.value);
  };

  const handleToggle = () => {
    dispatch(togglesigninbar(true));
  };

  const sendOtp = async () => {
    const res = await axios.post("http://localhost:8080/send-otp", { phone });
    if (res.data.success) {
      setSessionId(res.data.sessionId);
      setVerifyOTP(true);
      setIsSentOTP(true);
    } else {
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    const res = await axios.post("http://localhost:8080/verify-otp", {
      otp,
      sessionId,
    });
    if (res.data.success) {
      alert("OTP verified!");
      setVerifyOTP(false);
      dispatch(togglesigninbar(false));
    } else {
      alert("OTP verification failed");
    }
  };

  return (
    <div>
      <form className="modal shadow-xl rounded-lg" onSubmit={handleLogin}>
        <div>
          <AiOutlineClose
            data-testid="outlineclose"
            className="absolute px-2  w-10 h-10  hover:cursor-pointer"
            onClick={handleToggle}
          />
          {isSentOTP && (
            <div className="bg-orange-200 py-1 ">{`OTP sent to this mobile number ${phone} `}</div>
          )}
        </div>
        <img
          className="h-32 w-22 mx-auto "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="login"
        />
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <button type="button" className="text-orange-500 font-bold my-4">
          or create an account
        </button>
        {verifyOTP ? (
          <input
            data-testid="otp"
            className="flex border h-16 p-2 my-4 w-[400px] mx-auto"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOTP}
            required
          />
        ) : (
          <input
            data-testid="phonenumber"
            className="flex border h-16 p-2 my-4 w-[400px] mx-auto"
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={handleMobileNumber}
            required
          />
        )}
        {verifyOTP ? (
          <button
            data-testid="submit"
            type="submit"
            className="border bg-orange-600 text-white h-16 p-2 my-4 w-[400px] mx-auto"
            onClick={verifyOtp}
          >
            VERIFY OTP
          </button>
        ) : (
          <button
            data-testid="submit"
            type="submit"
            className="border bg-orange-600 text-white h-16 p-2 my-4 w-[400px] mx-auto"
            onClick={sendOtp}
          >
            LOGIN
          </button>
        )}

        <div className="flex justify-center">
          <p className="text-sm ">By clicking on Login, I accept the </p>
          <button
            data-testid="terms"
            className="font-bold text-sm"
            onClick={() => {}}
          >
            Terms & Conditions & Privacy Policy
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
