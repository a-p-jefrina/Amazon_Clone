import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt="header_logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <spam className="header__optionLineOne">Hello Guest</spam>
            <spam className="header__optionLineTwo">Sign In</spam>
          </div>
        </Link>
        <div className="header__option">
          <spam className="header__optionLineOne">Returns</spam>
          <spam className="header__optionLineTwo">& Orders</spam>
        </div>
        <div className="header__option">
          <spam className="header__optionLineOne">Your</spam>
          <spam className="header__optionLineTwo">Prime</spam>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <spam className="header__optionLineTwo header__basketCount">
              {basket?.length}
              {/*? to handle error if something happen*/}
            </spam>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
