import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    // brand
    --orange: ##F25D27;
    --blue: #123952;

    // texts
    --title: ##123952;
    --text: #617480;
    --support: ##A0ACB3

    // shapes
    --shape: ##FFFFFF;
    --shape_dark: #DCE2E6;

    // others
    --green: #51B853;
    --blue_low: #DDE9F0;

    // background
    --background: #DCE2E6;

  }

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
    font-family: 'Barlow', serif;
    background: var(--background);
    color: var(--text);
  }

  h1, h2, h3, h4, h5, h6 {}
`;
