import React, { useState } from "react";
import Viewer from "react-viewer";

const Image = ({ alt, src }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span>
      <img
        src={src}
        alt={alt}
        onClick={() => setVisible(true)}
        style={{ cursor: "pointer" }}
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
