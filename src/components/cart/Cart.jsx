import { useSelector } from "react-redux";
import CategoriesCard from "./CategoriesCard";

const Cart = () => {
  const itemcards = useSelector((store) => store?.cart?.items);

  return (
    <div className="m-w-[200px] mx-[300px] py-16 px-1 space-y-6 overflow-hidden ">
      <CategoriesCard itemCards={itemcards} />
    </div>
  );
};

export default Cart;
