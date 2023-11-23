import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

const MapComponent = ({ setPosition }) => {
    const [clickedPosition, setClickedPosition] = useState(null);
    const [selectedLatitude, setSelectedLatitude] = useState(null);
    const [selectedLongitude, setSelectedLongitude] = useState(null);
  
    const indiaCoordinates = [20.5937, 78.9629]; // India's coordinates
  
    const handleMapClick = (e) => {
      const { lat, lng } = e.latlng;
      setPosition({ latitude: lat, longitude: lng });
      setClickedPosition({ lat, lng });
      setSelectedLatitude(lat.toFixed(6)); 
      setSelectedLongitude(lng.toFixed(6)); 
    };
  
    const LocationMarker = () => {
      const map = useMapEvents({
        click: handleMapClick,
      });
  
      return clickedPosition ? (
        <Marker position={clickedPosition} icon={createMarkerIcon()}>
          <Popup>You clicked here</Popup>
        </Marker>
      ) : null;
    };
  
    const createMarkerIcon = () =>
      new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
      });
  
    return (
      <div>
        <div style={{ height: '400px', width: '100%' }}>
          <MapContainer center={indiaCoordinates}  zoom={4} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
             c/>
            <LocationMarker />
          </MapContainer>
        </div>
        {selectedLatitude && selectedLongitude && (
          <div>
            <label>Selected Latitude: {selectedLatitude}</label>
            <br />
            <label>Selected Longitude: {selectedLongitude}</label>
          </div>
        )}
      </div>
    );
  };
  
  export default MapComponent;
