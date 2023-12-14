import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import MapComp from "../../components/Map/MapComp";

import "./style.css";
import Profile from "../../components/Profile/Profile";

const DriverDashboard = () => {
  return (
    <div className="comp-container full-width full-height primary-bg">
      <div className="flex row ">
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
          <div className="title-text white-text mt-20">
            <h2>Ride Requests</h2>
          </div>
          <div className="rides-tabel flex center full-width mt-20">
            <table className="white-bg">
              <thead>
                <tr>
                  <th>Passenger Name</th>
                  <th>Pick Up Location</th>
                  <th>Destination</th>
                  <th>Phone Number</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
