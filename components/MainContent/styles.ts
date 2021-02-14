import { css } from '@emotion/react';
import { theme } from '@shared/styles/theme';

const mainContentContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 3.5rem;
    @media (max-width: ${theme.screens.sm}) {
        padding: 1rem 2.5rem;
    }
`;

const title = css`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

export { mainContentContainer, title };
