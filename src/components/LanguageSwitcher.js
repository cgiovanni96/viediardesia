import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../utils/context";
import locales from "../utils/context/localesContext";

const LanguageSwitcher = () => {
  const localesContext = useContext(LocaleContext);

  console.log("LOCALE", localesContext);

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
  margin-left: 1rem;
`;

const Lang = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`;
