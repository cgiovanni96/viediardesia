import React from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import Image from "../../components/Image";

const Footer = () => {
  return (
    <Base>
      <Collaboration>
        <El>
          <Image src={"./layout/unige.png"} alt={"UNIGE"} />
        </El>

        <El>
          <Image src={"./layout/pietreparlanti.png"} alt={"Pietre Parlanti"} />
        </El>
      </Collaboration>
    </Base>
  );
};

export default Footer;

const Base = styled.div`
  margin-top: 5rem;
  /* height: 100px; */
  padding: 1rem;
  background: #eaeaea;
  color: ${({ theme }) => theme.palette.text.inverse};
  display: flex;
  justify-content: center;
`;

const Collaboration = styled.ul`
  display: flex;
  justify-content: space-between;

  ${up("lg")} {
    width: 50%;
  }
`;

const El = styled.li``;
