

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const CarouselCard = ({ data, idx }) => {
  const { src1, src2, src3, src4, textObj } = data;

  const getPosition = (index) => {
    const positions = [0, 2, 1, 3];
    return positions[index % positions.length];
  };

  const position = getPosition(idx);
  const renderImage = (src, index) => (
    <div key={index} className='rounded-md cursor-pointer overflow-hidden' style={{ width: '99%', height: '210px', position: 'relative' }}>
      {position === index ? (
        <div className={`${textObj.color} h-full p-4 px-5 text-white`}>
          <div>{textObj.username}</div>
          <div className='text-[16px] font-light mb-2'>{textObj.address}</div>
          <div className='px-[5px] py-1 font-medium'>{textObj.content}</div>
        </div>
      ) : (
        <Image
          className='rounded-md hover:scale-110 duration-500 transition-transform object-cover'
          src={src}
          layout='fill'
          alt='image'
        />
      )}
    </div>
  );

  return (
    <div className='flex w-full justify-between'>
      <div className='p-2 w-[46%]'>
        <div className='rounded-md cursor-pointer overflow-hidden' style={{ width: '100%', height: '432px', position: 'relative' }}>
          <Image
            className='rounded-md hover:scale-110 duration-500 transition-transform object-cover'
            src={src1}
            layout='fill'
            alt='image'
          />
        </div>
      </div>

      <div className='p-2 w-full'>
        <div className='grid grid-cols-2 gap-x-3 gap-y-3'>
          {renderImage(src2, 0)}
          {renderImage(src3, 1)}
          {renderImage(src4, 2)}
          {renderImage(src1, 3)}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
