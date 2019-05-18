import React from 'react';

import LanguageSelector from './LanguageSelector/LanguageSelector.container';

const Header = () => (
    <header className="header sticky">
        <nav>
            <a href="#" className="burger">
                <span />
                <span />
                <span />
            </a>
            <ul className="sections">
                <li className="active">
                    <a href="#intro" data-es="Inicio" data-ast="Entamu">
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        data-es="Experiencia"
                        data-ast="Esperiencia"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#studies" data-es="Estudios" data-ast="Estudios">
                        Studies
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        data-es="Proyectos"
                        data-ast="Proyeutos"
                    >
                        Projects
                    </a>
                </li>
            </ul>
            <p className="clock" id="clock">
                <span className="time hour" />
                <span className="blinker" />
                <span className="time minutes" />
                <span className="seconds" />
            </p>
            <LanguageSelector />
        </nav>
    </header>
);

export default Header;
