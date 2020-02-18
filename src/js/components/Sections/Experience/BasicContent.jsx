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

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-top: 0;
    }
`;

export const line = css`
    ${basicContent};
    display: block;
    counter-increment: line;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        margin-top: 10px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-top: 0;
    }

    &.empty {
        min-height: 26px;
    }

    &:before {
        width: 48px;
        content: counter(line);
        position: absolute;
        left: -80px;
        color: ${GLOBALS.colours.text.lighter};
        text-align: right;
        user-select: none;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            display: none;
        }
    }

    &.end {
        &:after {
            content: 'end';
            color: ${GLOBALS.colours.ide.keyword};
        }
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

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: 18px;
    }
`;
