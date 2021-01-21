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
import mapStyles from "../../utils/constants/mapStyles";
import token from "../../utils/constants/token";
import isEmpty from "../../utils/isEmpty";
import InterestingPoints from "./InterestingPoint/InterestingPoints";
import MapNavbar from "./MapNavbar";
import Paths from "./Paths/Paths";
import Popup from "./Popup";
import "./Map.css";
//need this statement due to a bug with mapbox-gl's version 2.0
//which resulted in a conflict with webpack while processing the build for production
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

  const [isMapSelected, setIsMapSelected] = useState(true);

  const [popup, setPopup] = useState({});

  const onLayerClick = (e) => {
    setIsMapSelected(false);
    setPopup({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      id: e.features[0].source,
    });
  };

  const onMapClick = () => {
    setIsMapSelected(true);
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
        <Paths
          paths={paths}
          onLayerClick={onLayerClick}
          isMapSelected={isMapSelected}
        />
        {!isEmpty(popup) && (
          <Popup lat={popup.latitude} lng={popup.longitude} id={popup.id} />
        )}

        <InterestingPoints />
      </MapGL>
    </>
  );
};

export default Map;
