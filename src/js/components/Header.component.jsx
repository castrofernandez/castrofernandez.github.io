import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import LanguageSelector from './LanguageSelector/LanguageSelector.container';
import SectionSelector from './SectionSelector';
import Clock from './Clock.container';
import Burger from './Burger';
import GLOBALS from '../styles/globals';

const slide = keyframes`
    0% {
        top: -70px;
    }

    100% {
        top: 0;
    }
`;

const HeaderWrapper = styled.header`
    position: fixed;
    top: -70px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    animation: ${slide} 0.5s linear;
    animation-fill-mode: forwards;

    &.section-intro {
        background-color: ${GLOBALS.colours.sections.intro.back};
    }

    &.section-experience {
        background-color: ${GLOBALS.colours.sections.experience.back};
    }
`;

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ({ section }) => (
    <HeaderWrapper className={`section-${section}`}>
        <NavWrapper>
            <Burger />
            <SectionSelector section={section} />
            <Clock />
            <LanguageSelector />
        </NavWrapper>
    </HeaderWrapper>
);

Header.propTypes = {
    section: PropTypes.string.isRequired
};

export default Header;
