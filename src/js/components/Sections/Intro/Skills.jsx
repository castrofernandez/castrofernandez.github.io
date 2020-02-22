
import React from 'react';
import styled from 'styled-components';

import { TypingLi } from '../../TypingText/TypingText';
import { TranslatableTypingLi } from '../../TypingText/TranslatableTypingText';
import TypingChain from '../../TypingText/TypingChain';
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
        min-height: 430px;
    }
`;

const SkillLine = styled.div`
    margin-top: 25px;

    &:nth-child(1) {
        @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
            margin-left: 30px;
        }
        
        @media (max-width: ${GLOBALS.sizes.tablet}) {
            margin-left: 30px;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 120px;
            margin: 0 0 10px 0;
        }
    }

    &:nth-child(2) {
        margin-left: 100px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 80px;
            margin: 0 0 10px 0;
        }
    }

    &:nth-child(3) {
        margin-left: -50px;

        @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
            margin-left: 0;
        }

        @media (max-width: ${GLOBALS.sizes.tablet}) {
            margin-left: 0;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 120px;
            margin: 0 0 10px 0;
        }
    }
`;

const Skills = () => (
    <SkillWrapper>
        <SkillLine>
            <TypingChain>
                <TranslatableTypingLi text="computerScience" />
                <TranslatableTypingLi text="frontender" />
                <TranslatableTypingLi text="fullstack" />
            </TypingChain>
        </SkillLine>

        <SkillLine>
            <TypingChain>
                <TypingLi text="JavaScript" />
                <TypingLi text="React" />
                <TypingLi text="Vue" />
                <TypingLi text="Redux" />
                <TypingLi text="HTML5" />
                <TypingLi text="CSS3" />
            </TypingChain>
        </SkillLine>

        <SkillLine>
            <TypingChain>
                <TypingLi text="Ruby" />
                <TypingLi text="Rails" />
                <TypingLi text="Java" />
                <TypingLi text="Python" />
                <TypingLi text="PHP" />
                <TypingLi text="Node" />
                <TranslatableTypingLi text="designPatterns" />
            </TypingChain>
        </SkillLine>
    </SkillWrapper>
);

export default Skills;
