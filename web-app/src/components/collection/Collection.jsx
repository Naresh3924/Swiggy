import React, { Fragment } from "react";
import ItemsCollection from "./ItemsCollection";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Collection = ({ restaurant }) => {
  const { collectionCard, collectionHeader } = restaurant || {};

  const getCollectionId = (collection) => {
    const entityId = collection?.entityId;
    if (!entityId) return null;

    const queryString = entityId.includes("?") ? entityId.split("?")[1] : "";
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get("collection_id") || null;
  };

  return (
    <Fragment>
      <div className="w-3/3 py-4 px-2 my-2">
        <h1 className="font-bold text-2xl">{collectionHeader?.title}</h1>

        <div className="flex border-b-2 overflow-x-auto space-x-6 scrollbar-hide">
          {collectionCard?.map((collection) => {
            const collectionId = getCollectionId(collection);

            return (
              <Link
                data-testid="collectionDetails"
                key={collection.id}
                to={collectionId ? `/collectiondetail/${collectionId}` : "#"}
              >
                <ItemsCollection collectionInfo={collection} />
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

Collection.propTypes = {
  restaurant: PropTypes.object,
};

export default Collection;
