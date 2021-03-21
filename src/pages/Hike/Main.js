import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { up } from "styled-breakpoints";
import styled from "styled-components";

import Image from "../../components/Helpers/ZoomableImage";

const Main = () => {
  const { hike } = useParams();
  const [imgPath, setImgPath] = useState("1");

  useEffect(() => {
    const path = hike[hike.length - 1];
    setImgPath(path);
  }, [hike]);

  return (
    <Base>
      <Container>
        <Image src={`./hikes/rete/${imgPath}.jpg`} alt={"somethign"} />
      </Container>
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

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  font-family: ${({ theme }) => theme.typo.family.main};
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
  }

  & img {
    max-width: 100%;
  }
`;
