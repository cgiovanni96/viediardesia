import React from "react";
import styled from "styled-components";
import { CloseCircle as CloseIcon } from "@styled-icons/ionicons-solid/CloseCircle";
import { up } from "styled-breakpoints";

const Drawer = (props) => {
  console.log("Active", props.active);
  console.log("setActive", props.setActive);

  return (
    <Base active={props.active}>
      <Header>
        <CloseIcon
          size={32}
          color={"black"}
          onClick={() => props.setActive(false)}
        />
      </Header>
      <Main>{props.children}</Main>
    </Base>
  );
};

export default Drawer;

const Base = styled.div`
  background: #272e2b;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${(props) => (props.active ? "0" : "100vw")};
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;

  ${up("md")} {
    right: ${(props) => (props.active ? "70%" : "100vw")};
  }
`;

const Header = styled.header`
  background: ${({ theme }) => theme.palette.accent.main};
  color: ${({ theme }) => theme.palette.text.inverse};
  /* padding: 1rem; */
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & * {
    cursor: pointer;
  }
`;

const Main = styled.div`
  /* margin-top: 1rem; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;

  & img {
    object-fit: cover;
    display: block;
    max-width: 400px;
    max-height: 400px;
    width: auto;
    height: auto;
  }

  & p {
    width: 70%;
  }
`;
