import React from "react";
import ReactMarkdown from "react-markdown";
import imagesPlugin from "remark-images";
import styled from "styled-components";

import Image from "./Image";

const renderers = {
  image: ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
  },
  link: (arg) => {
    return <Link href={arg.href}> {arg.node.children[0].value} </Link>;
  },
};

const Text = ({ document }) => {
  return (
    <ReactMarkdown
      renderers={renderers}
      plugins={[imagesPlugin]}
      children={document}
    />
  );
};

export default Text;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;
