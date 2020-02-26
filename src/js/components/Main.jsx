import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';

import { changeOpened } from '../actions';
import MobileMenu from './Header/Mobile.menu';
import Header from './Header/Header';
import Intro from './Sections/Intro/Intro';
import Experience from './Sections/Experience/Experience';
import Studies from './Sections/Studies/Studies';
import Projects from './Sections/Projects/Projects';
import Footer from './Sections/Footer';

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
    transition: left 0.4s ease-in-out;

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

const Main = ({ opened, changeOpened }) => {
    const theClassName = opened ? 'opened' : '';
    const ref = useRef(null);

    const scrollTo = (y) => {
        changeOpened(false);
        window.scrollTo(0, y);
    };

    const onChange = () => setTimeout(() => scrollTo(ref.current.scrollTop), 10);

    const scrollMenuTo = (y) => () => ref.current.scroll(0, y);

    const onOpen = () => setTimeout(scrollMenuTo(window.scrollY), 10);

    return (
        <OuterWrapper className={theClassName}>
            <Wrapper className={theClassName}>
                <MobileMenu onChange={onChange} />
                <Body ref={ref} className={theClassName}>
                    <Header opened={opened} onOpen={onOpen} />
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

