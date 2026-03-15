import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header_scroll Header hide">
      <div className="main__Content">
        <div className="logo">
          <h1>SoftLand</h1>
        </div>
        <div className="header__menu">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Features</a>
          </li>
          <li>
            <a href="#!">Pricing</a>
          </li>
          <li className="Dropdown">
            <a href="#!">Dropdown</a>
            <i className="fa-solid fa-chevron-down"></i>
            <ul className="sub__menu">
              <li>
                <a href="#!">Dropdown 1</a>
              </li>
              <li className="deep_dr">
                <a href="#!">Deep Dropdown</a>
                <ul className="db_menu">
                  <li>
                    {" "}
                    <a href="">Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="">Deep Dropdown 2</a>
                  </li>
                  <li>
                    <a href="">Deep Dropdown 3</a>
                  </li>
                  <li>
                    <a href="">Deep Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Dropdown 2</a>
              </li>
              <li>
                <a href="#!">Dropdown 3</a>
              </li>
              <li>
                <a href="#!">Dropdown 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
