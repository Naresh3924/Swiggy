import React from "react";
import PropTypes from "prop-types";
import { RES_URL } from "../../utils/constant";

const CollectionCard = ({ collectiondatainfo }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } =
    collectiondatainfo?.info || {};
  return (
    <>
      <div className=" w-64 h-80 space-x-6 cusomShadow my-2 rounded-lg mx-1 hover:cursor-pointer">
        <img
          className="w-[275px] h-[200px]  rounded-lg"
          alt="res-info"
          src={RES_URL + cloudinaryImageId}
        />
        <div className="py-2">
          <h2 className="font-semibold">{name}</h2>
          <p>⭐ {avgRating}</p>
          <p className="text-sm font-semibold text-gray-500">
            {cuisines?.join(", ").slice(0, 50)}
          </p>
        </div>
      </div>
    </>
  );
};

CollectionCard.propTypes = {
  collectiondatainfo: PropTypes,
};

export default CollectionCard;
