import React from 'react';
import styled from 'styled-components';

import { TypingMessage } from '../../TypingText/TypingText';
import { TranslatableTypingMessage } from '../../TypingText/TranslatableTypingText';
import Score from '../../Score/Score';
import Level from '../../Level/Level';

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
