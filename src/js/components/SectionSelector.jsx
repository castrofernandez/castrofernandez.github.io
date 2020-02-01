import React from 'react';
import styled from 'styled-components';
import GLOBALS from '../styles/globals';
import Translatable from './Translatable/Translatable.container';
import SelectorItem from './SelectorItem';

const NavWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const Li = styled.li`
    flex: 0 0 auto;
    margin-right: 15px;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        a {
          background-color: ${GLOBALS.colours.primary};
          color: #fff;
          text-align: center;
        }
      }
`;

const SectionSelector = () => {
    return (
        <NavWrapper>
            <Li className="active">
                <SelectorItem href="#intro">
                    <Translatable text="home" />
                </SelectorItem>
            </Li>
            <Li>
                <SelectorItem href="#experience">
                    <Translatable text="experience" />
                </SelectorItem>
            </Li>
            <Li>
                <SelectorItem href="#studies">
                    <Translatable text="studies" />
                </SelectorItem>
            </Li>
            <Li>
                <SelectorItem href="#projects">
                    <Translatable text="projects" />
                </SelectorItem>
            </Li>
        </NavWrapper>
    );
};

export default SectionSelector;
