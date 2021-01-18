import { Layer, Source } from "@urbica/react-map-gl";
import React from "react";

const Path = ({ path, color, onLayerClick }) => {
  return (
    <>
      <Source id={path.id} type="geojson" data={path.path} />
      <Layer
        id={path.id}
        type="line"
        source={path.id}
        paint={{ "line-color": `${color}`, "line-width": 6 }}
        onClick={onLayerClick}
      />
    </>
  );
};

export default Path;
