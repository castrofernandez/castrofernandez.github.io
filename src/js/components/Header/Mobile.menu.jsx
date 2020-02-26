import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../../styles/globals';
import containme from 'containme';
import Translatable from '../Translatable/Translatable';
import { darken } from 'polished';

import { changeSection } from '../../actions';
import sections from './sections';

import Social from '../Social';

const Menu = styled.aside`
    width: 80vw;
    background-color: ${GLOBALS.colours.sections.mobileMenu.back};
    color: ${GLOBALS.colours.sections.mobileMenu.fore};
    padding: 20px;

    &.opened {
    }
`;

const MenuWrapper = styled.div`
  
`;

const Title = styled.h1`
    margin: 0;
    font: 400 50px/35px ${GLOBALS.fonts.pixel};
    text-transform: uppercase;
    border-bottom: 6px solid ${GLOBALS.colours.white};
    padding-bottom: 8px;
`;

const Ul = styled.ul`
    margin: 20px 0 0 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
`;

const Li = styled.li`
    text-transform: uppercase;
    border-bottom: 2px solid ${darken(0.05, GLOBALS.colours.sections.mobileMenu.back)};
    position: relative;

    &.active {
        &:after {
            position: absolute;
            right: -24px;
            top: 0;
            content: '';
            width: 0; 
            height: 0; 
            border-bottom: 20px solid transparent;
            border-top: 20px solid transparent;
            border-right: 20px solid ${GLOBALS.colours.white};
            font-size: 0;
            line-height: 0;
        }

        &.section-experience {
            &:after {
                border-right-color: ${GLOBALS.colours.sections.experience.back};
            }
        }

        &.section-studies {
            &:after {
                border-right-color: ${GLOBALS.colours.sections.studies.back};
            }
        }

        &.section-projects {
            &:after {
                border-right-color: ${GLOBALS.colours.sections.projects.back};
            }
        }
    }
`;

const A = styled.a`
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    text-decoration: none;
    color: ${GLOBALS.colours.text.default};

    &.active {
        color: ${GLOBALS.colours.white};
    }
`;

const MobileMenu = ({ section, changeSection, opened, onChange }) => (
    <Menu className={opened ? 'opened' : ''}>
        <MenuWrapper>
            <Title>Juan Castro</Title>
            <Ul>
                {
                    sections.map((s) => (
                        <Li key={s} className={`section-${s} ${s === section ? 'active' : ''}`}>
                            <A href={`#${s}`} onClick={(e) => {
                                changeSection(s);
                                onChange();
                            }}
                            className={s === section ? 'active' : ''}>
                                <Translatable text={s} />
                            </A>
                        </Li>
                    ))
                }
            </Ul>
            <Social fitted />
        </MenuWrapper>
    </Menu>
);

MobileMenu.propTypes = {
    section: PropTypes.string.isRequired,
    changeSection: PropTypes.func.isRequired,
    opened: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default containme({
    component: MobileMenu,
    actions: { changeSection },
    mapStateToProps: ({ section, opened }) => ({ section, opened })
});
