import { useState } from "react";
const SearchBarContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <div className="search-container">
      <input
        className="search-input-box"
        id="search"
        type="text"
        placeholder="Search for a Restaurant"
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}
      />
      <button className="search-button">
        <span className="search-button-top">Search</span>
      </button>
    </div>
  );
};
export default SearchBarContainer;
