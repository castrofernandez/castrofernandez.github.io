import React from 'react';
import Translatable from './Translatable/Translatable.container';

const Nav = () => {
    return (
        <ul className="sections">
            <li className="active">
                <a href="#intro">
                    <Translatable text="home" />
                </a>
            </li>
            <li>
                <a href="#experience">
                    <Translatable text="experience" />
                </a>
            </li>
            <li>
                <a href="#studies">
                    <Translatable text="studies" />
                </a>
            </li>
            <li>
                <a href="#projects">
                    <Translatable text="projects" />
                </a>
            </li>
        </ul>
    );
};

export default Nav;
