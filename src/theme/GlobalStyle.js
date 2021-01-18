import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.palette.accent.medium};
        color: ${({ theme }) => theme.palette.text.default};
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
