import React from "react";
import { FormattedMessage } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import LanguageSwitcher from "../LanguageSwitcher";
import Legend from "../MapVDA/MapNavbar/Legend/Legend";

const Navbar = ({ map }) => {
  return (
    <Base map={map}>
      <Title>
        <RouterLink to="/">
          <Logo src={"./layout/navLogo.jpg"} alt={"logo"} />
        </RouterLink>
      </Title>
      <Navigation>
        <NavEl>
          <RouterLink to="/about">
            <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
          </RouterLink>
        </NavEl>
        <NavEl>
          <RouterLink to="/paths">
            <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
          </RouterLink>
        </NavEl>

        <LanguageSwitcher />

        {map && <Legend />}
      </Navigation>
    </Base>
  );
};

export default Navbar;

const Base = styled.div`
  z-index: 8;
  margin: 0 auto;
  margin-top: 1rem;
  position: ${(props) => (props.map ? "absolute" : "relative")};
  display: flex;
  align-items: center;
  background: white;
  height: 100px;
  width: 80%;
  padding: 0 1rem;
  color: black;
  border-radius: 8px;
  /* padding: 0 4rem; */
  left: ${(props) => (props.map ? "50%" : "none")};
  -webkit-transform: ${(props) => (props.map ? "translateX(-50%)" : "none")};
  transform: ${(props) => (props.map ? "translateX(-50%)" : "none")};
`;

const Title = styled.div`
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const Logo = styled.img`
  width: auto;
  height: 60px;
`;

const Navigation = styled.nav`
  font-family: ${({ theme }) => theme.typo.family.main};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const NavEl = styled.div`
  display: none;
  margin-left: 1rem;
  font-weight: ${(props) =>
    props.bold ? props.theme.typo.weight.bold : props.theme.typo.weight.light};
  ${up("md")} {
    display: flex;
  }
`;
