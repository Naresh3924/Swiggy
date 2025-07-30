import { Fragment } from "react/jsx-runtime";
import ItemsCollection from "./ItemsCollection";
import { Link } from "react-router-dom";

const Collection = ({ restaurant }) => {
  const { collectionCard, collectionHeader } = restaurant || {};

  return (
    <Fragment>
      <div className="w-3/3 py-4 px-2 my-2 ">
        <h1 className="font-bold text-2xl">{collectionHeader?.title}</h1>
        <div className="flex  border-b-2 overflow-x-auto space-x-6 scrollbar-hide">
          {collectionCard?.map((collection) => (
            <Link key={collection.id} to={`collectiondetail/resId`}>
              <ItemsCollection collectionInfo={collection} />
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Collection;
