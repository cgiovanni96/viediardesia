import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../../../App";
import icons from "../../../../icons/icons";

const Section = ({ legend }) => {
  const { locale } = useContext(LocaleContext);

  return legend.map((name) => {
    const legend = icons[name];

    return (
      <Key key={legend.id}>
        <img src={legend.img} alt={legend.id} />
        <span>{legend.text[locale.id]} </span>
      </Key>
    );
  });
};

export default Section;

const Key = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 2rem;

  & > span {
    margin-left: 1em;
  }
`;
