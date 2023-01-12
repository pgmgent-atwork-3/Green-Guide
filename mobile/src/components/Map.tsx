import * as ReactLeaflet from "react-leaflet";
import Leaflet from "leaflet";
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const { MapContainer } = ReactLeaflet;
// @ts-ignore
const Map = ({ children }) => {
  const container = useRef(null);

  useEffect(() => {
    async function init() {
      // @ts-ignore
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "marker-icon-2x.png",
        iconUrl: "marker-icon.png",
        shadowUrl: "marker-shadow.png",
      });
    }

    init();
  }, []);

  return (
    <MapContainer
      center={[51.0499, 3.7333]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 300 }}
    >
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
