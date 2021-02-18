import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Base>
      <Wrapper>
        <Navbar />
        <Main>
          <Hero>
            <span>
              <BigLogo src={"./logo-cerchio.png"} alt={"big logo"} />
            </span>

            <span>
              <HeroTitle src={"./titolo.png"} alt={"titolo"} />
            </span>
          </Hero>
          {/* <BigBox>
            <img src={"./foto.jpg"} alt={"foto"} />
          </BigBox> */}
          <Box>
            <RouterLink to={"/map"}>
              <img src={"./screenMappa.png"} alt={"Mappa"} />
            </RouterLink>
          </Box>
        </Main>
      </Wrapper>
    </Base>
  );
};

export default Home;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #3e3936;
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigLogo = styled.img`
  height: 250px;
  width: 100%;
`;

const HeroTitle = styled.img`
  height: 90px;
  width: 100%;
`;

const Box = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 500px;
  transition: all 0.2s ease-in-out;

  ${up("lg")} {
    width: auto;
  }

  & img {
    width: 100%;
  }

  &:hover {
    opacity: 0.6;
  }
`;

// const BigBox = styled.div`
//   width: 100%;
//   height: 600px;
//   transform: translateY(-20px);
//   & > img {
//     width: 100%;
//     height: 100%;
//   }
// `;
