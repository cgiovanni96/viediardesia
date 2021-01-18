import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

const Hike = () => {
  return (
    <Base>
      <Wrapper>
        <Navbar />
        <Main />
      </Wrapper>
      <Footer />
    </Base>
  );
};

export default Hike;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
