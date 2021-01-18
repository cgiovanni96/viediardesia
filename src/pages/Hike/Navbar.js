import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LocaleContext } from "../../App";
import locales from "../../languages/locales";

const Navbar = () => {
  const localesContext = useContext(LocaleContext);

  const langSwitch = (id) => {
    localesContext.setLocale(locales[id]);
  };

  return (
    <Base>
      <Title>
        <Link to="/">ARDESIA</Link>
      </Title>
      <Navigation>
        <NavEl>
          <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
        </NavEl>
        <NavEl>
          <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
        </NavEl>

        <LanguageSwitcher>
          <Lang onClick={() => langSwitch("it")}>IT</Lang>
          <Lang onClick={() => langSwitch("eng")}>ENG</Lang>
        </LanguageSwitcher>
      </Navigation>
    </Base>
  );
};

export default Navbar;

const Base = styled.section`
  height: 75px;
  display: flex;
  align-items: center;
  /* padding: 0 4rem; */
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typo.family.secondary};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  background: ${({ theme }) => theme.palette.gradient.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const Navigation = styled.nav`
  font-family: ${({ theme }) => theme.typo.family.main};
  display: flex;
`;

const NavEl = styled.div`
  margin-left: 2rem;
  font-weight: ${(props) =>
    props.bold ? props.theme.typo.weight.bold : props.theme.typo.weight.light};
`;

const LanguageSwitcher = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const Lang = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
`;
