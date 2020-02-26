import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';

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
    transition: left 0.5s ease-in-out;

    &.opened {
        height: 100vh;
        left: 0;
    }
`;

const Body = styled.div`
    position: relative;
    width: 100vw;

    &.opened {
        overflow-y: scroll;
    }
`;

const Main = ({ opened }) => {
    const theClassName = opened ? 'opened' : '';

    return (
        <OuterWrapper className={theClassName}>
            <Wrapper className={theClassName}>
                <MobileMenu />
                <Body className={theClassName}>
                    <Header opened={opened} />
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
    opened: PropTypes.bool.isRequired
};

export default containme({
    component: Main,
    mapStateToProps: ({ opened }) => ({ opened })
});

