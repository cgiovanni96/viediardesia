import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import Navbar from "../components/Navbar";
import Text from "../components/Text";
import Layout from "../components/Layout";

const About = () => {
  const intl = useIntl(0);

  return (
    <Layout>
      <Navbar />
      <Main>
        <Message>
          <Text
            document={intl.formatMessage({
              id: "whosection",
              defaultMessage: "About",
            })}
          />
        </Message>
      </Main>
    </Layout>
  );
};

export default About;

const Main = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  font-family: ${({ theme }) => theme.typo.family.main};
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
  }
`;

const Message = styled.div`
  margin: 0 auto;
  order: 2;
  width: 100%;
  background: #26211e;
  color: white;
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.palette.shadow.default};

  ${up("lg")} {
    width: 80%;
    order: 1;
  }

  & > p {
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 22px;

    & > * {
      float: left;
      margin-right: 1em;
      width: 100%;

      ${up("lg")} {
        width: 60%;
      }
    }
  }
`;
