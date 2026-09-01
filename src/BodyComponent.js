import SearchBarContainer from "./SearchBarContainer";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
  return (
    <div>
      <SearchBarContainer />
      <div className="card-space">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
export default BodyComponent;