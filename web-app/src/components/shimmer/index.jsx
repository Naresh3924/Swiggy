import React, { Fragment } from "react";
import CollectionShimmer from "./collectionShimmer";
import RestaurantShimmer from "./restaurantShimmer";

export default function Shimmer() {
  const shimmer = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <Fragment>
      <div className="">
        <div className="flex">
          {shimmer?.map((i) => (
            <div key={i.id}>
              <CollectionShimmer i={i.id} />
            </div>
          ))}
        </div>
        <div className="flex">
          {shimmer?.map((i) => (
            <div key={i.id}>
              <RestaurantShimmer i={i.id} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
