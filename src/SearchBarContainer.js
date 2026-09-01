import { useState } from "react";
const SearchBarContainer = ({handleSearch , handleReset}) => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="search-container">
      <input
        className="search-input-box"
        id="search"
        type="text"
        placeholder="Search for a Restaurant"
        value={searchValue}
        onChange={handleChange}
      />
      <button className="search-button" onClick={()=>handleSearch(searchValue)}>
        <span className="search-button-top">Search</span>
      </button>
      <button className="search-button" onClick={()=>handleReset()}>
        <span className="search-button-top">Reset Filter</span>
      </button>
    </div>
  );
};
export default SearchBarContainer;
