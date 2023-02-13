import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { FeatureGroup, MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { routes } from './routes';
import './styles/Map.css';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

interface MyProps {
  route: number;
}

const MapComponent: React.FC<MyProps> = ({ route }) => {
  const mapRef: any = React.useRef();

  const posMark = routes?.map((mark: any, i: any) => mark);
  const postPosition = posMark[0][0];
  return (
    <MapContainer
      className="z-10"
      zoom={12}
      center={postPosition}
      ref={mapRef}
      scrollWheelZoom={true}>
      <FeatureGroup>
        <Marker position={postPosition} icon={customMarkerUserPos} />
        <Polyline positions={posMark[`${route}`]} color="green" />
      </FeatureGroup>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;

export const customMarkerUserPos = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [15, 20],
  iconAnchor: [5, 20],
  popupAnchor: [2, -40],
});
