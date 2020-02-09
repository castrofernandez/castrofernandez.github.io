import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../styles/globals';
import Section from './Section/Section.container';
import { TranslatableTypingParagraph } from '../TypingText/TranslatableTypingText.component';

const StudiesWrapper = styled.div`
    background-color: ${GLOBALS.colours.sections.studies.back};
    color: ${GLOBALS.colours.sections.studies.fore};
`;

const Title = styled.div`
    position: relative;
    font-family: ${GLOBALS.fonts.pixelCondensed};
`;

const TitleSecondary = styled(TranslatableTypingParagraph)`
    color: ${GLOBALS.colours.primary};
`;

const TitlePrimary = styled(TranslatableTypingParagraph)`
    position: absolute;
    top: 4px;
    left: 3px;
`;

const Studies = () => (
    <Section id="studies">
        <StudiesWrapper>
            <div className="wrapper">
                <h2 className="section-title">
                    <Title>
                        <TitleSecondary text="studies" />
                        <TitlePrimary text="studies" />
                    </Title>
                </h2>
            </div>
        </StudiesWrapper>
    </Section>
);

export default Studies;
