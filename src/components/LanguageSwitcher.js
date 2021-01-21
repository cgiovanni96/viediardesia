import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../App";
import locales from "../languages/locales";

const LanguageSwitcher = () => {
  const localesContext = useContext(LocaleContext);

  const langSwitch = (id) => {
    localesContext.setLocale(locales[id]);
  };

  return (
    <Base>
      <Lang onClick={() => langSwitch("it")}>IT</Lang>
      <Lang onClick={() => langSwitch("eng")}>ENG</Lang>
    </Base>
  );
};

export default LanguageSwitcher;

const Base = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const Lang = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
`;
