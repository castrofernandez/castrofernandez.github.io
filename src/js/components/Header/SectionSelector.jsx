import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../../styles/globals';
import Translatable from '../Translatable/Translatable';
import SelectorItem from './SelectorItem';

const NavWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
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

const sections = ['intro', 'experience', 'studies', 'projects'];

const SectionSelector = ({ section }) => (
    <NavWrapper>
        {
            sections.map((s) => (
                <Li key={s} className={s === section ? 'active' : ''}>
                    <SelectorItem href={`#${s}`}>
                        <Translatable text={s} />
                    </SelectorItem>
                </Li>
            ))
        }
    </NavWrapper>
);

SectionSelector.propTypes = {
    section: PropTypes.string.isRequired
};

export default SectionSelector;
