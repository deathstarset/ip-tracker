import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/mapIp.css";
import { Icon } from "leaflet";
import location from "../images/icon-location.svg";
import RecenterAuto from "./RecenterAuto";
export default function MapIp({ cordinates }) {
  const mark = new Icon({
    iconUrl: location,
    iconSize: [40, 50],
  });
  return (
    <>
      {cordinates && (
        <MapContainer
          center={[cordinates[0] + 0.015, cordinates[1]]}
          zoom={12}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={cordinates} icon={mark} />
          <RecenterAuto lat={cordinates[0] + 0.015} lng={cordinates[1]} />
        </MapContainer>
      )}
    </>
  );
}
