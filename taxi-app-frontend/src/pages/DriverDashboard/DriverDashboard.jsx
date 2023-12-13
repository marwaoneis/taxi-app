import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import MapComp from "../../components/Map/MapComp";
import "./style.css";

const DriverDashboard = () => {
  return (
    <div className="comp-container full-width full-height">
      <div className="title-header white-text">
        <h1>My Dashboard</h1>
      </div>
      <Dashboard />
      <div className="map-component">
        <MapComp />
      </div>
      <div className="title-text white-text">
        <h2>Ride Requests</h2>
      </div>
      <div className="rides-tabel flex center">
        <table className="white-bg">
          <thead>
            <tr>
              <th>ID</th>
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
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>4</th>
              <td></td>
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
  );
};

export default DriverDashboard;
