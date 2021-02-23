import React from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1em;
  width: 100%;
  ${up("lg")} {
    /* width: 80%; */
    padding: none;
  }
`;

const Layout = (props) => {
  return (
    <Base>
      <Wrapper>{props.children}</Wrapper>
    </Base>
  );
};

export default Layout;
