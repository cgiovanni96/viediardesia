import React from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import Image from "../Helpers/Image";

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
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 1rem;
  width: 80%;
  /* padding: 1rem; */
  background: #eaeaea;
  color: ${({ theme }) => theme.palette.text.inverse};
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

const Collaboration = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${up("lg")} {
    width: 50%;
    flex-direction: row;
  }
`;

const El = styled.li`
  margin: 1.5rem 0;
`;
