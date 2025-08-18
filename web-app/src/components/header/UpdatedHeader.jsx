import React from "react";
import { LOGO_URL } from "../../utils/constant";
import { HelpCircle, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Sigin from "../../pages/Signin";
import { Link } from "react-router-dom";

const UpdatedHeader = () => {
  const dispatch = useDispatch();
  const toggelsigninbar = useSelector((store) => store?.user?.signinSidebar);
  return (
    <div className=" flex flex-wrap p-3 justify-between font-bold shadow items-center fixed bg-white  w-full">
      <div className="flex">
        <Link to="/">
          <img className="h-8" alt="logo" src={LOGO_URL} />
        </Link>
        <p>Secure Checkout</p>
      </div>

      <div className="flex">
        <li className="mx-4 flex hover:text-orange-700 hover:cursor-pointer">
          <HelpCircle className="mx-2" />
          Help
        </li>
        <li
          className="mx-4 flex hover: cursor-pointer hover:text-orange-700"
          onClick={() => dispatch(toggelsigninbar(true))}
        >
          <User className="mx-2" />
          User
        </li>
      </div>
      {toggelsigninbar && <Sigin />}
    </div>
  );
};

export default UpdatedHeader;
