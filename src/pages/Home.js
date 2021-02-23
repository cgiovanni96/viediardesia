import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Main>
        <Hero>
          <span>
            <BigLogo src={"./miniLogo.png"} alt={"big logo"} />
          </span>
        </Hero>

        <Welcome>
          <Description>
            Viediardesia si propone come strumento per i sentieri
          </Description>

          <Action>
            <span>Clicca</span> sulla mappa per iniziare
          </Action>
        </Welcome>

        <Box>
          <RouterLink to={"/map"}>
            <img src={"./screenMappa.png"} alt={"Mappa"} />
          </RouterLink>
        </Box>
      </Main>
    </Layout>
  );
};

export default Home;

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

const Box = styled.div`
  /* margin-top: 2rem; */
  /* margin-bottom: 0.5rem; */
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

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  text-align: center;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const Action = styled.p`
  margin-top: 2rem;
  font-size: 3rem;
  & > span {
    color: ${({ theme }) => theme.palette.accent.main};
  }
`;
