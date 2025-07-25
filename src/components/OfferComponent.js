import React from 'react';

const OfferComponent = ({ offer }) => {
  return (
    <div className='flex border border-black rounded-lg'>
       <img
      className='h-12 my-4 mx-2  '
      alt="offer"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"/>
    
    <div className="w-[300px] h-[70px]  px-4 my-2 ">
      <button className="font-bold ">{offer?.header}</button>
      <p>{offer?.description}</p>
    </div>
    </div>
  );
};

export default OfferComponent;
