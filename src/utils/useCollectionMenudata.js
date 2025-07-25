import { useEffect, useState } from 'react';

const useCollectionMenudata = (resId) => {
  const [collectioninfoheader, setcollectioninfoheader] = useState([]);
  const [collectionSortedBY, setcollectionSortedBY] = useState([]);
  const [collectioncardinfo,setcollectioncardinfo]=useState([]);

  const CollectionMenudata = async () => {

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&collection=83639&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await data.json();


      const collectionres=json.data?.cards.filter(
  (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")

      setcollectioninfoheader(json.data?.cards[0]?.card?.card);
      setcollectionSortedBY(json.data?.cards[1]?.card?.card?.sortConfigs);
      setcollectioncardinfo(collectionres)
  };

  useEffect(() => {
     CollectionMenudata();
  }, []);

  return { collectioninfoheader, collectionSortedBY,collectioncardinfo };
};

export default useCollectionMenudata;
