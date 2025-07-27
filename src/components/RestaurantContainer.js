import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantContainer = ({ restaurant }) => {
  const { restaurantInfoCard, restaurantInfoHeader } = restaurant || {};
  const shimmer = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <>
      <div className="flex flex-wrap ">
        {restaurantInfoCard?.length === 0 &&
          shimmer?.map((i) => (
            <div className="flex flex-wrap" key={i.id}>
              <Shimmer i={i.id} />
            </div>
          ))}
      </div>
      <div className="w-3/3  ">
        <h1 className="font-bold text-2xl my-4">
          {restaurantInfoHeader?.title}
        </h1>
        <div className="flex flex-wrap  mx-1  ">
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
    </>
  );
};

export default RestaurantContainer;
