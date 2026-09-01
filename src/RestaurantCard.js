import { CARD_IMG_BASE_CDN_URL } from "../utils/common.js";
import { Link } from "react-router";

const RestaurantCard = ({ data }) => {
  const { id, name, cloudinaryImageId, cuisines, sla, avgRatingString } = data;
  return (
    <div className="restaurant-card">
      <Link to={`/movies`}>
        <div className="restaurant-card-img">
          <img
            id="restaurant-card-img-img"
            src={CARD_IMG_BASE_CDN_URL + cloudinaryImageId}
            alt="some food image"
          />
        </div>
        <div className="restaurant-card-info">
          <p className="restaurant-text-title">{name} </p>
          <p className="restaurant-text-body">{cuisines?.join(",")}</p>
        </div>
        <div className="restaurant-card-footer">
          <span className="text-title">{sla?.slaString}</span>
          <span className="text-title">{avgRatingString + " stars"}</span>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
