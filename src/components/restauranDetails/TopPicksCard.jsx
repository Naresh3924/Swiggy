import { Fragment } from "react";
import { RES_URL } from "../../utils/constant";

const TopPicksCard = ({ toppickscard }) => {
  return (
    <Fragment>
      {toppickscard?.map((item) => (
        <div>
          <img alt="top-card" src={RES_URL} />
        </div>
      ))}
    </Fragment>
  );
};

export default TopPicksCard;
