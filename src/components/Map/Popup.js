import { Popup as PopupGL } from "@urbica/react-map-gl";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LocaleContext } from "../../App";
import getHikeInfo from "../../utils/hooks/getHikeInfo";

const Popup = ({ lat, lng, id }) => {
  const { locale } = useContext(LocaleContext);
  // const path = `/${id}`;
  const [info, setInfo] = useState({
    title: "",
    duration: "",
    altitude: "",
  });

  useEffect(() => {
    const md = async () => {
      const { metadata } = await getHikeInfo(id, locale.id);
      setInfo({
        title: metadata.title,
        duration: metadata.duration,
        altitude: metadata.altitude,
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
          <HikeDetail>Percorso:</HikeDetail>
          <HikeName>
            <Link to={`/${id}`}>{info.title} </Link>
          </HikeName>
        </HikeInfo>

        <HikeInfo>
          <HikeDetail>Tempo:</HikeDetail>
          <HikeTime>{info.duration} </HikeTime>
        </HikeInfo>

        <HikeInfo>
          <HikeDetail>Dislivello:</HikeDetail>
          <HikeTime>{info.altitude} </HikeTime>
        </HikeInfo>
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
