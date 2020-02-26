import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import containme from 'containme';

import LanguageSelector from './LanguageSelector';
import SectionSelector from './SectionSelector';
import Clock from './Clock';
import Burger from './Burger';
import GLOBALS from '../../styles/globals';

const slide = keyframes`
    0% {
        top: -70px;
    }

    100% {
        top: 0;
    }
`;

const HeaderWrapper = styled.header`
    position: ${props => props.opened ? 'absolute' : 'fixed'};
    top: -70px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    animation: ${slide} 0.5s linear;
    animation-fill-mode: forwards;

    &.section-puzzle {
        background-color: ${GLOBALS.colours.sections.intro.back};
        
        @media (max-width: ${GLOBALS.sizes.mobile}) {
            background-color: transparent;
        }
    }

    &.section-intro {
        background-color: ${GLOBALS.colours.sections.intro.back};
    }

    &.section-experience {
        background-color: ${GLOBALS.colours.sections.experience.back};
    }

    &.section-studies {
        background-color: ${GLOBALS.colours.sections.studies.back};
    }

    &.section-projects {
        background-color: ${GLOBALS.colours.sections.projects.back};
    }
`;

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ({ section, puzzle, opened, onOpen }) => (
    <HeaderWrapper opened={opened} className={`section-${puzzle ? 'puzzle' : section}`}>
        <NavWrapper>
            <Burger onOpen={onOpen} />
            <SectionSelector section={section} />
            <Clock />
            <LanguageSelector />
        </NavWrapper>
    </HeaderWrapper>
);

Header.propTypes = {
    section: PropTypes.string.isRequired,
    puzzle: PropTypes.bool.isRequired,
    opened: PropTypes.bool,
    onOpen: PropTypes.func.isRequired
};

export default containme({
    component: Header,
    mapStateToProps: ({ section, puzzle }) => ({ section, puzzle })
});
