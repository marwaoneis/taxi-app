import React from "react";
import "./style.css";
import Dashboard from "../../components/Dashboard/Dashboard";
import MapComp from "../../components/Map/MapComp";
import "./style.css";
import Profile from "../../components/Profile/Profile";
import Ratings from "../../components/Ratings/Ratings";

const PassengerDashboard = () => {
  return (
    <div className="comp-container full-width full-height primary-bg">
      <div className="flex row">
        <Dashboard />
        <div className="padding-10 full-width ">
          <div className="title-header white-text">
            <h1 className="mt-20">My Dashboard</h1>
          </div>
          <div className="map-component full-width">
            <MapComp
              destination={[51.505, -0.09]}
              currentLocation={[41.505, -1.09]}
            />
          </div>
          <div className="dashboard">
            <div className="current-location">
              <img src="" alt="current location" className="current" />
              <div>Current Location</div>
            </div>
            <div className="choose-dest">
              <div>Choose Destination</div>
            </div>
          </div>
          <div className="req-ride">
            <div>Request a ride</div>
          </div>
        </div>
      </div>
      <Ratings />
    </div>
  );
};

export default PassengerDashboard;
