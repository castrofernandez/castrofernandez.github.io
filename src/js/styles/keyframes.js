import { keyframes } from 'styled-components';

export const grow = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`;

export const fade = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const blink = keyframes`
    50% {
        opacity: 0;
    }
`;
