import React from "react";
import "./style.css";
import b1 from "../../../assets/images/border-1.svg";
import b2 from "../../../assets/images/border-2.svg";
import service1 from "../../../assets/images/service-1.jpg";
import service2 from "../../../assets/images/service-2.jpg";
import service3 from "../../../assets/images/service-3.jpg";

const OurServices = () => {
  return (
    <div className="service-bg full-width">
      <div className="service-title flex center">
        <div className="flex">
          <img src={b1} alt="border-left" className="border-left" />
        </div>
        <div className="mini-title primary-text bold">Our Services</div>
        <div className="flex">
          <img src={b2} alt="border-right" className="border-right" />
        </div>
      </div>
      <div className="main-title flex center">
        <h1 className="white-text">Our Services</h1>
      </div>
      <div className="service-container flex center">
        <div className="service-box flex column">
          <div>
            <img src={service1} alt="service1" className="service-1" />
          </div>
          <div className="info">
            <div className="service-name white-text">REAL-TIME TRACKING</div>
            <div className="service-desc white-text">
              Implement a real-time tracking feature that allows passengers to
              track the location of their assigned driver in real-time. This not
              only enhances the overall user experience but also adds a layer of
              safety and transparency.{" "}
            </div>
          </div>
        </div>
        <div className="service-box flex column">
          <div>
            <img src={service2} alt="service2" className="service-2" />
          </div>
          <div className="info">
            <div className="service-name white-text">ADVANCED BOOKING</div>
            <div className="service-desc white-text">
              Provide users with the ability to schedule rides in advance. This
              feature is beneficial for users who need transportation for
              specific events or appointments.
            </div>
          </div>
        </div>
        <div className="service-box flex column">
          <div>
            <img src={service3} alt="service3" className="service-3" />
          </div>
          <div className="info">
            <div className="service-name white-text">IN APP-MESSAGING</div>
            <div className="service-desc white-text">
              In-app messaging system that enables seamless communication
              between drivers and passengers. This feature can be useful for
              clarifying pickup details, providing additional instructions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
