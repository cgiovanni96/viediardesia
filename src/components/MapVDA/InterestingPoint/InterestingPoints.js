import { BeenHere as HereIcon } from "@styled-icons/boxicons-solid/BeenHere";
import { Marker, Popup } from "@urbica/react-map-gl";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../../App";
import { pointsByCategories } from "../../../data/points";
import Image from "../../Image";
import Text from "../../Text";
import { LegendContext } from "../../Map";

const InterestingPoints = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [pointsToDisplay, setPointsToDisplay] = useState([]);
  const { locale } = useContext(LocaleContext);
  const legendContext = useContext(LegendContext);

  useEffect(() => {
    if (legendContext.checked === null || legendContext.checked === String(0)) {
      const mapped = pointsByCategories.map((cat) => {
        return cat.points;
      });

      setPointsToDisplay(mapped.flat());
    } else {
      const mapped = pointsByCategories[legendContext.checked - 1].points;
      setPointsToDisplay(mapped);
    }
  }, [legendContext.checked]);

  return (
    <>
      {pointsToDisplay.map((pointOfInterest, id) => {
        // console.log("PUNTO", pointOfInterest.name);
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
        <Popup
          latitude={selectedPoint.position.latitude}
          longitude={selectedPoint.position.longitude}
          className="big-popup"
          style={{
            background: "none",
            padding: "none",
            border: "none",
          }}
          onClose={(e) => {
            setSelectedPoint(null);
          }}
        >
          <SelectedPoint>
            {selectedPoint.image ? (
              <Image src={selectedPoint.image} alt={""} />
            ) : null}
            <Text document={selectedPoint.text[locale.id]} />
          </SelectedPoint>
        </Popup>
      ) : null}
    </>
  );
};

export default InterestingPoints;

const SelectedPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1em;
  & img {
    width: 100%;
    height: 100px;
  }
`;

const Icon = styled.img`
  width: 70%;
  height: 70%;
`;
