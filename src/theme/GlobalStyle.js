import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: ${({ theme }) => theme.typo.family.main};
        background: ${({ theme }) => theme.palette.accent.medium};
        color: ${({ theme }) => theme.palette.text.default};
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
