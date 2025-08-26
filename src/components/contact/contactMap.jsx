import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ContactMap() {
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

  return (
    <MapContainer
      center={[36.75, 3.06]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full m-0 p-0"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[36.75, 3.06]}>
        <Popup>
          We are here! <br /> Algiers, Algeria
        </Popup>
      </Marker>
    </MapContainer>
  );
}
