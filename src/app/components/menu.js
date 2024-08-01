'use client'
import React, { useState } from 'react';

const HoverMenu = ({name,options}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-trulia text-[#3b4144]">

         <a  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`mr-2 cursor-pointer hover:bg-[#007882] hover:text-white rounded-md p-2 ml-5 hidden xl:block font-[700]  ${isMenuOpen?`bg-[#007882] text-white`:'text-[#3b4144]'}`}>{name}</a>
     
      {isMenuOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="origin-top-left absolute left-0  w-auto  min-w-[160px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
            options.map(op=><a key={op} href="#" className="font-light block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:underline" role="menuitem">{op}</a>)
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
