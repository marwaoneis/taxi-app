import { React, useState } from "react";
import logo from "../../assets/images/logo-white.svg";
import { Link } from "react-router-dom";
import "./style.css";

const SideBar = () => {
  const [activeMainTab, setActiveMainTab] = useState("Home");
  const menuItems = [
    {
      title: "Home",
      route: "Home",
    },
    {
      title: "Rides",
      route: "Rides",
    },

    {
      title: "Profile",
      route: "Profile",
    },
  ];

  return (
    <div className="sidebar-container column black-bg flex">
      <div className="flex column center">
        <div className="logo-container">
          <Link to="/driverDashboard" className="">
            <img src={logo} alt="speedtrip logo" className="white-logo" />
          </Link>
        </div>

        <div className="flex side-elements column">
          {menuItems.map((menuItem, index) => {
            return (
              <Link to={menuItem.route}
                key={index}
                onClick={() => {
                  setActiveMainTab(`${menuItem.title}`);
                }}
                className={`sidebar-btn `}
              >
                <button
                  className={`rides-btn ${
                    activeMainTab === menuItem.title ? "active" : ""
                  }`}

              
                >
                  {menuItem.title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sidebar-btn">
        <Link to="/login" className="">
          <button className={`logout-btn }`}>Log out</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
