import React from 'react'
import Collection from './Collection'
import TopRestaurant from './TopRestaurant'
import RestaurantContainer from './RestaurantContainer'
import { useSelector } from 'react-redux'


const Body = () => {
  const toggelsigninbar = useSelector((store) => store.user.signinSidebar);
  const toggelsidebar = useSelector((store) => store.sidebar.sidebar);

  return (
    <div className={'overflow-hidden py-12 px-24 '}>
      <Collection />
      <TopRestaurant />
      <RestaurantContainer />
    </div>
  )
}

export default Body