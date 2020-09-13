import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://i.ibb.co/XSbCXmk/fb.png" alt="fblogo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option header__option--active">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
      <div className="header__info">
      <Avatar />
      <h4>unaissss</h4></div>
      <IconButton>
      <AddIcon />
      </IconButton>
      <IconButton>
      <ForumIcon />
      </IconButton>
      <IconButton>
      <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
      <ExpandMoreIcon />
      </IconButton>
      </div>
    </div>
  );
}

export default Header;
