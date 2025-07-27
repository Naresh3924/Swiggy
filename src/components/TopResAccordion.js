const TopResAccordion = ({ recomendedList }) => {
  const { itemCards } = recomendedList || {};
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
            <div className="font-bold">{item?.card?.info?.price}</div>
            <div>{item?.card?.info?.description}</div>
          </div>
          <div className="rounded-sm px-2">
            <img
              className="rounded-xl w-[200px]"
              alt="acc"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed"
            />
            <div className="absolute text-center mx-8 -my-6">
              <button className="bg-white  border border-slate-300 px-12 py-2 rounded-xl font-extrabold text-green-600 ">
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
