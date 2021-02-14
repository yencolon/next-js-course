import { css } from '@emotion/react';
import { theme } from '@shared/styles/theme';

const container = css`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  height: 15vh;
  box-shadow: 2px 1px 1px 0.5px rgb(0, 0, 0, 0.1);
  @media (max-width: ${theme.screens.sm}) {
    justify-content: center;
    height: 10vh;
  }
`;

const navItemsContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.5rem;
  li {
    margin-right: 4rem;
    @media (max-width: ${theme.screens.sm}) {
      margin: 0;
    }
  }
  li :hover {
    border-bottom: 5px red solid;
  }
  @media (max-width: ${theme.screens.sm}) {
    margin: 0;
    display: none;
  }
`;

const navTitle = css`
  margin-left: 2rem;
  font-size: 2rem;
  @media (max-width: ${theme.screens.sm}) {
    font-size: 1.5rem;
    margin-left: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;

export { container, navItemsContainer, navTitle };
