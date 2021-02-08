import React, { useContext, useState } from "react";
import { Beenhere as ZoneIcon } from "@styled-icons/material-rounded/Beenhere";
import { Marker, Popup } from "@urbica/react-map-gl";
import "../Map.css";
import { LocaleContext } from "../../../App";
import styled from "styled-components";
import Text from "../../Text";

const Zone = ({ zoom, zone }) => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <Marker
        latitude={zone.position.latitude}
        longitude={zone.position.longitude}
      >
        <button
          className="point"
          onClick={(e) => {
            e.preventDefault();
            setSelectedPoint(zone);
            e.stopPropagation();
          }}
        >
          {zoom < 15 ? (
            <ZoneIcon size={32} color={"white"} />
          ) : (
            <div>{zone.name}</div>
          )}
        </button>
      </Marker>

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
            <Text document={selectedPoint.text[locale.id]} />
          </SelectedPoint>
        </Popup>
      ) : null}
    </>
  );
};

export default Zone;

const SelectedPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1em;
`;
