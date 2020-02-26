import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../styles/globals';
import Section from './Section/Section';
import { TypingSpan } from '../TypingText/TypingText';
import TranslatableTypingSpan from '../Translatable/Translatable';

import FadingSection from './Section/FadingSection';

import Asturies from '../../../images/asturies.svg';

import Social from '../Social';

const FooterWrapper = styled.footer`
    background-color: ${GLOBALS.colours.sections.footer.back};
`;

const Wrapper = styled.div`
    &.wrapper {
        padding-top: 80px;
        text-align: center;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            padding-top: 50px;
        }
    }
    
    .section-title {
        font-family: ${GLOBALS.fonts.pixelCondensed};

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            margin-bottom: 40px;
            font-size: 90px;
            line-height: 75px;
        }
    }
`;

const Title = styled.h2`
    color: ${GLOBALS.colours.white};
`;

const Ending = styled.div`
    text-transform: uppercase;
    font: 400 80px/60px ${GLOBALS.fonts.pixel};
    color: ${GLOBALS.colours.sections.footer.fore};

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: 60px;
        line-height: 50px;
        text-align: left;
    }

    &:before {
        content: '</';
        position: relative;
        left: 15px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            left: 5px;
        }
    }

    &:after {
        content: '>';
        position: relative;
        left: 4px;
    }
`;

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${GLOBALS.colours.sections.footer.fore};
    color: ${GLOBALS.colours.sections.footer.back};
    font-size: 32px;
    text-transform: uppercase;
    padding: 3px 0;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        padding: 6px 0;
        font-size: 25px;
        margin-top: 30px;
    }

    img {
        margin-right: 10px;
    }
`;

const Footer = () => (
    <Section id="footer">
        <FooterWrapper>
            <Wrapper className="wrapper">
                <Title className="section-title"><TypingSpan text="Game Over!" /></Title>
                <FadingSection>
                    <Social />
                </FadingSection>
                <Ending><TypingSpan text="Juan Castro" /></Ending>
            </Wrapper>
            <Bar>
                <img alt="" src={Asturies} />
                <TranslatableTypingSpan text="fechu" />
            </Bar>
        </FooterWrapper>
    </Section>
);

export default Footer;
