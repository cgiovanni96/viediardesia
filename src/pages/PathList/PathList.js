import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";

import pathList from "./list";

const PathList = () => {
  return (
    <Layout>
      <Main>
        <List>
          {pathList.map((path) => {
            return (
              <Element key={path.id}>
                <PathTitle>{path.title}</PathTitle>
                <PathInfo>
                  <Info>
                    <span>
                      <FormattedMessage
                        id="altitude"
                        defaultMessage="Dislivello"
                      />
                      :{" "}
                    </span>
                    {path.altitude}
                  </Info>
                  <Info>
                    <span>
                      <FormattedMessage
                        id="height"
                        defaultMessage="Chilometraggio"
                      />
                      :{" "}
                    </span>
                    {path.height}
                  </Info>
                  <Info>
                    <span>
                      <FormattedMessage id="duration" defaultMessage="Durata" />
                      :{" "}
                    </span>{" "}
                    {path.duration}
                  </Info>
                </PathInfo>
              </Element>
            );
          })}
        </List>
      </Main>
    </Layout>
  );
};

export default PathList;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul``;

const Element = styled.li`
  background: #272e2b;
  padding: 2rem 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PathTitle = styled.h2`
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  font-size: 1.2rem;
`;

const PathInfo = styled.ul`
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.li`
  & > span {
    font-weight: bold;
  }
`;
