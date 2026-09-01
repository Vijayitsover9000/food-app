const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-img">
        <img
          id='restaurant-card-img-img'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0ef28e1afd908733eebe5f92bde73063"
          alt="some food image"
        />
      </div>
      <div className="restaurant-card-info">
        <p className="restaurant-text-title">Meghana Foods </p>
        <p className="restaurant-text-body">Biriyani, North Indian</p>
      </div>
      <div className="restaurant-card-footer">
        <span className="text-title">36 minutes</span>
        <span className="text-title">4.4 stars</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
