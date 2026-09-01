import SearchBarContainer from "./SearchBarContainer";
import RestaurantCard from "./RestaurantCard";
import { MockRestaurants as restaurants } from "../utils/MockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [data, setData] = useState([]);
  const handleSearch = (name) => {
    const filteredData = data.filter(
      (rest) => rest?.info?.name.toLowerCase() === name.toLowerCase(),
    );
    if (filteredData.length <= 0) {
      setData(restaurants);
      alert("No results");
    } else setData(filteredData);
  };
  const handleReset = ()=> {
    setData(restaurants);
  }
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    const swiggyData= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.32220&lng=88.61440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await swiggyData.json();
    let resList = [];
    json?.data?.cards?.forEach((card)=>{
      const moreRes = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      moreRes?.forEach((res)=>{
        resList.push(res?.info);
      });
    });
    setData(resList);
  }
  return (
    <div>
      <SearchBarContainer
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <div className="card-space">
        {data.map((res) => (
          <RestaurantCard data={res} key={res?.id} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
