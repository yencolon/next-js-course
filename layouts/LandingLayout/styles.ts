import { css } from '@emotion/react';
import { theme } from '@shared/styles/theme';

const container = css`
    height: 100%;
    display: flex;
    flex-direction: row;
    ::first-child {
        flex: 1;
    }
    @media (max-width: ${theme.screens.sm}){
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-bottom: 10px
    }
`;

export { container }