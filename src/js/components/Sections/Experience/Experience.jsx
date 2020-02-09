import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Section from '../Section/Section.container';
import { TranslatableTypingParagraph } from '../../TypingText/TranslatableTypingText.component';
import Ide from './Ide';
import Bar from './Bar.container';

const ExperienceWrapper = styled.div`
    counter-reset: line;
    background-color: ${GLOBALS.colours.sections.experience.back};
    color: ${GLOBALS.colours.sections.experience.fore};
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    padding: 120px 70px 80px 70px;
    position: relative;
    z-index: 2;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        padding: 80px 40px 40px 90px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        padding: 80px 20px 20px 20px;
    }
`;

const Title = styled(TranslatableTypingParagraph)`
    position: relative;
    color: ${GLOBALS.colours.secondary};

    &:before,
    &:after {
      font-size: 40px;
      line-height: 34px;
      text-transform: lowercase;
      position: absolute;
      color: ${GLOBALS.colours.text.lighter};
    }

    &:before {
      content: 'defmodule';
      top: -34px;
      left: -44px;

      @media (max-width: ${GLOBALS.sizes.mobile}) {
          left: 0;
      }
    }

    &:after {
      content: 'do';
      bottom: 0;
      right: -50px;
    }
`;

const Experience = () => (
    <Section id="experience">
        <ExperienceWrapper>
            <Wrapper>
                <h2 className="section-title"><Title text="experience" /></h2>
                <Ide />
            </Wrapper>

            <Bar />
        </ExperienceWrapper>
    </Section>
);

export default Experience;
