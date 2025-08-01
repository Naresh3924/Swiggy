import React from "react";
import { Fragment } from "react";
import { ChevronDown, HelpCircle, Search, User } from "lucide-react";
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Sigin from "../../pages/Signin";
import SidebarMenu from "../sideBarMenu/SidebarMenu";
import { Link } from "react-router-dom";
import { togglesigninbar } from "../../redux/slice/userSlice";
import { togglesidebar } from "../../redux/slice/sidebarSlice";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const toggelsigninbar = useSelector((store) => store.user.signinSidebar);
  const toggelsidebar = useSelector((store) => store.sidebar.sidebar);
  const itemCards = useSelector((store) => store?.cart?.items);

  return (
    <Fragment>
      <div className="flex flex-wrap p-3 justify-center font-bold shadow items-center fixed bg-white  w-full">
        <Link to="/" data-testid="restaurantMenu">
          <img className="h-8" src={LOGO_URL} alt="logo" />
        </Link>
        <button
          className="flex mx-2 font-normal"
          onClick={() => dispatch(togglesidebar())}
        >
          <div className="font-bold mx-2 border-b-2 border-black hover:text-orange-700">
            <div className="flex">
              Other
              <ChevronDown className="" />
            </div>
          </div>
        </button>
        <ul className="flex mx-2">
          <li className="mx-4">Swiggy Corporate</li>
          <Link to="/search" data-testid="searchMenu">
            <li className="mx-4 flex hover:text-orange-700 hover:cursor-pointer ">
              <Search className=" mx-2 " /> Search
            </li>
          </Link>
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
          <Link to="/cart" data-testid="cartDetails">
            <li className="mx-4 flex">
              {/* <ShoppingCart className="mx-2" /> */}
              {itemCards.length ? (
                <p className="bg-green-500 text-white px-2 mx-2 rounded-t-lg">
                  {itemCards.length}
                </p>
              ) : (
                <p className="bg-green-500 text-white px-2 mx-2 rounded-t-lg">
                  {itemCards.length}
                </p>
              )}
              Cart
            </li>
          </Link>
        </ul>
      </div>

      {toggelsigninbar && <Sigin />}
      {toggelsidebar && <SidebarMenu />}
    </Fragment>
  );
};

export default Header;
