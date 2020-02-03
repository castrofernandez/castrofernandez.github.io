import React from 'react';
import styled from 'styled-components';

import { TypingMessage } from '../../TypingText/TypingText.component';
import { TranslatableTypingMessage } from '../../TypingText/TranslatableTypingText.component';
import Score from '../../Score/Score.container';
import Level from '../../Level/Level.container';

const ScoreWrapper = styled.div`
    text-align: right;
`;

const Scores = () => (
    <ScoreWrapper>
        <TranslatableTypingMessage text="welcome" />
        <TypingMessage text="Welcome!" />
        <Level />
        <Score />
    </ScoreWrapper>
);

export default Scores;
