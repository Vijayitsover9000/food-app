import SearchBarContainer from "./SearchBarContainer";
import RestaurantCard from "./RestaurantCard";
import { MockRestaurants as restaurants } from "../utils/MockData";
import { useState } from "react";

const BodyComponent = () => {
  const [data, setData] = useState(restaurants);
  return (
    <div>
      <SearchBarContainer />
      <div className="card-space">
        {data.map((res) => (
          <RestaurantCard data={res?.info} key={res?.info.id}/>
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
