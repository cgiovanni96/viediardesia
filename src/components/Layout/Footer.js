import React from "react";
import { FormattedMessage } from "react-intl";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import Image from "../Helpers/Image";

const Footer = () => {
  return (
    <Base>
      <Collaboration>
        <Div>
          <El>
            <FormattedMessage
              id="tesi"
              defaultMessage="Tesi di Laurea Magistrale - Gabriele Ghisleni"
            />
          </El>
          <El>
            <a href={"https://unige.it/it"}>
              <Image src={"./layout/unige.png"} alt={"UNIGE"} />
            </a>
          </El>
        </Div>

        <Div>
          <El>
            <FormattedMessage
              id="pietreparlanti"
              defaultMessage="Pietre Parlanti"
            />
          </El>

          <El>
            <a href={"https://pietreparlantiblog.wordpress.com/informazioni/"}>
              <Image
                src={"./layout/pietreparlanti.png"}
                alt={"Pietre Parlanti"}
              />
            </a>
          </El>
        </Div>
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
    width: 100%;
    flex-direction: row;
  }
`;

const Div = styled.div`
  display: flex;
  margin: 0 1rem;
  max-width: 50%;
  align-items: center;
  justify-content: center;
`;

const El = styled.li`
  margin: 1.5rem 1rem;
  font-size: 0.8rem;
  text-align: justify;
  max-width: 40%;
`;
