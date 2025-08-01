import React from "react";
import { useEffect, useState } from "react";
import { SEARCH_RES_API, SEARCH_RES_URL } from "../../utils/constant";

const Searchcontainer = () => {
  const [SearchResInfo, setSearchResInfo] = useState();
  const [SearchResInfoUpdated, setSearchResInfoUpdated] = useState([]);

  const handleSearchResInfo = async (value) => {
    setSearchResInfo(value);
    const data = await fetch(SEARCH_RES_API + value);
    const json = await data.json();
    setSearchResInfoUpdated(json.data?.suggestions);
  };

  useEffect(() => {
    handleSearchResInfo();
  }, []);

  return (
    <div className="px-56 py-16 ">
      <input
        className="border shadow  p-3 m-2 w-full rounded-lg"
        type="text"
        placeholder="Search restaurant and food"
        value={SearchResInfo}
        onChange={(e) => handleSearchResInfo(e.target.value)}
      />
      {SearchResInfoUpdated?.map((search) => (
        <div
          className="p-3 m-3 border  flex hover:cursor-pointer hover:bg-gray-200 items-center"
          key={search?.text}
        >
          <img
            className="h-14 rounded-lg"
            alt="search"
            src={SEARCH_RES_URL + search.cloudinaryId}
          />
          <ul className="px-2 mx-2">
            <li className="font-bold">{search?.text}</li>
            <li className=" text-gray-500 ">{search?.type}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Searchcontainer;
