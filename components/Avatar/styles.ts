import { css } from '@emotion/react';

const avatarContainer = css`
    border: 3px solid var(--page-color-accent);
    height: 99px;
    width: 99px;
    border-radius: 50%;
    padding: 0;
`;

const image = css`
    object-fit: cover;
    border-radius: 50%;
`;

export { avatarContainer, image }