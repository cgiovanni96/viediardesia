import { BeenHere as HereIcon } from "@styled-icons/boxicons-solid/BeenHere";
import { Marker, Popup } from "@urbica/react-map-gl";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../../App";
import points from "../../../points/points";
import Image from "../../Image";
import Text from "../../Text";
import "../Map.css";

const InterestingPoints = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const { locale } = useContext(LocaleContext);

  return (
    <>
      {points.map((pointOfInterest, id) => (
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
            <HereIcon size={32} color={"white"} />
          </button>
        </Marker>
      ))}

      {selectedPoint ? (
        <Popup
          latitude={selectedPoint.position.latitude}
          longitude={selectedPoint.position.longitude}
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
            <Image src={selectedPoint.image} alt={selectedPoint.text.name} />
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
