import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Base>Footer</Base>;
};

export default Footer;

const Base = styled.div`
  margin-top: 5rem;
  height: 100px;
  background: #1c1c1c;
  color: ${({ theme }) => theme.palette.text.light};
`;
