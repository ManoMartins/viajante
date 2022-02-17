import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: #DCE2E6;
    color: #617480;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #123952
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-family: 'Heebo', sans-serif;
  }
`;
