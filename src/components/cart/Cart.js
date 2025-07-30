import { useSelector } from "react-redux";
import CategoriesCard from "./categoriesCard";

const Cart = () => {
  const itemcards = useSelector((store) => store?.cart?.items);
 
  return (
    <div className="m-w-[200px] mx-[300px] py-16 px-1 space-y-6 ">
        <CategoriesCard itemCards={itemcards} />
      </div>
  );
};

export default Cart;
