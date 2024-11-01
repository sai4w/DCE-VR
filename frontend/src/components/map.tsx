import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

export const Map = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={position ?? { lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        border: "2px solid #ccc",
        zIndex: 0,
      }}
    >
      <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};
