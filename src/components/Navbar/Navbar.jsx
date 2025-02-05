import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [menu, setmenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menue">
        <NavLink style={{ textDecoration: "none" }} to="/">
          {" "}
          <li
            onClick={() => {
              setmenu("shop");
            }}
          >
            shope {menu === "shop" ? <hr /> : <></>}
          </li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/mens">
          <li
            onClick={() => {
              setmenu("mens");
            }}
          >
            Men {menu === "mens" ? <hr /> : <></>}
          </li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/womens">
          {" "}
          <li
            onClick={() => {
              setmenu("women");
            }}
          >
            Women {menu === "women" ? <hr /> : <></>}
          </li>
        </NavLink>

        <NavLink to="/kids">
          <li
            onClick={() => {
              setmenu("kids");
            }}
          >
            Kids {menu === "kids" ? <hr /> : <></>}
          </li>
        </NavLink>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          {" "}
          <button>Login</button>
        </NavLink>

        <NavLink to="/cart">
          <img src={cart_icon} alt="" />
        </NavLink>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
