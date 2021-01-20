import React from "react";
import ReactMarkdown from "react-markdown";
import images from "remark-images";
import Image from "./Image";

const renderers = {
  image: ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
  },
};

const Text = ({ document }) => {
  return (
    <ReactMarkdown
      renderers={renderers}
      plugins={[images]}
      children={document}
    />
  );
};

export default Text;
