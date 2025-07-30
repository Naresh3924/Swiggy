/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CollectionDetailapiCall } from '../../utils/util';
import { useParams } from 'react-router-dom';

const CollectionDetail = () => {
  const dispatch = useDispatch();
  const { resId } = useParams

  useEffect(() => {
    CollectionDetailapiCall({ resId, dispatch });
  }, [resId]);

  return (
    <div className="flex overflow-hidden py-12 px-24">
      <div className="w-3/3 py-4 px-2 my-8 mx-auto">
        <h1 className="text-3xl font-bold">title</h1>
        <p className="">description</p>
        <select className="my-4 rounded-full border shadow text-center py-2 bg-slate-50">
          <option className="">Sort By</option>
          {/* {collectionSortedBY.map((sortedBY) => (
            <option
              className="shadow-lg rounded-full p-2 bg-slate-50"
              key={sortedBY.key}
            >
              {sortedBY.title}
            </option>
          ))} */}
        </select>
        <div className="flex flex-wrap justify-between mx-2">
          {/* {collectioncardinfo?.map((card) => (
            <div className="">
              <RestaurantCard
                key={card.card?.card?.info?.id}
                resInfo={card.card.card}
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
