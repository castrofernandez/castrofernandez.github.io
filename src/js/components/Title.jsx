import React from 'react';
import styled from 'styled-components';

import { TypingParagraph } from './TypingText/TypingText.component';
import Heart from './Heart';
import Bar from './Bar';
import GLOBALS from '../styles/globals';

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
    <React.Fragment>
        <Line>
            <TypingParagraph text="<Juan Castro>" />
            <div>
                <Heart intensity="full" />
                <Heart intensity="full" />
                <Heart intensity="semi" />
            </div>
        </Line>
        <Bar />
    </React.Fragment>
);

export default Title;
