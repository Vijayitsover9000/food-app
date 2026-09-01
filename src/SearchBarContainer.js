import { useState } from "react";
const SearchBarContainer = ({ handleSearch, handleReset, handleTopRestaurants }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="search-container">
      <button
        className="search-button"
        onClick={() => handleTopRestaurants()}
      >
        <span className="search-button-top">Top Rated Restaurants</span>
      </button>
      <input
        className="search-input-box"
        id="search"
        type="text"
        placeholder="Search for a Restaurant"
        value={searchValue}
        onChange={handleChange}
      />
      <button
        className="search-button"
        onClick={() => handleSearch(searchValue)}
      >
        <span className="search-button-top">Search</span>
      </button>
      <button
        className="search-button"
        onClick={() => {
          handleReset();
          setSearchValue("");
        }}
      >
        <span className="search-button-top">Reset Filter</span>
      </button>
    </div>
  );
};
export default SearchBarContainer;
