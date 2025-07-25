import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./content";

const useRestaurantMenu = () => {
  const [ResMenuinfo, setResMenuinfo] = useState({});

  useEffect(() => {
    const fetchMenu = async () => {
      
        const data = await fetch(RES_MENU_URL);
        const json = await data.json();
        setResMenuinfo(json);
    };

    fetchMenu();
  }, []);

  return ResMenuinfo;
};

export default useRestaurantMenu;
