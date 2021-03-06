import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import Text from "../components/Helpers/Text";
import Layout from "../components/Layout/Layout";

const About = () => {
  const intl = useIntl(0);

  return (
    <Layout>
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
  background: #272e2b;
  border-radius: 8px;
  color: white;
  padding: 2rem 3rem;

  ${up("lg")} {
    width: 80%;
    order: 1;
  }

  & > p {
    text-align: justify;
    color: #ededed;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.3rem;

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
