import { useEffect, useState } from 'react'

const useRestaurantCollection = () => {
  const [ResCollectionItem, setResColectionItem] = useState([]);
  const [ResCollectionHeader,setResCollectionHeader]=useState([]);
  const [TopRestaurntInfo,setToprestaurantInfo]=useState([]);
  const [TopRestaurantHeader, setTopRestaurantHeader]=useState([]);
  const [RestaurantInfo,setRestaurantInfo]=useState([]);
  const [RestaurantInfoHeader,setRestaurantInfoHeader]=useState([])

  const RestaurantCollection = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const itemcollection =
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    const TopResItems=json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const Restuarntcardinfo=json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResColectionItem(itemcollection)
      setResCollectionHeader(json.data?.cards[0]?.card?.card?.header)
      setToprestaurantInfo(TopResItems)
      setTopRestaurantHeader(json.data?.cards[1]?.card?.card?.header)
      setRestaurantInfo(Restuarntcardinfo)
      setRestaurantInfoHeader(json.data?.cards[2]?.card?.card)



  };

  useEffect(() => {
    RestaurantCollection();
  }, []);

  return {ResCollectionItem , ResCollectionHeader,TopRestaurntInfo,TopRestaurantHeader,RestaurantInfo,RestaurantInfoHeader};
}

export default useRestaurantCollection