import React from "react";
import logo from "../../../assets/images/logo-land.svg";
import "./style.css";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="body flex full-width primary-bg navBar">
      <div className="logo">
        <img src={logo} alt="taxi app logo" className="taxi-logo" />
      </div>
      <div className="flex full-width navBarElements">
        <div className="flex navElements full-height">
          <div className="bold white-text">Home</div>
          <div className="bold white-text">About us</div>
          <div className="bold white-text">Contact us</div>
        </div>
        <div className="button-bg full-height">
          <Link to="/login" className="loginButtonLink">
            <button className="loginButton bold white-text black-bg">
              LETS RIDE NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
