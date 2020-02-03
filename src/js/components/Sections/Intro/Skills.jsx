
import React from 'react';
import styled from 'styled-components';

import { TypingLi } from '../../TypingText/TypingText.component';
import { TranslatableTypingLi } from '../../TypingText/TranslatableTypingText.component';
import TypingChain from '../../TypingText/TypingChain.component';
import GLOBALS from '../../../styles/globals';

const SkillWrapper = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-top: 10px;
        padding: 0 20px;
    }
`;

const Skills = () => (
    <SkillWrapper>
        <TypingChain>
            <TranslatableTypingLi text="computerScience" />
            <TranslatableTypingLi text="frontender" />
            <TranslatableTypingLi text="fullstack" />
        </TypingChain>

        <TypingChain>
            <TypingLi text="JavaScript" />
            <TypingLi text="React" />
            <TypingLi text="Vue" />
            <TypingLi text="Redux" />
            <TypingLi text="HTML5" />
            <TypingLi text="CSS3" />
        </TypingChain>

        <TypingChain>
            <TypingLi text="Ruby" />
            <TypingLi text="Rails" />
            <TypingLi text="Java" />
            <TypingLi text="Python" />
            <TypingLi text="PHP" />
            <TypingLi text="Node" />
            <TranslatableTypingLi text="designPatterns" />
        </TypingChain>
    </SkillWrapper>
);

export default Skills;
