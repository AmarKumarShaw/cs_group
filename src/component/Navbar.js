import React from "react";
import "./Navbar.css"
import logo from "./images/logo.png"
const Navbar = () => {
  return (
    <>
      <header class="main-nav">

          <div className="right">
            <img class="logo" src={logo}  alt="" />
          </div>
          <div className="left">
            <ul class="list-content">
              <li className="nav-items">
                <a href="">Home</a>
              </li>
              <li className="nav-items">
                <a href="">Services</a>
              </li>
              <li className="nav-items">
                <a href="">About Us</a>
              </li>
              <li className="nav-items">
                <a href="">Awards</a>
              </li>
              <li className="nav-items">
                <a href="">Clients</a>
              </li>
              <li className="nav-items">
                <a href="">Login</a>
              </li>
            </ul>
          </div>
            <div className="info">
           <ul>
           <li><a href="info@cs-group.in">Email Us</a></li></ul>
            </div>

      </header>
    </>
  );
};

export default Navbar;
