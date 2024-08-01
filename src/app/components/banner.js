'use client'
import React, { useState } from 'react';
import CustomSearch from './customSearch';

const Banner = () => {
  const [activeButton, setActiveButton] = useState('buy');
  const [mouseHover, setMouseHover] = useState(false);

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="flex justify-center items-center my-4 h-[64vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-mobile-bg sm:bg-tablet-bg md:bg-desktop-bg m-3 rounded-md bg-[top_80%] md:bg-[bottom_54%_left] lg:bg-[top_67%_center] xl:bg-[top_54%_center]">
      <div className="flex-col items-center justify-center text-center">
        <div className="text-white text-[25px] md:text-[50px] md:font-900 leading-tight mt-14 md:mt-0">
          Discover a place
          <br />
          you'll love to live
        </div>
        <div className="font-thin text-[16px] bg-blue-100 bg-opacity-10 inline-block rounded-md mt-9" onMouseEnter={()=>setMouseHover(true)} onMouseLeave={()=>setMouseHover(false)}>
          <button
            onClick={() => handleClick('buy')}
            className={`p-2 px-6 rounded-md ${
                mouseHover===true?`hover:bg-white hover:text-[#007882] text-white ${activeButton === 'buy'?'font-bold':''} `:
              activeButton === 'buy'
                ? 'bg-white text-[#007882] font-bold'
                : 'text-white'
            } ${activeButton !== 'buy' ? 'hover:bg-white hover:text-[#007882] ' : ''}`}
          >
            Buy
          </button>
          <button
            onClick={() => handleClick('rent')}
            className={`p-2 px-6 rounded-md ${
                mouseHover===true?`hover:bg-white hover:text-[#007882] text-white ${activeButton === 'rent'?'font-bold':''}`:
              activeButton === 'rent' 
                ? 'bg-white text-[#007882] font-bold'
                : 'text-white'
            } ${activeButton !== 'rent' ? 'hover:bg-white hover:text-[#007882]' : ''}`}
          >
            Rent
          </button>
          <button
            onClick={() => handleClick('sold')}
            className={`p-2 px-6 rounded-md ${
                mouseHover===true?`hover:bg-white hover:text-[#007882] text-white ${activeButton === 'sold'?'font-bold':''}`:
              activeButton === 'sold' 
                ? 'bg-white text-[#007882] font-bold'
                : 'text-white'
            } ${activeButton !== 'sold' ? 'hover:bg-white hover:text-[#007882]' : ''}`}
          >
            Sold
          </button>
        </div>
        <CustomSearch placeholder="Atlanta,GA" />
      </div>
    </div>
  );
};

export default Banner;
