import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Menu as MenuIcon } from "@styled-icons/boxicons-regular/Menu";

import Legend from "../../MapVDA/MapNavbar/Legend/Legend";
import Navigation from "./Navigation";

const Navbar = ({ map }) => {
  const [active, setActive] = useState(false);
  return (
    <Base map={map}>
      <Title>
        <RouterLink to="/">
          <Logo src={"./layout/navLogo.jpg"} alt={"logo"} />
        </RouterLink>
      </Title>
      <Nav>
        <DesktopNavigation>
          <Navigation />
        </DesktopNavigation>

        <MobileNavigation>
          <MenuIcon
            size={28}
            color={"black"}
            onClick={() => setActive(!active)}
          />
          <Menu active={active}>
            <Navigation />
          </Menu>
        </MobileNavigation>

        {map && <Legend />}
      </Nav>
    </Base>
  );
};

export default Navbar;

const Base = styled.div`
  z-index: 8;
  margin-top: 1rem;
  position: ${(props) => (props.map ? "absolute" : "relative")};
  display: flex;
  align-items: center;
  background: white;
  height: 100px;
  width: 100%;
  padding: 0 1rem;
  color: black;
  border-radius: 8px;
  /* padding: 0 4rem; */
  left: ${(props) => (props.map ? "50%" : "none")};
  -webkit-transform: ${(props) => (props.map ? "translateX(-50%)" : "none")};
  transform: ${(props) => (props.map ? "translateX(-50%)" : "none")};

  ${up("md")} {
    margin: 0 auto;
    margin-top: 1rem;
    width: 80%;
  }
`;

const Title = styled.div`
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const Logo = styled.img`
  width: auto;
  height: 60px;
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DesktopNavigation = styled.div`
  display: none;
  ${up("md")} {
    display: flex;
  }
`;

const MobileNavigation = styled.div`
  display: flex;

  & :first-child {
    cursor: pointer;
  }

  ${up("md")} {
    display: none;
  }
`;

const Menu = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 110px;
  left: 0;
  right: 0;
  background: #272e2b;
  color: white;

  & * {
    margin: 0.5rem 0.2rem;
  }
`;
