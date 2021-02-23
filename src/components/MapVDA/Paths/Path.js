import { Layer, Source } from "@urbica/react-map-gl";
import React, { useEffect, useState } from "react";
import lineColor from "../../../utils/constants/lineColor";

const Path = ({ path, onLayerClick, isMapSelected, before, setSelected }) => {
  const [pathColor, setPathColor] = useState(path.color);

  useEffect(() => {
    if (isMapSelected) setPathColor(path.color);
  }, [isMapSelected, path.color]);

  const onPathClick = (e) => {
    console.log("Selected", path.id);
    onLayerClick(e);
    setSelected(path.id);
    setPathColor(lineColor);
  };

  return (
    <>
      <Source id={path.id} type="geojson" data={path.path} />
      <Layer
        id={path.id}
        before={before}
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
