import React from 'react'
import Collection from './Collection'
import TopRestaurant from './TopRestaurant'
import RestaurantContainer from './RestaurantContainer'


const Body = () => {

  return (
    <div className='overflow-hidden py-12 px-40'>
        <Collection/>
        <TopRestaurant/>
        <RestaurantContainer/>
    </div>
  )
}

export default Body