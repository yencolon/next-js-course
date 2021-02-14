import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    --page-width: 100%;
    --page-background: #2c2c54;
    --page-text: #f7f1e3;
    --page-text-invert: #706fd3;
    --page-background-accent: #474787;
    --page-color-accent: #706fd3;
    --page-color-main: #e67e22;
    --xs: 600px;
    --sm: 768px;
    --md: 992px;
    --lg: 1200px;
    --xl: 1900px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(----page-background);
    color: var(---page-text);
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
