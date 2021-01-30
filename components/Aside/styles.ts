import { css } from '@emotion/react';

const container = css`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    opacity: 0.7;
    :hover{
        opacity: 1
    }
`;

const infoContainer = css`
    text-align: center;
`;

const contactInfoContainer = css`
    width: 100%;    
    li {
        font-size: 0.75rem;
        margin: 1.5rem 0;
        display: flex;
        align-items: center;
        svg {
            margin-right: 10px;
        }
    }
`;

export { container, infoContainer, contactInfoContainer }