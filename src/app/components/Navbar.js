import React from "react";
import HoverMenu from "./menu";
import { RxHamburgerMenu } from "react-icons/rx";
const data=[
    {
        name:'Buy',
        options:[
            "Atlanta",
            "Homes for Sale",
            "Open Houses",
            "New Homes",
            "Recently Sold"
          ]
    },
    {
        name:'Rent',
        options:[
            "Atlanta",
            "All Rentals",
            "Apartments for Rent",
            "Houses for Rent",
            "Post A Rental Listing"
          ]
    },
    {
        name:'Mortgage',
        options:[
            "Atlanta",
            "Mortgage Overview",
            "Get Pre-Qualified",
            "Mortgage Rates",
            "Refinance Rates",
            "Mortgage Calculator",
            "Affordability Calculator",
            "Refinance Calculator"
          ]
        }
]

const Navbar = () => {
  return (
    <>
          <nav className="sticky bg-white z-10 top-0 p-4 pb-3 font-trulia text-[14px] font-[700] text-[#3b4144] body-font w-full md:mr-auto   md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-between ">
            <div className="flex flex-wrap items-center text-base justify-between">
            <a className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.96 50.44" width="70" height="24" role="img" className="svg" aria-label="Trulia Logo" aria-hidden="false"><path d="M147.71 11a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51zm4.99 29.56V14.64h-15.5v9.28h6.22v25.92h15.49v-9.28h-6.21zm-26.49 0V2.54h-15.49v9.28h6.21v28.74h-6.21v9.28h21.7v-9.28h-6.21zM60.25 14.52h-2.81a12.17 12.17 0 0 0-10.75 5.39l-1.89-5.27h-9.11v9.28H40v25.92h9.28V31.72a8.16 8.16 0 0 1 8.16-8.16h2.81zm42.98 18.35V14.64H94V33.2a8.29 8.29 0 0 1-16.58 0V14.64h-9.33v18.23a17.57 17.57 0 0 0 35.14 0zM27.6 23.92v-9.28H15.49V3.28H6.22v11.36H0v9.28h6.22v8.92a17.56 17.56 0 0 0 17.56 17.57A17.74 17.74 0 0 0 27.6 50v-9.17a9.28 9.28 0 0 1-3.18.56 8.78 8.78 0 0 1-8.93-8.61v-8.86zm162.09-9.28v3.5a13.08 13.08 0 0 0-9.14-4h-.72c-9.17 0-16.6 8.12-16.6 18.15s7.43 18.19 16.6 18.15h.72a13.08 13.08 0 0 0 9.14-4v3.5H199v-35.3zm-8.81 26.82a9.06 9.06 0 0 1-8.88-9.23 8.85 8.85 0 1 1 17.69 0 9 9 0 0 1-8.81 9.23z"></path></svg>
          </a>
            {
                data.map(menu=><HoverMenu key={menu.name} name={menu.name} options={menu.options}/>)
            }
            </div>
            <div  className="flex flex-wrap items-center text-base justify-between">
            <a className="mr-5 hover:bg-[#007882]  hover:text-white rounded-md p-2 hidden lg:block">Saved Homes</a>
            <a className="mr-5 hover:bg-[#007882]  hover:text-white rounded-md p-2 hidden lg:block">Saved Searches</a>
            <button className="hidden lg:inline-flex items-center border-[2px] border-gray-200 rounded-sm py-1 px-3 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0">
                Sign up or Log in
          </button>
          <button className="ml-2">
            <RxHamburgerMenu className="text-[20px] text-[#007882]"/>
          </button>
          </div>
          </nav>

    </>
  );
};

export default Navbar;