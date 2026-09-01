import React from "react";
import { createRoot } from "react-dom/client";
import logoImg from "url:./images/logo-img.png";

const Logo = () => {
  return <img className="logo" src={logoImg} alt="Logo" />;
};
const NavItemComponent = () => {
  return (
    <div className="nav-item-container">
      <div className="nav-item">Home</div>
      <div className="nav-item">About Us</div>
      <div className="nav-item">Contact</div>
      <div className="nav-item">Email</div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItemComponent />
    </div>
  );
};
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
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div>
      <SearchBarContainer />
      <div className="card-space">
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppComponent = () => (
  <>
    <Header />
    <BodyComponent />
    {/* <Footer /> */}
  </>
);
const root = createRoot(document.getElementById("root"));
root.render(<AppComponent />);
