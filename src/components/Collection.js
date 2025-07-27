import ItemsCollection from "./ItemsCollection";
import { Link } from "react-router-dom";

const Collection = ({ restaurant }) => {
  const { collectionCard, collectionHeader } = restaurant || {};

  return (
    <div className="w-3/3 py-4 px-2 my-2">
      <h1 className="font-bold text-2xl">{collectionHeader?.title}</h1>
      <div className="flex  border-b-2 overflow-x-auto space-x-6 scrollbar-hide">
        {collectionCard?.map((collection) => (
          <Link key={collection.id} to={`restarantdetail/${collection.id}`}>
            <ItemsCollection collectionInfo={collection} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
