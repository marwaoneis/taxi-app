import React from "react";
import logo from "../../../assets/images/logo.svg";

const DriverRegister = () => {
  return (
    <div>
      <div className="driver-register-page page flex center column black-bg">
        <div className="container flex  column">
          <div className="headings flex center column">
            <h1 className="primary-text">REGISTER</h1>

            <img src={logo} alt="logo" className="logo" />
          </div>
          <form className="register-form flex center wrapper ">
            <div className="input-group flex column ">
              <label className="primary-text">First Name*</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Last Name*</label>
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Email*</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Password</label>
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-group upload flex column white-bg">
              <label className="primary-text">
                Upload Profile Picture*
                <input className="pp-input" type="file" />
              </label>
            </div>

            <div className="input-group upload flex column white-bg">
              <label className="primary-text">
                Upload Driver Liscence*
                <input className="pp-input" type="file" />
              </label>
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Phone Number*</label>
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">*</label>
              <button
                className="primary-bg white-text reg-button"
                type="submit"
              >
                Register
              </button>
            </div>

            <p className="login-redirect primary-text">
              Already have an account?{" "}
              <span className="white-text">Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriverRegister;
