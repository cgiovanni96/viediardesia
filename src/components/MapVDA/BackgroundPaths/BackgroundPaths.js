import { Layer, Source } from "@urbica/react-map-gl";
import React from "react";
import sentieriLavagna from "../../../data/paths/sentieri-lavagna";

const BackgroundPaths = () => {
  return (
    <>
      <Source
        id={sentieriLavagna.id}
        type="geojson"
        data={sentieriLavagna.path}
      />
      <Layer
        id={sentieriLavagna.id}
        type="line"
        source={sentieriLavagna.id}
        paint={{ "line-color": `${sentieriLavagna.color}`, "line-width": 3 }}
      />
    </>
  );
};

export default BackgroundPaths;
