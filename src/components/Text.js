import React from "react";
import ReactMarkdown from "react-markdown";
import images from "remark-images";
import Image from "./Image";
import styled from "styled-components";

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
      plugins={[images]}
      children={document}
    />
  );
};

export default Text;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;
