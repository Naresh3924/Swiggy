import React from 'react'
import { RES_URL } from "../utils/content";

const RestaurantCard = ({resInfo}) => {

  const { name, avgRating, cuisines, cloudinaryImageId } = resInfo.info;
  return (
    <div className=' min-w-[150px] h-[300px] space-x-6 '>
      <img
      className='w-[275px] h-[200px] rounded-lg'
      alt="res-info"
      src={RES_URL+cloudinaryImageId}
      />
      <h2 className="font-semibold">{name}</h2>
      <p>⭐ {avgRating}</p>
      <p className="text-sm text-gray-500">{cuisines?.join(", ") }</p>
    </div>
  )
}

export default RestaurantCard