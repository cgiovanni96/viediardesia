import React, { useContext, useEffect, useState } from "react";
import { Clock as ClockIcon } from "@styled-icons/fa-regular/Clock";
import { ArrowLeftCircle as BackIcon } from "@styled-icons/feather/ArrowLeftCircle";
import { Mountains as DistanceIcon } from "@styled-icons/foundation/Mountains";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import { LocaleContext } from "../../utils/context";
import Text from "../../components/Helpers/Text";
import getHikeInfo from "../../utils/hooks/getHikeInfo";
import Gallery from "../../components/Gallery";

const Main = () => {
  const { hike } = useParams();
  const { locale } = useContext(LocaleContext);

  const [text, setText] = useState("");
  const [metadata, setMetadata] = useState({
    title: "",
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
                  <FormattedMessage id="height" defaultMessage="Dislivello" />:{" "}
                </span>
                {metadata.height || ""}
              </Element>
            </List>
          </Info>
        </Side>
      </Container>

      <Gallery />
    </Base>
  );
};

export default Main;

const Base = styled.section`
  margin: 0 auto;
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${up("md")} {
    margin-top: 2rem;
  }
`;

const Highlight = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  /* height: 110px; */
  background: ${({ theme }) => theme.palette.gradient.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  color: ${({ theme }) => theme.palette.text.light};
  box-shadow: inset 0 0 0 4px rgba(21, 111, 121, 0.3);

  ${up("md")} {
    width: 60%;
  }
`;

const Name = styled.h2`
  /* font-family: ${({ theme }) => theme.typo.family.secondary}; */
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-shadow: 0 4px 4px rgba(9, 46, 48, 0.2);
  text-align: center;
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
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
  }
`;

const Article = styled.div`
  order: 2;
  width: 100%;
  background: #272e2b;
  padding: 2rem 3rem;
  border-radius: 16px;

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

  & img {
    object-fit: cover;
    float: left;
    margin: 1em 0;
    height: 150px;
    width: 100%;

    ${up("md")} {
      margin-right: 1rem;
      border-radius: 8px;

      &::after {
        float: none;
      }
    }
  }
`;

const Side = styled.div`
  flex: 1;
  /* margin-bottom: 2rem; */

  ${up("lg")} {
    margin-left: 1rem;
    margin-bottom: none;
    order: 2;
  }
`;

const Back = styled.div`
  padding: 1rem 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.gradient.light};
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  & span {
    margin-left: 0.2rem;
  }
`;

const Info = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
  background: #272e2b;
  border-radius: 8px;
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
