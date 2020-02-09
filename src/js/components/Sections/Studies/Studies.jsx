import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Section from '../Section/Section.container';
import { TranslatableTypingParagraph } from '../../TypingText/TranslatableTypingText.component';
import Shell from './Shell';
import Study from './Study';

import TranslatableTypingSpan from '../../Translatable/Translatable.container';

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
                <article>
                    <Shell commands={['cd Studies/University', 'ls -la']} length={2}>
                        <Study title="master" subjects={[
                            'HTML5', 'CSS3', 'Ruby On Rails', 'Python',
                            'Java', 'PHP', 'C# .NET', 'Android', 'MySQL', 'jQuery',
                            'TDD',
                            <TranslatableTypingSpan text="designPatterns" />,
                            <TranslatableTypingSpan text="compilers" />
                        ]} />
                        <Study title="degree" subjects={[
                            'C++', 'C',
                            <TranslatableTypingSpan text="algorithms" />,
                            <TranslatableTypingSpan text="networks" />,
                            <TranslatableTypingSpan text="dataBases" />,
                            'SQL',
                            <TranslatableTypingSpan text="dataStructures" />,
                            <TranslatableTypingSpan text="softwareEngineering" />,
                            <TranslatableTypingSpan text="operatingSystems" />
                        ]} />
                    </Shell>
                </article>
            </div>
        </StudiesWrapper>
    </Section>
);

export default Studies;
