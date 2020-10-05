import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone">Hello</span>
          <span className="header__optionlinetwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Returns</span>
          <span className="header__optionlinetwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__basketicon" />
          <span className="header__optionlinetwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
