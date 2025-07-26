import React from 'react'
import useRestaurantCollection from '../utils/useRestaurantCollection'
import TopListRes from './TopListRes'
import {Link} from "react-router-dom";
const TopRestaurant = () => {
  const { TopRestaurntInfo , TopRestaurantHeader} = useRestaurantCollection();

  return (
    <div className="w-3/3  py-2 my-2">
      <h1 className="font-bold text-lg mb-2">{TopRestaurantHeader.title}</h1>
      <div className="flex border-b-2 overflow-x-auto space-x-6 scrollbar-hide px-2">
        {TopRestaurntInfo.map(top => (
         <Link to="/toprestaurantmenu" key={top.info?.id}>  <TopListRes  topResInfo={top.info} /></Link>
        ))}
      </div>
    </div>
  );
}

export default TopRestaurant;
