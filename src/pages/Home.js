import React from "react";
import { FormattedMessage } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import Image from "../components/Helpers/Image";
import Layout from "../components/Layout/Layout";
// import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Layout>
      <Main>
        <RouterLink to="/about">
          <Hero>
            <Image src={"./layout/miniLogo.png"} alt={"big logo"} />
          </Hero>
        </RouterLink>

        <Welcome>
          <Description>
            <FormattedMessage
              id="homedescription"
              defaultMessage="Home description"
            />
          </Description>

          <Action>
            <RouterLink to="/map">
              <FormattedMessage id="cta" defaultMessage="Click on the image" />
            </RouterLink>
          </Action>
        </Welcome>

        <Box>
          <RouterLink to={"/map"}>
            <Image src={"./screenMappa.png"} alt={"Mappa"} />
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

  & img {
    object-fit: cover;
    display: block;
    max-height: 250px;
    max-width: 100%;
    width: auto;
    height: auto;
  }
`;

const Box = styled.div`
  width: 100%;
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
  & span {
    color: ${({ theme }) => theme.palette.accent.main};
  }
`;
