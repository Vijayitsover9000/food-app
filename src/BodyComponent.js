import SearchBarContainer from "./SearchBarContainer";
import RestaurantCard from "./RestaurantCard";
import { MockRestaurants as restaurants } from "../utils/MockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [data, setData] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const handleSearch = (name) => {
    const filteredData = data.filter((rest) =>
      rest?.name.toLowerCase().includes(name.toLowerCase()),
    );
    if (filteredData.length <= 0) {
      setSearchedRestaurants([]);
      alert("No results");
    } else setSearchedRestaurants(filteredData);
  };
  const handleReset = () => {
    setSearchedRestaurants([]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.32220&lng=88.61440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await swiggyData.json();
    let resList = [];
    // yeah complicated logic here
    json?.data?.cards?.forEach((card) => {
      const moreRes =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      moreRes?.forEach((res) => {
        if (!resList.some((listRes) => listRes?.id === res?.info?.id))
          resList.push(res?.info);
      });
    });
    setData(resList);
  };
  console.log("body rendered");
  return (
    <div>
      <SearchBarContainer
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <div className="card-space">
        {searchedRestaurants.length >0 ?
          searchedRestaurants.map((res) => (
            <RestaurantCard data={res} key={res?.id} />
          )):<></>}
        {data?.length > 0 ? (
          data.map((res) => <RestaurantCard data={res} key={res?.id} />)
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};
export default BodyComponent;
