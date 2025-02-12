'use client';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.black};
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: 100px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;