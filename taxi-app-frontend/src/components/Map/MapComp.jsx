import React, { useState } from "react";
import { Draggable, Map, Marker } from "pigeon-maps";
import "./style.css";
import marker from "../../assets/images/Vectormap.svg"
const MapComp = ({currentLocation,destination}) => {
  const center = [51.505, -0.09]; // set your initial map center
  const [anchor, setAnchor] = useState([50.879, 4.6997]);

  return (
    <div className="map-container full-width mt-20">
      <Map className="full-width" center={center} zoom={13} height={320} >
        <Marker
          anchor={center}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />
         <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
        <img src={marker} width={50} height={50} alt="Pigeon!" />
      </Draggable>
        
      </Map>
    </div>
  );
};

export default MapComp;
