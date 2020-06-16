import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const PlotMap = ({latitude, longitude, stationName, siteNumber}) => {
  const zoom = 13;
  const renderleafletMap = () => {
      // const position = [51.1, -0.09]
      const position = [latitude, longitude]
      return (
          <Map center={position} zoom={zoom}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <span>Station: {stationName}</span>
              </Popup>
            </Marker>
          </Map>
      )
  }

  return(
    <div className="col s12">
    <div className= "section">
      <span> Station Number: {siteNumber} </span>
      <span> Latitude: {latitude} </span>
      <span> Longitude: {longitude} </span>
      {renderleafletMap()}
    </div>
  </div>
  )
}

export default PlotMap