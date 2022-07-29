import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  :root {
    --primary-color: teal; 
    --primary-contrast-color: white;
  }
  `;

export default GlobalStyle;
