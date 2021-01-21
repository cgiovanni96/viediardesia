import React from "react";
import styled from "styled-components";
import LanguageSwitcher from "../LanguageSwitcher";

const MapNavbar = () => {
  return (
    <Nav className="nav">
      <Title>VIE</Title>
      <Navigation>
        <Link>CHI SIAMO</Link>
        <Link>TUTTE LE VIE</Link>
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
