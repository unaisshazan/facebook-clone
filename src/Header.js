import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <img src="https://i.ibb.co/XSbCXmk/fb.png" alt="fblogo"/>  
        </div>
      <div className="header__middle">
      <SearchIcon/>
      <input type="text"/>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
