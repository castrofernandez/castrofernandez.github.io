import React from 'react';

import LanguageSelector from './LanguageSelector/LanguageSelector.container';
import Nav from './Nav';
import Clock from './Clock';
import Burger from './Burger';

const Header = () => (
    <header className="header sticky">
        <nav>
            <Burger />
            <Nav />
            <Clock />
            <LanguageSelector />
        </nav>
    </header>
);

export default Header;
