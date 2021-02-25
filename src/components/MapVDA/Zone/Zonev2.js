import React, { useContext, useState } from "react";
import { Marker } from "@urbica/react-map-gl";
import styled from "styled-components";

import { LocaleContext } from "../../../utils/context";
import Text from "../../Helpers/Text";
import Drawer from "../../Drawer";

const Zonev2 = ({ zoom, zone }) => {
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
          <Name>{zone.name} </Name>
        </button>
      </Marker>

      {selectedPoint ? (
        <Drawer active={selectedPoint} setActive={setSelectedPoint}>
          <Text document={selectedPoint.text[locale.id]} />
        </Drawer>
      ) : null}
    </>
  );
};

export default Zonev2;

const Name = styled.h2`
  font-size: 1.2rem;
  color: #c93877;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-weight: bold;
`;
