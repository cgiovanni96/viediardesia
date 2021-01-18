import React from "react";
import ReactMarkdown from "react-markdown";
import images from "remark-images";

const Text = ({ document }) => {
  return <ReactMarkdown plugins={[images]} children={document} />;
};

export default Text;
