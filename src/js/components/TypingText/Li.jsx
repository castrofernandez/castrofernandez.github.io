import styled from 'styled-components';
import { darken } from 'polished';
import GLOBALS from '../../styles/globals';

const Li = styled.li`
    flex: 0 0 auto;
    font: 400 50px/65px ${GLOBALS.fonts.pixelCondensed};
    text-align: left;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 35px;
        line-height: 50px;
    }

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        font-size: 26px;
        line-height: 40px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    span, a {
        &:not(.to-type) {
            display: inline-block;
            padding: 0 30px;
            background-color: ${GLOBALS.colours.secondary};
            color: ${GLOBALS.colours.text.lighter};

            @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
                padding: 0 15px;
            }

            @media (max-width: ${GLOBALS.sizes.tablet}) {
                padding: 0 10px;
            }

            @media (max-width: ${GLOBALS.sizes.mobile}) {
                padding: 0 15px;
            }
        }
    }

    a:hover {
        background-color: ${darken(0.2, GLOBALS.colours.secondary)};
    }

    &:nth-child(3n + 1) {
        span, a {
            background-color: ${GLOBALS.colours.primary};
            color: #fff;
        }

        a:hover {
            background-color: ${darken(0.3, GLOBALS.colours.primary)};
        }
    }

    &:nth-child(3n + 3) {
        span, a {
            background-color: ${GLOBALS.colours.text.lighter};
            color: #fff;
        }

        a:hover {
            background-color: ${darken(0.2, GLOBALS.colours.text.lighter)};
        }
    }
`;

export default Li;
