import React from 'react';
import styled from 'styled-components';

import { TypingParagraph } from './TypingText/TypingText.component';
import Heart from './Heart';
import Bar from './Bar';
import GLOBALS from '../styles/globals';

const H1 = styled.h1`
    width: calc(100% + 20px);
    text-transform: uppercase;
    margin: 0 0 20px -20px;
    text-align: right;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        width: 100%;
        margin-left: 0;
        margin-bottom: 10px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
`;

const Line = styled.div`
    font: 400 95px/97px ${GLOBALS.fonts.pixel};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 65px;
        line-height: 67px;
    }

    > * {
        flex: 0 0 auto;
    }
`;

const Title = () => (
    <H1>
        <Line>
            <TypingParagraph text="<Juan Castro>" />
            <div>
                <Heart intensity="full" />
                <Heart intensity="full" />
                <Heart intensity="semi" />
            </div>
        </Line>
        <Bar />
    </H1>
);

export default Title;
