import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;0,900;1,400;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html {
    font-size: 62.5%
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 2.4rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;
