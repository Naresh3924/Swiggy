import React, { Fragment } from "react";
import { LOGO_URL } from "../utils/content";
import {
  ChevronDown,
  HelpCircle,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from "../utils/sidebarSlice";
import { togglesigninbar } from "../utils/userSlice";
import Sigin from "./Authentication/Sigin";
import SidebarMenu from "./SidebarMenu";
import {Link} from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch();
  const toggelsigninbar = useSelector((store) => store.user.signinSidebar);
  const toggelsidebar = useSelector((store) => store.sidebar.sidebar);

  return (
    <Fragment>
      <div className="flex flex-wrap p-3 justify-center font-bold shadow items-center fixed bg-white  w-full">
        <img className="h-8" src={LOGO_URL} alt="logo" />

        <button className="flex mx-2 font-normal">
          <p
            className="font-bold mx-2 border-b-2 border-black hover:text-orange-700"
            onClick={() => dispatch(togglesidebar())}
          >
            <div className="flex">
              Other
              <ChevronDown className="" />
            </div>
          </p>
        </button>
        <ul className="flex mx-2">
          <li className="mx-4">Swiggy Corporate</li>
          <Link to="/search"><li className="mx-4 flex hover:text-orange-700 hover:cursor-pointer ">
            <Search className=" mx-2 " /> Search
          </li></Link>
          <li className="mx-4 flex ">
            <BiSolidOffer className="mx-2 my-1 " /> Offers{" "}
            <span className="text-[10px] text-orange-500 font-bold ml-1 -my-2">
              New
            </span>
          </li>
          <li className="mx-4 flex">
            <HelpCircle className="mx-2" />
            Help
          </li>
          <li
            className="mx-4 flex hover: cursor-pointer hover:text-orange-700"
            onClick={() => dispatch(togglesigninbar())}
          >
            <User className="mx-2" />
            User
          </li>
          <li className="mx-4 flex">
            <ShoppingCart className="mx-2" />
            Cart
          </li>
        </ul>
      </div>
      {toggelsigninbar && <Sigin />}
      {toggelsidebar && <SidebarMenu />}
    </Fragment>
  );
};

export default Header;
