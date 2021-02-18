import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Legend from "./Legend/Legend";
import { Link as RouterLink } from "react-router-dom";
import { up } from "styled-breakpoints";

const DesktopLeftMenu = () => {
  return (
    <Base>
      <Legend />
      <Link>
        <RouterLink to="/about">
          <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
        </RouterLink>
      </Link>
      <Link>
        <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
      </Link>
    </Base>
  );
};

export default DesktopLeftMenu;

const Base = styled.div`
  display: none;
  font-size: 18px;
  align-items: center;
  ${up("md")} {
    display: flex;
  }
`;

const Link = styled.span`
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    color: #1e221a;
  }
`;
