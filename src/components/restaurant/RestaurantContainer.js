import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import { Fragment } from "react/jsx-runtime";

const RestaurantContainer = ({ restaurant }) => {
  const { restaurantInfoCard, restaurantInfoHeader } = restaurant || {};

  return (
    <Fragment>
      <div className="w-3/3  ">
        <h1 className="font-bold text-2xl my-4">
          {restaurantInfoHeader?.title}
        </h1>
        <div className="flex flex-wrap  justify-between mx-1  ">
          {restaurantInfoCard?.map((item) => (
            <Link
              key={item?.info?.id}
              to={`/restaurantdetail/${item?.info?.id}`}
            >
              <RestaurantCard resInfo={item} />
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RestaurantContainer;
