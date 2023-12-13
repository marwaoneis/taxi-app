import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import arrow from "../../../assets/images/arrow-2.svg";
import "../index.css";

const HeroSign = () => {
  return (
    <div className="body signup flex">
      <Link to="/driverRegister" className="driver-register flex">
        <div className="bold black-text">Signup to drive</div>
        <img src={arrow} alt="arrow right" className="arrow-right" />
      </Link>
      <Link to="/passengerRegister" className="passenger-register flex">
        <div className="bold black-text">Signup to ride</div>
        <img src={arrow} alt="arrow right" className="arrow-right" />
      </Link>
    </div>
  );
};

export default HeroSign;
