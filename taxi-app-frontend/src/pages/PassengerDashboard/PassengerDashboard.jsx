import React from "react";
import "./style.css";
import Dashboard from "../../components/Dashboard/Dashboard";
import MapComp from "../../components/Map/MapComp";
import "./style.css";

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
          <div className="flex large-gape center column full-width mt-40">
            <div className="dashboard full-width flex">
              <div className="flex center current-location">
                <div className="white-text">Current Location</div>
              </div>
              <div className="flex center choose-dest">
                <div className="white-text">Choose Destination</div>
              </div>
            </div>
            <div className="req-ride black-bg">
              <div className="white-text">Request a ride</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDashboard;
