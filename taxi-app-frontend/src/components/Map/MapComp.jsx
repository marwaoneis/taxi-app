import React from "react";
import { Map, Marker } from "pigeon-maps";
import "./style.css";

const MapComp = () => {
  const center = [51.505, -0.09]; // set your initial map center

  return (
    <div className="map-container">
      <Map center={center} zoom={13} height={400} width={600}>
        <Marker
          anchor={center}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />
      </Map>
    </div>
  );
};

export default MapComp;
