import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import classNames from "classnames";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// context
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../context/LayoutContext";
import { signOut, useUserDispatch } from "../../context/UserContext";
// styles
import useStyles from "./styles";
import './header.scss';
import { Link } from "react-router-dom";

export default function Header(props) {
  var classes = useStyles();
  var dispatch = useUserDispatch();
  const history = useHistory();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuOpen,setMenuOpen] = useState(false);
  console.log(process.env.PUBLIC_URL)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    signOut(dispatch, history);
  };

  // local
  var [isSearchOpen, setSearchOpen] = useState(false);

  return (
  <header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <span className="menu"  onClick={() =>{console.log(menuOpen); setMenuOpen(!menuOpen)}}><img src={process.env.PUBLIC_URL + '/images/menu.png'}/></span>
          <span className="logo py-2">ONLINE LEARNING...<span className="d-block slogan">TEACHING &TRAINING</span></span>
        </div>
         <div className="col-6 text-right">
           <ul className="headerList">
              <li className="search"><img src={process.env.PUBLIC_URL + '/images/search.png'}/></li>
             <li><img src={process.env.PUBLIC_URL + '/images/account.png'}/></li>
           </ul>
         </div>
      </div>
    </div>
    <div className={menuOpen?'menuList active':'menuList'}>
      <ul>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/app/contacts">Contacts</Link></li>
          <li><Link to="/app/meeting">Meeting</Link></li>
      </ul>
    </div>
  </header>
  );
}
