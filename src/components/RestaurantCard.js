import React from 'react'
import { RES_URL } from "../utils/content";

const RestaurantCard = ({ resInfo }) => {

  const { name, avgRating, cuisines, cloudinaryImageId } = resInfo.info;
  return (
    <div className=' w-64 h-76 space-x-6 shadow my-2 rounded-lg'>
      <img
        className='w-[275px] h-[200px]  rounded-lg'
        alt="res-info"
        src={RES_URL + cloudinaryImageId}
      />
      <div className="p-2">
        <h2 className="font-semibold">{name}</h2>
        <p>⭐ {avgRating}</p>
        <p className="text-sm text-gray-500">{cuisines?.join(", ").slice(0, 70)}</p>
      </div>
    </div>
  )
}

export default RestaurantCard