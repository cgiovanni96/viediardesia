//eslint-disable
import MapGL, {
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./MapVDA/styles.css";

import MapVDA from "./MapVDA";

import data from "../data";
import constants from "../utils/constants";
import isEmpty from "../utils/isEmpty";
import { LegendContext } from "../utils/context";

//need this statement due to a bug with mapbox-gl's version 2.0
//which resulted in a conflict with webpack while processing the build for production
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {
  const {
    MapNavbar,
    InterestingPoints,
    Paths,
    Popup,
    Zone,
    BackgroundPaths,
  } = MapVDA;

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const [viewport, setViewport] = useState({
    latitude: constants.center.latitude,
    longitude: constants.center.longitude,
    zoom: isDesktop ? 14.5 : 13,
  });

  const [isMapSelected, setIsMapSelected] = useState(true);

  const [popup, setPopup] = useState({});

  const [checked, setChecked] = useState(null);

  const legendContext = { checked, setChecked };

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
    <LegendContext.Provider value={legendContext}>
      <MapNavbar />
      <MapGL
        style={{
          width: "100vw",
          height: "100vh",
        }}
        {...viewport}
        accessToken={constants.token}
        mapStyle={constants.mapStyles}
        onViewportChange={setViewport}
        onClick={onMapClick}
      >
        <NavigationControl showCompass showZoom position="bottom-right" />
        <GeolocateControl position="bottom-right" />

        <BackgroundPaths />

        <Paths
          paths={data.paths}
          onLayerClick={onLayerClick}
          isMapSelected={isMapSelected}
        />

        {!isEmpty(popup) && (
          <Popup lat={popup.latitude} lng={popup.longitude} id={popup.id} />
        )}

        {data.zones.map((zone) => {
          return <Zone key={zone.id} zone={zone} zoom={viewport.zoom} />;
        })}

        <InterestingPoints />
      </MapGL>
    </LegendContext.Provider>
  );
};

export default Map;
