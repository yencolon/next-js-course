import React from 'react';
import { container, navItemsContainer, navTitle } from './styles';

const Header: React.FC = () => {
  return (
    <nav css={container}>
      <div css={navTitle}>
        <a href='/'>Mi Journey</a>
      </div>
      <ul css={navItemsContainer}>
        <li>
          <a href="#">Sobre Mi</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
