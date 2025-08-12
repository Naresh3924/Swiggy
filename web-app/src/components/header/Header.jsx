import React from "react";
import { Fragment } from "react";
import debounce from "lodash.debounce";

import { ChevronDown, HelpCircle, Search, User } from "lucide-react";
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Sigin from "../../pages/Signin";
import SidebarMenu from "../sideBarMenu/SidebarMenu";
import { Link } from "react-router-dom";
import { togglesigninbar } from "../../redux/slice/userSlice";
import { togglesidebar } from "../../redux/slice/sidebarSlice";
import { LOGO_URL } from "../../utils/constant";
import { updateToggleCart } from "../../redux/slice/restaurantSlice";
import CartDetailPopUp from "../cart/CartDetailPopUp";

const Header = () => {
  const dispatch = useDispatch();
  const toggelsigninbar = useSelector((store) => store.user.signinSidebar);
  const toggelsidebar = useSelector((store) => store.sidebar.sidebar);
  const itemCards = useSelector((store) => store?.cart?.items);
  const istoggleCartDetails = useSelector(
    (store) => store?.cart?.istoggleCartDetails
  );
  console.log("istoggleCartDetails", istoggleCartDetails);

  const handleMouseOver = () => {
    dispatch(updateToggleCart(true));
  };

  return (
    <Fragment>
      <div className="flex flex-wrap p-3 justify-center font-bold shadow items-center fixed bg-white  w-full ">
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
          <li className="mx-4  hover:text-orange-700 hover:cursor-pointer">
            Swiggy Corporate
          </li>
          <Link to="/search" data-testid="searchMenu">
            <li className="mx-4 flex hover:text-orange-700 hover:cursor-pointer ">
              <Search className=" mx-2 " /> Search
            </li>
          </Link>
          <li className="mx-4 flex  hover:text-orange-700 hover:cursor-pointer">
            <BiSolidOffer className="mx-2 my-1 " /> Offers{" "}
            <span className="text-[10px] text-orange-500 font-bold ml-1 -my-2">
              New
            </span>
          </li>
          <li className="mx-4 flex hover:text-orange-700 hover:cursor-pointer">
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
          <li className=" hover:text-orange-700 hover:cursor-pointer ">
            <Link
              to="/checkout"
              data-testid="cartDetails"
              className="flex"
              onMouseEnter={debounce(handleMouseOver, 300)}
              onClick={() => dispatch(updateToggleCart(false))}
            >
              <p className="bg-green-500 text-white px-2 mx-2 rounded-t-lg">
                {itemCards.length}
              </p>
              Cart
            </Link>
          </li>
        </ul>
      </div>

      {toggelsigninbar && <Sigin />}
      {toggelsidebar && <SidebarMenu />}
      {istoggleCartDetails && <CartDetailPopUp itemCards={itemCards} />}
    </Fragment>
  );
};

export default Header;
