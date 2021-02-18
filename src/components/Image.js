import React, { useState } from "react";
import Viewer from "react-viewer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ alt, src }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span>
      <LazyLoadImage
        alt={alt}
        src={src}
        effect={"blur"}
        onClick={() => setVisible(true)}
      />

      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={[{ src, alt }]}
      />
    </span>
  );
};

export default Image;
