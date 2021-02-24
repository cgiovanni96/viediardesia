import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import LanguageSwitcher from "../../LanguageSwitcher";

const Navigation = () => {
  return (
    <>
      <NavEl>
        <RouterLink to="/about">
          <FormattedMessage id="who" defaultMessage="CHI SIAMO" />
        </RouterLink>
      </NavEl>
      <NavEl>
        <RouterLink to="/paths">
          <FormattedMessage id="list" defaultMessage="LISTA ITINERARI" />
        </RouterLink>
      </NavEl>
      <LanguageSwitcher />
    </>
  );
};

export default Navigation;

const NavEl = styled.div`
  margin-left: 1rem;
  font-weight: ${(props) =>
    props.bold ? props.theme.typo.weight.bold : props.theme.typo.weight.light};
`;
