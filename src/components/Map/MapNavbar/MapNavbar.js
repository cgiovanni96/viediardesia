import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import LanguageSwitcher from "../../LanguageSwitcher";
import { Link as RouterLink } from "react-router-dom";
import Legend from "./Legend";

const MapNavbar = () => {
  return (
    <Nav className="nav">
      <Title>VIE</Title>
      <Navigation>
        <Legend />
        <Link>
          <RouterLink to="/about">
            <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
          </RouterLink>
        </Link>
        <Link>
          <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
        </Link>
        <LanguageSwitcher />
      </Navigation>
    </Nav>
  );
};

export default MapNavbar;

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  z-index: 20;
  padding: 0 2rem;
  background: ${({ theme }) => theme.palette.gradient.light};
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  box-shadow: 0 4px 4px rgba(56, 89, 18, 0.1);
  font-family: "Poppins", sans-serif;
  color: #fff;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 46px;
  font-weight: 800;
`;

const Navigation = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
`;

const Link = styled.span`
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    color: #1e221a;
  }
`;
