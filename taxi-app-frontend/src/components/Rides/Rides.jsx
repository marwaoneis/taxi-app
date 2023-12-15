import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import MapComp from "../../components/Map/MapComp";
import "./style.css";
import arrow from "../../assets/images/arrow.svg";

const Rides = () => {
  return (
    <div className="comp-container full-width full-height primary-bg">
      <div className="flex row ">
        <Dashboard />
        <div className="padding-10 full-width ">
          <div className="title-header white-text">
            <h1 className="mt-20">Rides</h1>
            <h2 className="mt-20 title-text">Drive to Destination</h2>
          </div>
          <div className="map-component full-width">
            <MapComp
              destination={[51.505, -0.09]}
              currentLocation={[41.505, -1.09]}
            />
          </div>
          <div className="riding-info center flex">
            <div className="rides-tabel white-bg flex column full-width mt-20">
              <div className="mt-20 ml-20 ride-info">Passenger Name:</div>
              <div className="ml-20 ride-info">Start Point:</div>
              <div className="ml-20 ride-info">Destination:</div>
              <div className="ml-20 ride-info">Estimated drive time:</div>
              <div className="flex center black-bg start-ride ride-info">
                <button className="white-text">START RIDE</button>
              </div>
            </div>
            <div className="message-contain flex column center">
              <div className="send-msg white-text">
                Send a message to Passenger:
              </div>
              <div className="flex white-bg message-box center">
                <button className="message">Message</button>
                <img src={arrow} alt="arrow right" className="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rides;
