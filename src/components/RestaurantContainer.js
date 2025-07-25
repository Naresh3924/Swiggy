import React from 'react'
import RestaurantCard from './RestaurantCard'
import useRestaurantCollection from '../utils/useRestaurantCollection'
import {Link} from 'react-router-dom';

const RestaurantContainer = () => {

  const{RestaurantInfo,RestaurantInfoHeader}=useRestaurantCollection()
  return (
    <div className='w-3/3 mx-36 '>
      <h1 className='font-bold text-2xl my-4'>{RestaurantInfoHeader.title}</h1>
      <Link to="/restaurantmenu"><div className='flex flex-wrap justify-between mx-2 '>
        {RestaurantInfo.map(item=><RestaurantCard key={item.info.id} resInfo={item}/>)}
      </div>
      </Link>
    </div>
  )
}

export default RestaurantContainer