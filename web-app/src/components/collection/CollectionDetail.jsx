import React, { useEffect, useState } from "react";
import CollectionMenu from "./CollectionMenu";
import { useParams } from "react-router-dom";

const CollectionDetail = () => {
  const [collectionMenuInfo, setCollectionMenuInfo] = useState([]);
  const { collectionId } = useParams();

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&collection=${collectionId}&tags=layout_BAU_Contextual%2Cpongal&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );
        const json = await data.json();
        console.log("API Response:", json);
        setCollectionMenuInfo(json);
      } catch (error) {
        console.error("Error fetching collection details:", error);
      }
    };

    if (collectionId) {
      fetchCollection();
    }
  }, [collectionId]);

  return (
    <div className="py-24 px-24">
      {collectionMenuInfo ? (
        <CollectionMenu collectionInfo={collectionMenuInfo} />
      ) : (
        <p>Loading collection details...</p>
      )}
    </div>
  );
};

export default CollectionDetail;
