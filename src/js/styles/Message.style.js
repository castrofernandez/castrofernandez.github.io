import styled from 'styled-components';
import GLOBALS from './globals';
import blink from '../styles/blink.keyframe';

const Message = styled.p`
    font: 400 65px/70px ${GLOBALS.fonts.pixelCondensed};
    margin: 0 0 20px 0;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    min-width: 100%;

    span:not(.to-type) {
        display: inline-block;
        padding: 10px 30px;
        background-color: ${GLOBALS.colours.primary};
        color: #fff;
    }

    &:nth-child(2) {
        text-align: right;
        
        span {
            background-color: ${GLOBALS.colours.secondary};
            color: ${GLOBALS.colours.text.lighter};
        }
    }

    &:nth-child(3) {
        text-align: right;

        span {
          background-color: ${GLOBALS.colours.text.lighter};
          animation: ${blink} 1.5s ease;

          &:before {
            content: 'Level ';
          }
        }
    }

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 10px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        position: relative;
        z-index: 100;
    }
`;

export default Message;
