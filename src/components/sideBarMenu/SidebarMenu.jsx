import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PiMapPin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { addSearchResult } from "../../redux/slice/searchSlice";
import { togglesidebar } from "../../redux/slice/sidebarSlice";
import { Search_api } from "../../utils/constant";
import axios from "axios";

const SidebarMenu = () => {
  const [searchtext, setsearchtext] = useState("");
  const [updatedsearch, setupdatedsearch] = useState([]);
  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    setsearchtext(e.target.value);
  };

  useEffect(() => {
    if (searchtext.length > 0) {
      const i = setTimeout(async () => {
        const res = await axios.get(Search_api + searchtext);
        setupdatedsearch(res?.data?.data);
        dispatch(addSearchResult(res?.data.data));
      }, 1000);
      return () => clearTimeout(i);
    }
  }, [searchtext, dispatch]);

  return (
    <div className="sideBarModal shadow-xl rounded-lg ">
      <AiOutlineClose
        className="w-10 h-10 py-2 my-2  hover:cursor-pointer"
        onClick={() => dispatch(togglesidebar(true))}
      />
      <div className="px-5 py-2">
        <input
          data-testid="searchtext"
          className="border shadow p-3 w-72"
          type="text"
          placeholder="Search for area, street name"
          onChange={handleSearchText}
        />
      </div>
      <div className="px-5 py-2" data-testid="searchdata">
        {updatedsearch.map((search) => (
          <div
            className="border-b-2 text-xs font-normal flex flex-wrap"
            key={search.place_id}
          >
            <PiMapPin className="my-3" />
            <h1 className="font-bold text-[17px] p-2">
              {search.structured_formatting.main_text}
            </h1>
            <p className="flex p-2">
              {search.structured_formatting.secondary_text}
            </p>
          </div>
        ))}
      </div>
      <div className="px-5 py-2">
        <button className="border text-orange-500  hover:text-orange-600 p-3 w-72">
          Get current location
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
