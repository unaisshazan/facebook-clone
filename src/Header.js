import React from "react";
import {SearchIcon,HomeIcon} from '@material-ui/icons';

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <img src="https://i.ibb.co/XSbCXmk/fb.png" alt="fblogo"/>  
      <div className="header__input">
      <SearchIcon/>
      <input type="text"/>
      </div>  
      </div>
      <div className="header__middle">
   
       <div className="header__option">
       <HomeIcon fontSize="large" />
       </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
