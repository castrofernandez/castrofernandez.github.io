import { createGlobalStyle } from 'styled-components';
import GLOBALS from '../styles/globals';
import { darken, lighten } from 'polished';

export default createGlobalStyle`
    ::-webkit-scrollbar {
        width: 16px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            width: 0;
        }
    }

    ::-webkit-scrollbar-track {
        background-color: ${lighten(0.1, GLOBALS.colours.text.default)};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${GLOBALS.colours.primary}
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${darken(0.15, GLOBALS.colours.primary)};
    }
`;
