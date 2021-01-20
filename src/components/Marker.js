import React, { useState } from "react";
import styled from "styled-components";
import { Marker as MarkerGL } from "@urbica/react-map-gl";
import markerProva from "../paths/marker-prova";
import Image from "./Image";
import { BeenHere as HereIcon } from "@styled-icons/boxicons-solid/BeenHere";
import Viewer from "react-viewer";

const Marker = ({ onMarkerClick, onMapClick, isMarkerSelected }) => {
  const [visible, setVisible] = useState(false);

  console.log("Marker is visible", isMarkerSelected);

  return (
    <MarkerGL longitude={markerProva.longitude} latitude={markerProva.latitude}>
      <Base>
        {!isMarkerSelected ? (
          <HereIcon size={24} color={"white"} onClick={onMarkerClick} />
        ) : (
          <span>
            <img
              src={"./markeprova.jpeg"}
              alt={"Marker"}
              onClick={() => {
                setVisible(true);
                // onMarkerClick();
              }}
              style={{ cursor: "pointer" }}
            />
            <Viewer
              visible={visible}
              onClose={() => {
                setVisible(false);
                onMapClick(true);
              }}
              images={[{ src: "/markeprova.jpeg", alt: "Marker" }]}
            />
          </span>
        )}
      </Base>
    </MarkerGL>
  );
};

export default Marker;

const Base = styled.div`
  padding: 1em;
  background: red;
  border-radius: 1em;

  & img {
    width: 100px;
    height: 100px;
  }
`;
