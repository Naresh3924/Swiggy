import PropTypes from "prop-types";
import React from "react";

const BrandCard = ({ brands }) => {
  return (
    <div className="p-4 border-2 m-2 rounded-lg w-72 text-center bestPlaceCardShadow">
      <p>{brands?.text}</p>
    </div>
  );
};
BrandCard.propTypes = {
  brands: PropTypes,
};
export default BrandCard;
