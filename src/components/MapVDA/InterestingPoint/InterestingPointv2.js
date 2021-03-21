import { BeenHere as HereIcon } from "@styled-icons/boxicons-solid/BeenHere";
import { Marker } from "@urbica/react-map-gl";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import data from "../../../data";
import { LegendContext, LocaleContext } from "../../../utils/context";
import ZoomableImage from "../../Helpers/ZoomableImage";
import Text from "../../Helpers/Text";
import Drawer from "../../Drawer";

const InterestingPointsv2 = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [pointsToDisplay, setPointsToDisplay] = useState([]);
  const { locale } = useContext(LocaleContext);
  const legendContext = useContext(LegendContext);

  useEffect(() => {
    if (legendContext.checked === null || legendContext.checked === String(0)) {
      const mapped = data.points.map((cat) => {
        return cat.points;
      });

      setPointsToDisplay(mapped.flat());
    } else {
      const mapped = data.points[legendContext.checked - 1].points;
      setPointsToDisplay(mapped);
    }
  }, [legendContext.checked]);

  return (
    <>
      {pointsToDisplay.map((pointOfInterest, id) => {
        return (
          <Marker
            key={id}
            latitude={pointOfInterest.position.latitude + 0.000015}
            longitude={pointOfInterest.position.longitude}
          >
            <button
              className="point"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPoint(pointOfInterest);
                e.stopPropagation();
              }}
            >
              {pointOfInterest ? (
                <Icon
                  src={`./legend/${pointOfInterest.icon}.png`}
                  alt={"ICONA"}
                />
              ) : (
                <HereIcon size={32} color={"white"} />
              )}
            </button>
          </Marker>
        );
      })}

      {selectedPoint ? (
        <Drawer active={!!setSelectedPoint} setActive={setSelectedPoint}>
          {selectedPoint.image ? (
            <ZoomableImage src={selectedPoint.image} alt={""} />
          ) : null}
          <Text document={selectedPoint.text[locale.id]} />
        </Drawer>
      ) : null}
    </>
  );
};

export default InterestingPointsv2;

const Icon = styled.img`
  width: 50%;
  height: 50%;
`;
