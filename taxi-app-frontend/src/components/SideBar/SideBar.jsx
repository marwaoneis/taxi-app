import { React, useState } from "react";
import logo from "../../assets/images/logo-white.svg";
import { Link } from "react-router-dom";
import "./style.css";

const SideBar = () => {
  const [buttonStates, setButtonStates] = useState({
    home: { isHovered: false, isActive: false },
    rides: { isHovered: false, isActive: false },
    profile: { isHovered: false, isActive: false },
    logout: { isHovered: false, isActive: false },
  });

  const handleHover = (button) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [button]: {
        ...prevStates[button],
        isHovered: !prevStates[button].isHovered,
      },
    }));
  };

  const handleClick = (button) => {
    setButtonStates((prevStates) => ({
      home: { isHovered: false, isActive: false },
      rides: { isHovered: false, isActive: false },
      profile: { isHovered: false, isActive: false },
      logout: { isHovered: false, isActive: false },
      [button]: {
        ...prevStates[button],
        isActive: !prevStates[button].isActive,
      },
    }));
  };

  const getButtonClasses = (button) => {
    const { isHovered, isActive } = buttonStates[button];
    return `bold ${
      isHovered || isActive ? "white-text primary-bg" : "black-text white-bg"
    }`;
  };
  const getButtonClassLogout = (button) => {
    const { isHovered, isActive } = buttonStates[button];
    return `bold ${
      isHovered || isActive ? "black-text white-bg" : "white-text pink-bg"
    }`;
  };

  return (
    <div className="sidebar-container column black-bg flex">
      <div className="flex column center">
        <div className="logo-container">
          <Link to="/home" className="">
            <img src={logo} alt="speedtrip logo" className="white-logo" />
          </Link>
        </div>

        <div className="flex side-elements column">
          <div className="sidebar-btn">
            <Link to="/passengerDashboard" className="">
              <button
                className={`home-btn ${getButtonClasses("home")}`}
                onMouseEnter={() => handleHover("home")}
                onMouseLeave={() => handleHover("home")}
                onClick={() => handleClick("home")}
              >
                Home
              </button>
            </Link>
          </div>
          <div className="sidebar-btn">
            <Link to="/passengerDashboard/rides" className="">
              <button
                className={`rides-btn ${getButtonClasses("rides")}`}
                onMouseEnter={() => handleHover("rides")}
                onMouseLeave={() => handleHover("rides")}
                onClick={() => handleClick("rides")}
              >
                Rides
              </button>
            </Link>
          </div>
          <div className="sidebar-btn">
            <Link to="/passengerDashboard/profile" className="">
              <button
                className={`profile-btn ${getButtonClasses("profile")}`}
                onMouseEnter={() => handleHover("profile")}
                onMouseLeave={() => handleHover("profile")}
                onClick={() => handleClick("profile")}
              >
                My Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebar-btn">
        <Link to="/login" className="">
          <button
            className={`logout-btn ${getButtonClassLogout("logout")}`}
            onMouseEnter={() => handleHover("logout")}
            onMouseLeave={() => handleHover("logout")}
            onClick={() => handleClick("logout")}
          >
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
