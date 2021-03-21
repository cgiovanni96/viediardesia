import React from "react";
import styled from "styled-components";
import ZoomableImage from "../../../components/Helpers/Image";

const Primo = () => {
  return (
    <ImgContainer>
      <ZoomableImage src={"/hikes/rete/1.jpg"} alt={"Poster primo sentiero"} />
    </ImgContainer>
  );
};

export default Primo;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;

  & img {
    width: 100%;
  }
`;
