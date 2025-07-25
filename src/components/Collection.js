import React from "react";
import ItemsCollection from "./ItemsCollection";
import useRestaurantCollection from "../utils/useRestaurantCollection";
import { Link } from "react-router-dom";

const Collection = () => {
  const { ResCollectionItem, ResCollectionHeader } = useRestaurantCollection();

  return (
    <div className="w-3/3 py-4 px-2 my-2">
      <h1 className="font-bold text-2xl">{ResCollectionHeader?.title}</h1>

      <div className="flex  border-b-2 overflow-x-auto space-x-6 scrollbar-hide">
        {ResCollectionItem.map((collection) => (
          <Link key={collection.id} to={`/collectionmenu/${collection.id}`}>
            <ItemsCollection collectionInfo={collection} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
