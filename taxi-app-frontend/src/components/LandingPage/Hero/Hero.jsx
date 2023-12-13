import React from "react";
import "./style.css";
import "../index.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="full-width hero">
      <div className="full-width full-height opacity-background">
        <div className="box column flex white-bg">
          <div className="border"></div>
          <div className="hero-box flex column">
            <div className="hero-box-text primary-text">
              <h1>Fastest and Cheapest Taxi Car Service</h1>
            </div>
            <div>
              <p>
                Drive on the platform with the largest network of active riders.
              </p>
            </div>
            <div className="button-bg">
              <Link to="/login" className="loginButtonLink">
                <button className="loginButton bold white-text black-bg">
                  SIGN UP TO DRIVE
                </button>
              </Link>
            </div>
            <div>
              <p>Learn more about driving and delivering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
