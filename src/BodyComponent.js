import SearchBarContainer from "./SearchBarContainer";
import RestaurantCard from "./RestaurantCard";
import { MockRestaurants as restaurants } from "../utils/MockData";
import { useState } from "react";

const BodyComponent = () => {
  const [data, setData] = useState(restaurants);
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
  return (
    <div>
      <SearchBarContainer
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <div className="card-space">
        {data.map((res) => (
          <RestaurantCard data={res?.info} key={res?.info.id} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
