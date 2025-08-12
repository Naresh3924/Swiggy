import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";

const Account = () => {
  const [Login, setLogin] = useState(false);
  const [Signup, setSignup] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setSignup(false);
  };

  const handleSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  return (
    <div>
      {!Login && !Signup && (
        <div className="border-l-2 border-dotted border-gray-400 h-96 -mx-4 absolute"></div>
      )}

      {Login && !Signup && (
        <div className="border-l-2 border-dotted border-gray-400 h-[550px] -mx-4 absolute"></div>
      )}

      {!Login && Signup && (
        <div className="border-l-2 border-dotted border-gray-400 h-[800px] -mx-4 absolute"></div>
      )}

      <div className="flex absolute py-1 my-4 -mx-10 px-2 border shadow bg-white">
        <HiOutlineUser size={34} />
      </div>

      <div className="bg-white p-4 m-3">
        <div className="flex">
          <div>
            <div className="text-lg p-2 m-2">
              <h1 className="font-bold">Account</h1>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
            </div>
            {!Login && !Signup ? (
              <div className="mt-4 pt-4">
                <button
                  className="text-green-600 borderbg-green-700 border border-green-700 px-6 mx-6 font-bold py-2"
                  onClick={handleLogin}
                >
                  <p className="font-normal text-sm ">Have an account?</p> LOGIN
                </button>
                <button
                  className=" text-white bg-green-700 border border-green-700 px-6 mx-6 font-bold py-2"
                  onClick={handleSignup}
                >
                  <p className="font-normal text-sm ">New to Swiggy?</p>
                  SIGN UP
                </button>
              </div>
            ) : (
              <>
                {/* Login form */}
                {Login && !Signup && (
                  <div className=" m-2 p-2 ">
                    <div className="flex ">
                      <div>
                        <p>Enter Login details or</p>
                      </div>
                      <dv className="px-1">
                        <p
                          className="text-orange-600 hover:cursor-pointer"
                          onClick={handleSignup}
                        >
                          create an account
                        </p>
                      </dv>
                    </div>
                    <div className="my-2 py-2">
                      <input
                        className="w-96 border p-4 "
                        type="tel"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="  my-2 py-2">
                      <button className="text-white bg-green-700 border border-green-700 w-96  font-bold py-2 p-4 ">
                        Login
                      </button>
                      <div className="my-4">
                        <p className="text-sm">
                          By clicking on Login, I accept the Terms & Conditions
                          & Privacy Policy
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Signup form */}
                {!Login && Signup && (
                  <div className="m-2 p-2">
                    <div className="flex ">
                      <div>
                        <p>Sign up or</p>
                      </div>
                      <dv className="px-1">
                        <p
                          className="text-orange-600 hover:cursor-pointer"
                          onClick={handleLogin}
                        >
                          log in to your account
                        </p>
                      </dv>
                    </div>

                    <div className="my-4 w-96 border-2 ">
                      <input
                        className=" border-b-2 p-4 w-full "
                        type="tel"
                        placeholder="Phone Number"
                      />
                      <input
                        className="border-b-2 p-4 w-full"
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        className="p-4 "
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="my-4 py-2">
                      <div className="p-2">
                        <p className="text-blue-600 ">Have a referral code?</p>
                      </div>
                      <div className=" p-2">
                        <button className="text-white bg-green-700 border border-green-700 w-96  font-bold py-2 p-4 ">
                          CONTINUE
                        </button>
                      </div>
                      <div className="p-2">
                        <p className="mt-2">
                          By creating an account, I accept the Terms &
                          Conditions & Privacy Policy
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="px-24 py-4">
            <img
              className="w-40"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Login "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
