import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <Base>
      <Title>
        <Link to="/">
          <Logo src={"./logo.jpg"} alt={"logo"} />
        </Link>
      </Title>
      <Navigation>
        <NavEl>
          <Link to="/about">
            <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
          </Link>
        </NavEl>
        <NavEl>
          <Link to="/paths">
            <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
          </Link>
        </NavEl>

        <LanguageSwitcher />
      </Navigation>
    </Base>
  );
};

export default Navbar;

const Base = styled.section`
  z-index: 8;
  margin-top: 0.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;
  padding: 0 1rem;
  width: 80%;
  margin: 0 auto;
  color: black;
  /* padding: 0 4rem; */
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.typo.family.secondary};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  background: ${({ theme }) => theme.palette.gradient.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const Logo = styled.img`
  width: auto;
  height: 60px;
`;

const Navigation = styled.nav`
  font-family: ${({ theme }) => theme.typo.family.main};
  display: flex;
`;

const NavEl = styled.div`
  display: none;
  margin-left: 2rem;
  font-weight: ${(props) =>
    props.bold ? props.theme.typo.weight.bold : props.theme.typo.weight.light};
  ${up("md")} {
    display: flex;
  }
`;
