import React from "react";
import { useParams } from "react-router-dom";
import useCollectionMenudata from "../utils/useCollectionMenudata";
import RestaurantCard from "./RestaurantCard";

const CollectionMenu = () => {
  const { resId } = useParams();
  const { collectioninfoheader, collectionSortedBY,collectioncardinfo } =
    useCollectionMenudata(resId);

  return (
    <div className="w-3/3  py-4 px-2 my-2">
      <h1 className="text-3xl font-bold">{collectioninfoheader?.title}</h1>
      <p className="">{collectioninfoheader?.description}</p>
      <select className="my-4 rounded-full  border shadow text-center py-2 bg-slate-50">
        <option className="">Sort By</option>
        {collectionSortedBY.map((sortedBY) => (
          <option className=" shadow-lg rounded-full p-2 bg-slate-50" key={sortedBY.key}>
            {sortedBY.title }
          </option >
        ))}
      </select>
      <div className="flex flex-wrap justify-between p-2 m-2 ">
      {
        collectioncardinfo?.map(card=><div className=""><RestaurantCard key={card.card?.card?.info?.id} resInfo={card.card.card}/></div>)

      }
      </div>


      <div className="flex flex-wrap gap-6"></div>
    </div>
  );
};

export default CollectionMenu;
