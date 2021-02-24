import React from "react";
import styled from "styled-components";
import Image from "./Helpers/ZoomableImage";

const images = [
  {
    src: "./hikes/santagiulia/gallery/1.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/1-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/2.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/2-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/3.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/3-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/4.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/4-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/5.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/5-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/6.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/6-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/7.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/7-thumb.jpeg",
  },
  {
    src: "./hikes/santagiulia/gallery/8.jpeg",
    thumbnail: "./hikes/santagiulia/gallery/8-thumb.jpeg",
  },
];

const Gallery = () => {
  return (
    <Base>
      {images.map((img, id) => {
        return <Image src={img.src} alt={"Alt"} />;
      })}
    </Base>
  );
};

export default Gallery;

const Base = styled.div`
  width: 100%;
  margin-top: 2em;

  & img {
    margin: 0.5em 0.5em;
    width: 250px;
    height: 250px;
  }
`;
