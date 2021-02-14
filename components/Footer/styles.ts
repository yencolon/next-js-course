import { css } from '@emotion/react';
import { theme } from '@shared/styles/theme';

const footerContainer = css`
    background-color: #1e272e;
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    padding: 2.5rem 2rem;
    @media (max-width: ${theme.screens.sm}) {
        padding: 1rem 2.5rem;
        justify-content: center;
    }
`;

const copyrightText = css`
    font-size: 12px;
    color: white;
    font-weight: 300;
`;

export  { footerContainer, copyrightText }