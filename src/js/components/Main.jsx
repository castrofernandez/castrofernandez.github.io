import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';
import scrolltome from 'scrolltome';

import { changeOpened } from '../actions';
import MobileMenu from './Header/Mobile.menu';
import Header from './Header/Header';
import Intro from './Sections/Intro/Intro';
import Experience from './Sections/Experience/Experience';
import Studies from './Sections/Studies/Studies';
import Projects from './Sections/Projects/Projects';
import Footer from './Sections/Footer';
import GLOBALS from '../styles/globals';

const OuterWrapper = styled.div`
    position: relative;
    height: 100%;

    &.opened {
        overflow: hidden;
    }
`;

const Wrapper = styled.main`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 180vw;
    left: -80vw;
    transition: ${GLOBALS.transitions.mobileMenu};

    &.opened {
        height: 100vh;
        left: 0;
    }
`;

const Body = styled.div`
    position: relative;
    width: 100vw;
    overflow-y: hidden;
`;

const execute = (handler) => setTimeout(handler, 0);

const Main = ({ opened, changeOpened }) => {
    const theClassName = opened ? 'opened' : '';
    const ref = useRef(null);

    const scrollWindowTo = (y) => () => {
        changeOpened(false);
        scrolltome.start();
        window.scrollTo(0, y);
    };

    const getPageScrollPositionWhenMenuIsOpen = () => ref.current.scrollTop;

    const onMenuItemClick = () => execute(() => scrollWindowTo(getPageScrollPositionWhenMenuIsOpen())());

    const scrollPageWhenMenuIsOpen = (y) => () => ref.current.scroll(0, y);

    const onOpeningMenu = () => execute(scrollPageWhenMenuIsOpen(window.scrollY));

    const onClosingMenu = () => execute(scrollWindowTo(getPageScrollPositionWhenMenuIsOpen()));

    const onBurgerClick = (opening = false) => opening ? onOpeningMenu() : onClosingMenu();

    return (
        <OuterWrapper className={theClassName}>
            <Wrapper className={theClassName}>
                <MobileMenu onChange={onMenuItemClick} />
                <Body ref={ref} className={theClassName}>
                    <Header opened={opened} onBurgerClick={onBurgerClick} />
                    <Intro />
                    <Experience />
                    <Studies />
                    <Projects />
                    <Footer />
                </Body>
            </Wrapper>
        </OuterWrapper>
    );
};

Main.propTypes = {
    opened: PropTypes.bool.isRequired,
    changeOpened: PropTypes.func.isRequired
};

export default containme({
    component: Main,
    actions: { changeOpened },
    mapStateToProps: ({ opened }) => ({ opened })
});

