import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";

const Account = () => {
  const [Signup, setSignup] = useState(false);
  const [Login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setSignup(false);
  };

  const handleSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  return (
    <>
      {Signup ? (
        <div className="border-l-2 border-dotted border-gray-400 h-[770px] -mx-4 absolute"></div>
      ) : Login ? (
        <div className="border-l-2 border-dotted border-gray-400 h-3/4 -mx-4 absolute"></div>
      ) : (
        <div className="border-l-2 border-dotted border-gray-400 h-96 -mx-4 absolute"></div>
      )}
      <div className="flex absolute py-1 my-4 -mx-10 px-2 border shadow bg-white">
        <HiOutlineUser size={34} />
      </div>

      <div className="bg-white px-5 py-4 m-3">
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
              <div className="mt-4 pt-4 ">
                <button
                  className="text-green-600 border border-green-600  mx-6 font-bold py-2 w-64"
                  onClick={handleLogin}
                >
                  <p className="font-normal">Have an account?</p>
                  LOGIN
                </button>

                <button
                  className="bg-green-600 text-white border-green-600  mx-6 font-bold py-2 w-64"
                  onClick={handleSignup}
                >
                  <p>New to Swiggy?</p>
                  SIGN UP
                </button>
              </div>
            ) : (
              <>
                {Login && !Signup && (
                  <div className="px-4 w-96">
                    <p className="py-2 text-sm font-semibold text">
                      <span className="text-gray-500">
                        Enter Login details or{" "}
                      </span>
                      <span
                        className="text-orange-500 hover:cursor-pointer"
                        onClick={handleSignup}
                      >
                        create an account
                      </span>
                    </p>
                    <div>
                      <input
                        className="text-start  border w-full py-3 my-3 px-4 "
                        type="tel"
                        placeholder="Phone number"
                      />
                    </div>
                    <div>
                      <button className=" text-white bg-green-600 w-full py-3 my-3 px-4">
                        LOGIN
                      </button>
                      <p className="text-sm  font-bold">
                        By clicking on Login, I accept the Terms & Conditions &
                        Privacy Policy
                      </p>
                    </div>
                  </div>
                )}
                {!Login && Signup && (
                  <div className="p-4">
                    <p className="pb-4 text-sm font-semibold text">
                      <span className="text-gray-500"> Sign up or </span>
                      <span
                        className="text-orange-500 hover:cursor-pointer"
                        onClick={handleLogin}
                      >
                        Log in to your account
                      </span>
                    </p>

                    <div className="border w-96 ">
                      <div>
                        <input
                          className="   border-b  w-full py-3 my-3 px-4"
                          type="tel"
                          placeholder="Phone number"
                        />
                      </div>
                      <div>
                        <input
                          className=" border-b  w-full py-3 my-3 px-4"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <input
                          className="  w-full py-2 my-3 px-4"
                          type="email"
                          placeholder="Email "
                        />
                      </div>
                    </div>
                    <div className="w-96 py-2 my-3">
                      <p className="text-blue-400 font-bold p-2">
                        Have a referral code?
                      </p>
                      <button className="text-white bg-green-600 w-full py-3 my-3 px-4 ">
                        CONTINUE
                      </button>
                      <p className=" text-sm  font-bold text">
                        By clicking on Login, I accept the Terms & Conditions &
                        Privacy Policy
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
