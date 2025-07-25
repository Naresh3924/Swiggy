import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { togglesidebar } from "../utils/sidebarSlice";
import { addSearchResult } from "../utils/searchSlice";
import { Search_api } from "../utils/content";
import { PiMapPin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

const SidebarMenu = () => {
  const [searchtext, setsearchtext] = useState("");
  const [updatedsearch, setupdatedsearch] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchtext.length > 0) {
      const i = setTimeout(async () => {
        const data = await fetch(Search_api + searchtext);
        const json = await data.json();
        console.log(json);
        setupdatedsearch(json.data);
        dispatch(addSearchResult(json.data));
      }, 1000);

      return () => clearTimeout(i);
    }
  }, [searchtext, dispatch]);

  return (
    <div className="text-black absolute w-3/3 h-full font-bold text-lg bg-white">
      <AiOutlineClose
        className="w-10 h-10 py-2 my-2 mx-24 hover:cursor-pointer"
        onClick={() => dispatch(togglesidebar(true))}
      />
      <input
        className="border shadow my-4 mx-24 w-72 h-12 p-2 m-2"
        type="text"
        placeholder="Search for area, street name"
        onChange={(e) => setsearchtext(e.target.value)}
      />
      {updatedsearch.map((search) => (
        <div
          className="border-b-2 my-4 mx-24 w-96 text-xs font-normal flex flex-wrap"
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
      <button className="border flex my-4 mx-24 w-72 h-16 p-2 m-2 hover:text-orange-600">
        Get current location
      </button>
      <button className="border my-4 flex mx-24 w-72 h-28 p-2 m-2 hover:text-orange-600">
        Addrees
      </button>
      <button className="border my-4 flex mx-24 w-72 h-44 p-2 m-4 hover:text-orange-600">
        Recent Search
      </button>
    </div>
  );
};

export default SidebarMenu;
