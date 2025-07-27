import useRestaurantMenu from '../utils/useRestaurantMenu';
import TopRestaurantMenu from './TopRestaurantMenu';

const RestaurantMenu = () => {
  const ResMenuInfo = useRestaurantMenu();

  return (
    <div>
        <TopRestaurantMenu resmenu={ResMenuInfo?.data} />
    </div>
  );
};

export default RestaurantMenu;
