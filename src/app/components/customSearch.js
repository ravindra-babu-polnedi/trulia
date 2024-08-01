import "./CustomSearch.css";
import { IoSearch } from "react-icons/io5";

const CustomSearch = (props) => {
  return (
    <div className="mt-2 w-[80%] md:w-[127%] mr-[100px] text-left relative  left-9 md:right-14 md:left-[-40px]">
      <input
        type="search"
        {...props}
        className={`w-[90%] h-[58px] p-4 m-1 border border-solid border-[#F0F0F0] outline-none rounded-md font-normal placeholder-black  ${
          props.bgcolor ? `${props.bgcolor}` : "bg-[#F9F9F9]"
        }`}
      />
      <div className="text-right">
      <span className="cursor-pointer bg-[#d93c23] h-[58px] rounded-r-md  w-[60px]  grid place-content-center relative bottom-[62px] right-0 ml-auto">
      <IoSearch className="text-white text-[25px]"/>
      </span>
      </div>
    </div>
  );
};

export default CustomSearch;
