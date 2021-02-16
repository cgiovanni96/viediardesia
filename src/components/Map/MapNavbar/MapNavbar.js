import React from "react";
import styled from "styled-components";
import LanguageSwitcher from "../../LanguageSwitcher";
import DesktopLeftMenu from "./DesktopLeftMenu";
import MobileLeftMenu from "./MobileLeftMenu";

const MapNavbar = () => {
  return (
    <Nav className="nav">
      <Title>Antiche Vie Dell'Ardesia verso il Mare</Title>
      <Right>
        <DesktopLeftMenu />
        <MobileLeftMenu />
        <LanguageSwitcher />
      </Right>
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
  font-size: 36px;
  font-weight: 800;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
