import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import GLOBALS from '../../styles/globals';
import Section from './Section/Section';
import { TypingSpan } from '../TypingText/TypingText';
import TranslatableTypingSpan from '../Translatable/Translatable';

import FadingSection from '../FadingSection';

import Asturies from '../../../images/asturies.svg';

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

const Links = styled.ul`
    margin: 0 0 40px 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-bottom: 20px;
    }

    li {
        width: calc(50% - 15px);
        flex: 0 0 auto;
        margin-bottom: 30px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            width: 100%;
        }
    }
`;

const Link = styled.a`
    display: inline-block;
    width: 100%;
    color: ${GLOBALS.colours.white};
    text-decoration: none;
    padding: 12px 25px;
    font-size: 30px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: 25px;
    }

    &.mail {
        background-color: ${GLOBALS.colours.primary};

        &:hover {
            background-color: ${darken(0.06, GLOBALS.colours.primary)};
        }
    }

    &.twitter {
        background-color: ${GLOBALS.colours.sections.footer.twitter};

        &:hover {
            background-color: ${darken(0.15, GLOBALS.colours.sections.footer.twitter)};
        }
    }

    &.linkedin {
        background-color: ${GLOBALS.colours.sections.footer.linkedin};
        color: ${GLOBALS.colours.text.default};

        &:hover {
            background-color: ${darken(0.04, GLOBALS.colours.sections.footer.linkedin)};
        }

        span {
            color: ${GLOBALS.colours.white};
        }
    }

    &.github {
        background-color: ${GLOBALS.colours.sections.footer.github};

        &:hover {
            background-color: ${lighten(0.1, GLOBALS.colours.sections.footer.github)};
        }
    }
`;

const Footer = () => (
    <Section id="footer">
        <FooterWrapper>
            <Wrapper className="wrapper">
                <Title className="section-title"><TypingSpan text="Game Over!" /></Title>
                <FadingSection>
                    <Links>
                        <li>
                            <Link className="link mail" href="mailto:info@juancastro.es">info@juancastro.es</Link>
                        </li>
                        <li>
                            <Link className="link twitter" rel="me nofollow" href="https://twitter.com/castrofernandez">Twitter</Link>
                        </li>
                        <li>
                            <Link className="link linkedin" rel="me nofollow" href="https://es.linkedin.com/pub/juan-castro-fernández/35/43b/728">Linked<span>In</span></Link>
                        </li>
                        <li>
                            <Link className="link github" rel="me nofollow" href="https://github.com/castrofernandez/">GitHub</Link>
                        </li>
                    </Links>
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
