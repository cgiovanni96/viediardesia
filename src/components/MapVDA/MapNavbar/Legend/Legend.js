import React, { useState, useContext } from "react";
import { down, up } from "styled-breakpoints";
import styled from "styled-components";
import { ChevronDown as DownIcon } from "@styled-icons/boxicons-regular/ChevronDown";
import { ChevronUp as UpIcon } from "@styled-icons/boxicons-regular/ChevronUp";
import { FilterAlt as FilterIcon } from "@styled-icons/boxicons-regular/FilterAlt";
// import { pointsByCategories } from "../../../../data/points";
import data from "../../../../data";
import Section from "./Section";
import { LegendContext } from "../../../Map";
import { LocaleContext } from "../../../../App";

const Legend = () => {
  const [selected, setSelected] = useState(false);
  const legendContext = useContext(LegendContext);
  const { locale } = useContext(LocaleContext);

  const toggleSelected = () => {
    return selected ? setSelected(false) : setSelected(true);
  };

  const onCheck = (e) => {
    legendContext.setChecked(e.target.value);
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
        <Form>
          <div value={legendContext.checked} onChange={onCheck}>
            <List>
              <Check value={0} name={"legend"} />
              Tutti
            </List>
            {data.points.map((categories) => {
              return (
                <List key={categories.id}>
                  <Check value={categories.id} name={"legend"} />
                  {categories.name[locale.id]}
                  <Section legend={categories.legend} />
                </List>
              );
            })}
          </div>
        </Form>
      </Menu>
    </Base>
  );
};

export default Legend;

const Base = styled.div`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  ${up("lg")} {
    position: relative;
  }
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
  z-index: 4;
  top: 60px;
  left: 00px;
  width: 100vw;
  background: ${({ theme }) => theme.palette.accent.light};
  color: black;
  min-height: 200px;
  max-height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${up("lg")} {
    display: ${(props) => (props.selected ? "inline-block" : "none")};
    position: absolute;
    left: -200px;
    top: 65px;
    padding: 1rem;
    width: 500px;
    border-radius: 1rem;
    overflow: scroll;
  }
`;

const Form = styled.form`
  ${down("lg")} {
    height: 100%;
    overflow: scroll;
  }
`;

const List = styled.ul``;

const Check = styled.input.attrs({ type: "radio" })``;
