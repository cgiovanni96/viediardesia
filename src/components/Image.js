import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ alt, src }) => {
  return <LazyLoadImage alt={alt} src={src} effect={"blur"} />;
};

export default Image;
