import React from "react";
import { useParams } from "react-router";

import { up } from "styled-breakpoints";
import styled from "styled-components";

import Gallery from "../../components/Gallery";
import Primo from "./Hikes/Primo";
import Secondo from "./Hikes/Secondo";

const Main = () => {
  const { hike } = useParams();

  console.log("HIKE", hike);

  const Component = hike === "percorso1" ? Primo : Secondo;
  // const { locale } = useContext(LocaleContext);

  // const [text, setText] = useState("");
  // const [metadata, setMetadata] = useState({
  //   title: "",
  //   altitude: "",
  //   duration: "",
  //   height: "",
  // });

  // useEffect(() => {
  //   const md = async () => {
  //     const { content, metadata } = await getHikeInfo(hike, locale.id);
  //     setText(content);
  //     setMetadata(metadata);
  //   };

  //   md();
  // }, [hike, locale]);

  return (
    <Base>
      <Container>
        <Component />
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

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  font-family: ${({ theme }) => theme.typo.family.main};
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
  }
`;
