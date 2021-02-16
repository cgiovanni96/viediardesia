import React, { useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import icons from "../../../icons/icons";
import { ChevronDown as DownIcon } from "@styled-icons/boxicons-regular/ChevronDown";
import { ChevronUp as UpIcon } from "@styled-icons/boxicons-regular/ChevronUp";
import { FilterAlt as FilterIcon } from "@styled-icons/boxicons-regular/FilterAlt";

const Legend = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    return selected ? setSelected(false) : setSelected(true);
  };

  return (
    <Base>
      <Text onClick={() => toggleSelected()}>
        <span>
          <FilterIcon size={28} color={"white"} />
        </span>
        {selected ? (
          <UpIcon size={24} color={"white"} />
        ) : (
          <DownIcon size={24} color={"white"} />
        )}
      </Text>
      <Menu selected={selected}>
        <List>
          {icons.map((icon) => {
            return (
              <Key key={icon.id}>
                <img src={icon.img} alt={icon.id} />
                <span>{icon.text.it} </span>
              </Key>
            );
          })}
        </List>
      </Menu>
    </Base>
  );
};

export default Legend;

const Base = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const Text = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: ${(props) => (props.selected ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  width: 100vw;
  background: white;
  color: black;
  max-height: 200px;
  overflow-y: scroll;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${up("lg")} {
    display: ${(props) => (props.selected ? "inline-block" : "none")};
    position: absolute;
    left: -200px;
    top: 65px;
    padding: 1rem;
    width: 500px;
    border-radius: 1rem;
  }
`;

const List = styled.ul`
  height: auto;
  position: relative;
  /* overflow-y: scroll; */
`;

const Key = styled.li`
  height: 40px;
  display: flex;
  align-items: center;

  & > span {
    margin-left: 1em;
  }
`;
