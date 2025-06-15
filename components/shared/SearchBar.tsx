import React from "react";
import { ChevronDown, SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full h-24 border-b border-borderGray">
      <div className="flex items-center justify-between lg:container px-4 mx-auto w-full h-full">
        <div className="w-full flex items-center justify-between gap-8 h-14">
          <div className="flex items-center border border-textGray rounded-md w-full h-full px-2.5 gap-5">
            <div className="flex items-center text-textGray p-2.5 gap-2.5 border-r border-textGray">
              <p>Categories</p>
              <div>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full">
              <SearchIcon color="gray" size={24} />
              <input
                name=""
                placeholder="Search by product, brand, or keyword"
                className="w-full h-10 px-2 outline-none"
              />
            </div>
          </div>


          <button
            type="button"
            className="h-14 px-7 py-3 bg-tomato text-white rounded-md flex items-center justify-center hover:bg-tomato/90 cursor-pointer  duration-300"
          >
            Search
          </button>

        </div>
      </div>
    </div>
  );
};

export default SearchBar;
