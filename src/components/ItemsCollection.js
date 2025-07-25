import React from 'react'
import { RES_URL } from '../utils/content'

const ItemsCollection = ({collectionInfo}) => {
  const{imageId}=collectionInfo;
  return (
    <div className='flex flex-col min-w-[150px] min-h-[200px]'>
      <img
      className='w-72 h-44'
      alt="collection-item"
      src={RES_URL + imageId}
      />

    </div>
  )
}

export default ItemsCollection