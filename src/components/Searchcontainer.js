import React, { useEffect, useState } from "react";
import { SEARCH_RES_API, SEARCH_RES_URL } from "../utils/content";

const Searchcontainer = () => {
  const [SearchResInfo, setSearchResInfo] = useState();
  const [SearchResInfoUpdated, setSearchResInfoUpdated] = useState([]);

  const handleSearchResInfo = async (value) => {
    setSearchResInfo(value);

    const data = await fetch(SEARCH_RES_API + value);
    const json = await data.json();
    console.log(json.data);
    setSearchResInfoUpdated(json.data?.suggestions);
  };

  useEffect(() => {
    handleSearchResInfo();
  }, []);

  return (
    <div className="w-2/3 py-4 px-2  h-full m-auto  ">
      <input
        className="border shadow   h-12 p-2 m-2 my-24 w-full"
        type="text"
        placeholder="Search restaurant and food"
        value={SearchResInfo}
        onChange={(e) => handleSearchResInfo(e.target.value)}
      />
      {SearchResInfoUpdated?.map((search) => (
        <div className="p-2 m-2 border  flex hover:cursor-pointer hover:bg-gray-200 items-center" key={search?.text}>
            <img
            className="h-14 rounded-lg"
            alt="search"
            src={SEARCH_RES_URL+search.cloudinaryId}
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
