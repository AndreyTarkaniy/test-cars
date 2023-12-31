import { css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    font-style: normal;
    color: #8a8a89;
    background-color: white;
    line-height: calc(18 / 14);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
