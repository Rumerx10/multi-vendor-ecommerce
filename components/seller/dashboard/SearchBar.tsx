import React from 'react';
import { ChevronDown } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="h-24 border border-borderGray">
      <div>
        <div>
          <p>Categories</p>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
