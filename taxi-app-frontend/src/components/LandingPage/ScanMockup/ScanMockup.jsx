import React from "react";
import "../index.css";
import scan from "../../../assets/images/scan-code.png";

const ScanMockup = () => {
  return (
    <div className="body flex center column full-height full-width scan">
      <div>
        <div>
          <div className="scan-sec-title">
            <h1>It's easier in the Mockups</h1>
          </div>
          <div className="flex center code">
            <img src={scan} alt="scan code" className="scan-img" />
            <div className="flex column view">
              <p>View the SpeedyTrip app Mockup on Figma</p>
              <p>Scan to open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanMockup;
