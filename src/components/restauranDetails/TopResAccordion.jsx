import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/slice/restaurantSlice";

const TopResAccordion = ({ recomendedList }) => {

  const { itemCards } = recomendedList || {};
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(updateCartItem(item));
  };

  return (
    <div>
      {itemCards?.map((item) => (
        <div
          className="flex justify-between border-t-2 my-4 py-5 "
          key={item?.card?.info?.id}
        >
          <div className="px-2 w-2/3">
            <img
              className="w-8"
              src="https://img.icons8.com/?size=100&id=EfABkyOzZSl7&format=png&color=000000"
              alt="check-icon"
            />
            <h1 className="font-bold py-2">{item?.card?.info?.name}</h1>
            <div className="font-bold flex">
              <span>&#8377;</span>
              <div className="px-1">{item?.card?.info?.price / 100}</div>
            </div>
            <div className="text-slate-600 font-semibold">
              {item?.card?.info?.description}
            </div>
          </div>
          <div className="rounded-sm px-2">
            <img
              className="rounded-xl w-[200px]"
              alt="acc"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item?.card?.info?.imageId
              }
            />
            <div className=" text-center mx-10 -my-6">
              <button
                className="bg-white hover:bg-slate-100  border border-slate-300   px-10 py-2 rounded-xl font-extrabold text-green-600 "
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopResAccordion;
