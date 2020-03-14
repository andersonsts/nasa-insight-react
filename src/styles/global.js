import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    -webkit-font-smoothing: antialiased !important;
    min-height: 100%;
  }

  body {
    background: url(${background}) no-repeat center;
    background-size: cover;

    margin: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;
