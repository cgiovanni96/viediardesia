import React, { useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { Menu as MenuIcon } from "@styled-icons/boxicons-regular/Menu";
import { Link as RouterLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Legend from "./Legend";

const MobileLeftMenu = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    if (selected) setSelected(false);
    else setSelected(true);
  };

  return (
    <Base>
      <Legend />
      <MenuIcon size={30} color={"white"} onClick={toggleSelected} />
      <Menu selected={selected}>
        <List>
          <RouterLink to="/about">
            <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
          </RouterLink>

          <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
        </List>
      </Menu>
    </Base>
  );
};

export default MobileLeftMenu;

const Base = styled.div`
  display: inline-block;
  position: relative;

  ${up("md")} {
    display: none;
  }

  & > svg {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: absolute;
  display: ${(props) => (props.selected ? "flex" : "none")};
  background: #f5f5f5;
  color: ${({ theme }) => theme.palette.text.default};
  padding: 2rem 2rem;
  width: 200px;
  border-radius: 8px;
  right: 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
