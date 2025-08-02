import React from "react";
import { Fragment } from "react";
import { RES_URL } from "../../utils/constant";
import PropTypes from "prop-types";

const TopPicksCard = ({ toppickscard }) => {
  return (
    <Fragment>
      {toppickscard?.map((item) => (
        <div key={item?.id}>
          <img alt="top-card" src={item?.imageId + RES_URL} />
        </div>
      ))}
    </Fragment>
  );
};

TopPicksCard.propTypes = {
  toppickscard: PropTypes,
};

export default TopPicksCard;
