import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import BrandCard from "../BrandCard";

const BestPlaceContainer = ({ restaurant }) => {
  const { bestPlaceInfo } = restaurant || {};
  const [initialValue, setInitialValue] = useState(0);
  const [indexValue, setIndexValue] = useState(12);

  const showMoreHandler = () => {
    setInitialValue(initialValue);
    setIndexValue(indexValue + 12);
  };
  return (
    <Fragment>
      <h1 className="font-bold text-2xl">{bestPlaceInfo?.title}</h1>
      <div className="w-3/3 py-4 px-2 my-2  ">
        <div className="flex flex-wrap ">
          {bestPlaceInfo?.brands
            ?.slice(initialValue, indexValue)
            ?.map((brands, id) => (
              <Link key={id} to={brands.link}>
                <BrandCard brands={brands} />
              </Link>
            ))}
        </div>

        {bestPlaceInfo?.brands?.length > indexValue && (
          <div className="text-center">
            <button
              className="w-32 mt-2  p-2 m-2 text-orange-500 border-2 rounded-lg "
              onClick={showMoreHandler}
            >
              Show More...
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

BestPlaceContainer.propTypes = {
  restaurant: PropTypes.shape({
    bestPlaceInfo: PropTypes.shape({
      title: PropTypes.string,
      brands: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string,
        })
      ),
    }),
  }),
};

export default BestPlaceContainer;
