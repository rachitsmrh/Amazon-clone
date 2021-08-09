import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const authenticateUser = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={authenticateUser} className="header__option">
            <span className="header__optionlineone">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionlinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineone">Returns</span>
          <span className="header__optionlinetwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__basketicon" />
            <span className="header__optionlinetwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
