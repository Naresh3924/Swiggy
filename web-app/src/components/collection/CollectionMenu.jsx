import React from "react";
import PropTypes from "prop-types";
import CollectionCard from "./CollectionCard";

const CollectionMenu = ({ collectionInfo }) => {
  const collectioninfo = collectionInfo?.data?.cards?.filter(
    (i) =>
      i.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead"
  );
  const title = collectioninfo?.[0]?.card?.card?.title;
  const description = collectioninfo?.[0]?.card?.card?.description;

  const text =
    collectionInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.text;

  const filtercollectondata = collectionInfo?.data?.cards.filter(
    (i) =>
      i.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const sortConfigs =
    collectionInfo?.data?.cards?.[1]?.card?.card?.sortConfigs || [];

  return (
    <div className=" ">
      <h1 className="text-4xl font-bold py-2">{title}</h1>
      <p className="py-2 text-lg text-gray-700 font-bold">{description}</p>
      {sortConfigs.length > 0 && (
        <div className="py-4 ">
          <select className="border shadow-lg rounded-full text-center py-2 hover:cursor-pointer ">
            <option value="">Sort By</option>
            {sortConfigs.map((config) => (
              <option
                className="p-2 m-2 rounded-lg shadow-lg  hover:cursor-pointer"
                key={config.key}
              >
                {config.title}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold py-2 my-2">{text}</h1>
      </div>
      <div className="flex flex-wrap ">
        {filtercollectondata?.map((item) => (
          <div key={item?.card?.card?.info?.id} className="">
            <CollectionCard collectiondatainfo={item?.card?.card} />
          </div>
        ))}
      </div>
    </div>
  );
};

CollectionMenu.propTypes = {
  collectionInfo: PropTypes,
};

export default CollectionMenu;
