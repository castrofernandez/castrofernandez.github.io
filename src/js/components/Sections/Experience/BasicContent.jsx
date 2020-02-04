import styled, { css } from 'styled-components';
import GLOBALS from '../../../styles/globals';

export const basicContent = css`
    font-size: 30px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 15px 0 0 0;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 24px;
        line-height: 26px;
        margin-top: 10px;
    }
`;

export const line = css`
    display: block;
    margin-top: 22px;
    counter-increment: line;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-top: 0;
    }

    &.empty {
      min-height: 22px;
    }

    &:before {
      width: 40px;
      content: counter(line);
      position: absolute;
      left: -80px;
      color: ${GLOBALS.colours.text.lighter};
      text-align: right;
      user-select: none;
    }
`;

export const trailComma = css`
    &:after {
        content: ',';
        margin-left: -2px;
    }
`;

const unindent = css`
    &.unindent {
        margin-left: -40px;

        @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
            margin-left: -20px;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            margin-left: 0;
            margin-top: 0;
        }
    }
`;

export const ArrayStart = styled.span`
    display: block;
    margin-top: 15px;
    ${line};

    &:after {
        content: '[';
    }

    ${unindent};
`;

export const ArrayEnd = styled.span`
    display: block;
    margin-top: 15px;
    ${line};

    &:after {
        content: ']';
    }

    ${unindent};
`;

export const Symbol = styled.span`
    color: ${GLOBALS.colours.ide.number};

    &:before {
        content: ':';
    }
`;
