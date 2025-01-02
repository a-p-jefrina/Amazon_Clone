import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
        alt="header_logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <spam className="header__optionLineOne">Hello Guest</spam>
          <spam className="header__optionLineTwo">Sign In</spam>
        </div>
        <div className="header__option">
          <spam className="header__optionLineOne">Returns</spam>
          <spam className="header__optionLineTwo">& Orders</spam>
        </div>
        <div className="header__option">
          <spam className="header__optionLineOne">Your</spam>
          <spam className="header__optionLineTwo">Prime</spam>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <spam className="header__optionLineTwo header__basketCount">0</spam>
        </div>
      </div>
    </div>
  );
}

export default Header;
