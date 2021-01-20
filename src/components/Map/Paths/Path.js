import { Layer, Source } from "@urbica/react-map-gl";
import React, { useEffect, useState } from "react";
import lineColor from "../../../utils/constants/lineColor";

const Path = ({ path, onLayerClick, isMapSelected }) => {
  console.log("Rendering", path);
  const [pathColor, setPathColor] = useState(path.color);

  useEffect(() => {
    if (isMapSelected) setPathColor(path.color);
  }, [isMapSelected]);

  const onPathClick = (e) => {
    onLayerClick(e);
    setPathColor(lineColor);
  };

  return (
    <>
      <Source id={path.id} type="geojson" data={path.path} />
      <Layer
        id={path.id}
        type="line"
        source={path.id}
        paint={{ "line-color": `${pathColor}`, "line-width": 6 }}
        onClick={onPathClick}
      />
    </>
  );
};

const MemoPath = React.memo(Path);

export default MemoPath;
