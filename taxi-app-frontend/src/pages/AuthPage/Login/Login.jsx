import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="page bg-img flex center">
      <div className="container flex  column">
        <div className="header primary-text">
          <h1>LOG IN</h1>
        </div>

        <form action="" className="login-from flex column center">
          <div className="input-group flex column">
            <label className="input-lable primary-text">Email</label>
            <input className="login-input" type="email" placeholder="Email" />
          </div>

          <div className="input-group flex column">
            <label className="input-lable primary-text">Passwrod</label>
            <input
              className="login-input"
              type="pasword"
              placeholder="password"
            />
          </div>

          <button type="submit" className="login-btn white-text">
            Log In
          </button>
        </form>

        <p className="register-redirect primary-text">
          Don't a account?<span className="white-text">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
