//eslint-disable
import MapGL, {
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import paths from "../../paths/paths";
import center from "../../utils/constants/center";
import lineColor from "../../utils/constants/lineColor";
import mapStyles from "../../utils/constants/mapStyles";
import token from "../../utils/constants/token";
import isEmpty from "../../utils/isEmpty";
import "./Map.css";
import MapNavbar from "./MapNavbar";
import Path from "./Path";
import Popup from "./Popup";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: isDesktop ? 14.5 : 13,
  });

  const [color, setColor] = useState({
    color: lineColor.default,
  });

  const [popup, setPopup] = useState({});

  const onLayerClick = (e) => {
    setColor({ color: lineColor.active });
    setPopup({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      id: e.features[0].source,
    });
  };

  const onMapClick = () => {
    setColor({ color: lineColor.default });
    setPopup({});
  };

  return (
    <>
      <MapNavbar />
      <MapGL
        style={{
          width: "100vw",
          height: "100vh",
        }}
        {...viewport}
        accessToken={token}
        mapStyle={mapStyles}
        onViewportChange={setViewport}
        onClick={onMapClick}
      >
        <NavigationControl showCompass showZoom position="bottom-right" />
        <GeolocateControl position="bottom-right" />

        {paths.map((path) => (
          <Path
            key={path.id}
            path={path}
            color={color.color}
            onLayerClick={onLayerClick}
          />
        ))}

        {!isEmpty(popup) && (
          <Popup lat={popup.latitude} lng={popup.longitude} id={popup.id} />
        )}
      </MapGL>
    </>
  );
};

export default Map;
