import React from 'react'
import Collection from './Collection'
import TopRestaurant from './TopRestaurant'
import RestaurantContainer from './RestaurantContainer'


const Body = () => {

  return (
    <div className='overflow-hidden'>
        <Collection/>
        <TopRestaurant/>
        <RestaurantContainer/>
    </div>
  )
}

export default Body