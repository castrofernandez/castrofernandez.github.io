import React from 'react';
import styled, { keyframes } from 'styled-components';

import LanguageSelector from './LanguageSelector/LanguageSelector.container';
import SectionSelector from './SectionSelector';
import Clock from './Clock';
import Burger from './Burger';

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
`;

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
`;

const Header = () => (
    <HeaderWrapper>
        <NavWrapper>
            <Burger />
            <SectionSelector />
            <Clock />
            <LanguageSelector />
        </NavWrapper>
    </HeaderWrapper>
);

export default Header;
