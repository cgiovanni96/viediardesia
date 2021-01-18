import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowLeftCircle as BackIcon } from "@styled-icons/feather/ArrowLeftCircle";
import { Mountains as DistanceIcon } from "@styled-icons/foundation/Mountains";
import { Clock as ClockIcon } from "@styled-icons/fa-regular/Clock";
import { Link, useParams } from "react-router-dom";
import { up } from "styled-breakpoints";

import Text from "../../components/Text";
import { LocaleContext } from "../../App";
import getHikeInfo from "../../utils/hooks/getHikeInfo";
import { FormattedMessage } from "react-intl";

const Main = () => {
  const { hike } = useParams();
  const { locale } = useContext(LocaleContext);

  const [text, setText] = useState("");
  const [metadata, setMetadata] = useState({
    title: "",
    difficulty: "",
    altitude: "",
    duration: "",
    height: "",
  });

  useEffect(() => {
    const md = async () => {
      const { content, metadata } = await getHikeInfo(hike, locale.id);
      setText(content);
      setMetadata(metadata);
    };

    md();
  }, [hike, locale]);

  return (
    <Base>
      <Highlight>
        <Name>{metadata.title}</Name>
        <Details>
          <DetailsEl>
            <ClockIcon size={20} /> <span>{metadata.duration || ""}</span>
          </DetailsEl>
          <DetailsEl>
            <DistanceIcon size={20} /> <span>{metadata.height || ""}</span>
          </DetailsEl>
        </Details>
      </Highlight>

      <Container>
        <Article>
          <Text document={text} />
        </Article>
        <Side>
          <Back>
            <Link to="/">
              <BackIcon size={30} />{" "}
              <span>
                <FormattedMessage id="back" defaultMessage="Indietro" />
              </span>
            </Link>
          </Back>
          <Info>
            <Title>INFO</Title>
            <List>
              <Element>
                <span>
                  <FormattedMessage id="duration" defaultMessage="Durata" />:{" "}
                </span>
                {metadata.duration}
              </Element>
              <Element>
                <span>
                  <FormattedMessage id="altitude" defaultMessage="Dislivello" />
                  :{" "}
                </span>
                {metadata.altitude || ""}
              </Element>
              <Element>
                <span>
                  <FormattedMessage
                    id="difficulty"
                    defaultMessage="Difficoltà"
                  />
                  :{" "}
                </span>{" "}
                {metadata.difficulty || ""}
              </Element>
            </List>
          </Info>
        </Side>
      </Container>
    </Base>
  );
};

export default Main;

const Base = styled.section`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Highlight = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 110px;
  background: ${({ theme }) => theme.palette.gradient.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  color: ${({ theme }) => theme.palette.text.light};
  box-shadow: ${({ theme }) => theme.palette.shadow.gradient},
    inset 0 0 0 4px rgba(21, 111, 121, 0.3);

  ${up("md")} {
    width: 60%;
  }
`;

const Name = styled.h2`
  font-family: ${({ theme }) => theme.typo.family.secondary};
  font-size: 40px;
  font-weight: ${({ theme }) => theme.typo.weight.medium};
  text-shadow: 0 4px 4px rgba(9, 46, 48, 0.2);
`;

const Details = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.medium};
`;

const DetailsEl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  & > span {
    margin-left: 0.5rem;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  font-family: ${({ theme }) => theme.typo.family.main};
`;

const Article = styled.div`
  width: 80%;
  background: ${({ theme }) => theme.palette.accent.light};
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.palette.shadow.default};
  & > p {
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 22px;
  }

  & img {
    width: 50%;
    height: 100px;
    object-fit: cover;
    float: left;
    margin-right: 1rem;
    border-radius: 8px;

    &::after {
      float: none;
    }
  }
`;

const Side = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

const Back = styled.div`
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.palette.shadow.gradient};
  background: ${({ theme }) => theme.palette.gradient.light};
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  & span {
    margin-left: 0.2rem;
  }
`;

const Info = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.palette.accent.light};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.palette.shadow.default};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  /* text-align: center; */
  font-weight: ${({ theme }) => theme.typo.weight.bold};
`;

const List = styled.ul`
  list-style: none;
  font-size: 14px;
  margin-top: 1rem;
`;

const Element = styled.li`
  margin-bottom: 0.5rem;
  font-size: 18px;
  /* 
  & * {
    font-size: inherit;
  } */

  & > span {
    font-weight: ${({ theme }) => theme.typo.weight.bold};
    margin-right: 0.5rem;
  }
`;
