import React from "react";
import { useState } from "react";
import "./style.css";
import logo from "../../../assets/images/logo.svg";

const PassengerRegister = () => {
  return (
    <div className="passenger-register-page page flex center column black-bg">
      <div className="container flex  column">
      <div className="passenger-headings flex center column">
        <h1 className="primary-text">REGISTER</h1>
        
        <img src={logo} className="logo" />
        </div>
        <form className="register-form flex center wrapper ">

          <div className="input-group flex column ">
            <label className="primary-text">First Name*</label>
            <input type="text" placeholder="First Name" />
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Last Name*</label>
            <input type="text" placeholder="Last Name"/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Email*</label>
            <input type="email" placeholder="Email"/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Password</label>
            <input type="password" placeholder="Password"/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Phone Number*</label>
            <input type="tel" placeholder="Phone Number"/>
          </div>
         
          <div className="input-group flex column"
          ><label className="primary-text">*</label>
          <button className="primary-bg white-text"  type="submit">Register</button>
          </div>


          <p className="login-redirect primary-text">Already have an account? <span className="white-text">Log in</span></p>
        </form>
      </div>
    </div>
  );
};

export default PassengerRegister;
