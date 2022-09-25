import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: Nunito Sans, sans-serif;
        -webkit-font-smoothing: antialised;
    }

    body {
        font-family: Nunito Sans, sans-serif;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    input, button, h1, h2,h3,h4,h5,h6, select {
        font-family: Nunito Sans, sans-serif;
        font-size: 1rem;
    }
`;
