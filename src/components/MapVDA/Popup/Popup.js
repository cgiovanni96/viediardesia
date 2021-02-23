import { Popup as PopupGL } from "@urbica/react-map-gl";
import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { LocaleContext } from "../../../utils/context";
import getHikeInfo from "../../../utils/hooks/getHikeInfo";

const Popup = ({ lat, lng, id }) => {
  const { locale } = useContext(LocaleContext);
  // const path = `/${id}`;
  const [info, setInfo] = useState({
    title: "",
    duration: "",
    altitude: "",
    height: "",
  });

  useEffect(() => {
    const md = async () => {
      const { metadata } = await getHikeInfo(id, locale.id);
      setInfo({
        title: metadata.title,
        duration: metadata.duration,
        altitude: metadata.altitude,
        height: metadata.height,
      });
    };

    md();
  }, [id, locale]);

  return (
    <PopupGL
      latitude={lat}
      longitude={lng}
      style={{
        background: "none",
        padding: "none",
        border: "none",
      }}
    >
      <Base>
        <HikeInfo>
          <HikeDetail>
            <FormattedMessage id="hike" defaultMessage="Percorso" />:
          </HikeDetail>
          <HikeName>
            <Link to={`/${id}`}>{info.title} </Link>
          </HikeName>
        </HikeInfo>

        <InfoFooter>
          <HikeInfo>
            <HikeDetail>
              <FormattedMessage id="duration" defaultMessage="Durata" />:
            </HikeDetail>
            <HikeTime>{info.duration} </HikeTime>
          </HikeInfo>

          <HikeInfo>
            <HikeDetail>
              <FormattedMessage id="altitude" defaultMessage="Dislivello" />:
            </HikeDetail>
            <HikeTime>{info.altitude} </HikeTime>
          </HikeInfo>

          <HikeInfo>
            <HikeDetail>
              <FormattedMessage id="height" defaultMessage="Chilometraggio" />:
            </HikeDetail>
            <HikeTime>{info.height} </HikeTime>
          </HikeInfo>
        </InfoFooter>
      </Base>
    </PopupGL>
  );
};

export default Popup;

const Base = styled.div`
  width: 100%;
  background: none;
  border: none;
  padding: 1em;
  /* background-color: ${({ theme }) => theme.palette.accent.light}; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-family: ${({ theme }) => theme.typo.family.main};
`;

const InfoFooter = styled.div`
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
`;

const HikeInfo = styled.div`
  margin-top: 0.5em;
`;

const HikeDetail = styled.span`
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  font-size: 16px;
`;

const HikeName = styled.h2`
  font-size: 18px;
`;

const HikeTime = styled.h3`
  font-size: 14px;
`;
