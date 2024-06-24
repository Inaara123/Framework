// themeManager.js
import { createGlobalStyle } from 'styled-components';
import { theme1, theme2, theme3 } from './themes';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export const themes = {
  theme1,
  theme2,
  theme3,
};
