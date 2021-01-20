import React from "react";
import isEqual from "lodash.isequal";

import Path from "./Path";

const Paths = ({ paths, onLayerClick, isMapSelected }) => {
  return (
    <>
      {paths.map((path) => {
        return (
          <Path
            key={path.id}
            path={path}
            onLayerClick={onLayerClick}
            isMapSelected={isMapSelected}
          />
        );
      })}
    </>
  );
};

// I need to memoize this component because otherwise Mapbox re-renders it everytime
// the user moves, zooms or interacts in other ways with the Map, which may slow the application
// especially in slower devices like smartphones
const areEquals = (previousProps, nextProps) => {
  const prevPathsIds = previousProps.paths.map((path) => path.id);
  const nextPathsIds = nextProps.paths.map((path) => path.id);
  if (previousProps.isMapSelected !== nextProps.isMapSelected) return false;
  if (isEqual(prevPathsIds, nextPathsIds)) {
    return true;
  }
  return false;
};

const MemoPaths = React.memo(Paths, areEquals);

export default MemoPaths;
