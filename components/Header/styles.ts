import { css } from '@emotion/react';

const container = css`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  height: 15vh;
  box-shadow: 2px 1px 1px .5px rgb(0,0,0,.1);
`;

const navItemsContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size:  1.5rem;
  li {
    margin-right: 4rem;
  }
  li :hover {
    border-bottom: 5px red solid;
  }
`;

const navTitle  = css`
  margin-left: 2rem;
  font-size: 2rem;
`;

export { container, navItemsContainer, navTitle };
