const SearchBarContainer = () => {
  return (
    <div className="search-container">
      <input
        className="search-input-box"
        id="search"
        type="text"
        placeholder="Search for a Restaurant"
      />
      <button className="search-button">
        <span className="search-button-top">Search</span>
      </button>
    </div>
  );
};
export default SearchBarContainer;
