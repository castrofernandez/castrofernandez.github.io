import React from 'react';
import styled from 'styled-components';

import IntroColumns from './IntroColumns';
import Title from './Title';
import Skills from './Skills';
import GLOBALS from '../../../styles/globals';

const IntroWrapper = styled.section`
    background-color: #fff;
    color: ${GLOBALS.colours.text.lighter};
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        min-height: 740px;
    }
`;

const Wrapper = styled.div`
    padding: 80px 50px 40px 50px;
    max-width: ($max-width + 100px);

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        padding: 50px 20px 40px 20px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        padding: 0;
        position: relative;
    }
`;

const Intro = () => (
    <React.Fragment>
        <span id="intro" className="anchor" />
        <IntroWrapper>
            <Wrapper>
                <Title />
                <IntroColumns />
                <Skills />
            </Wrapper>
        </IntroWrapper>
    </React.Fragment>
);

export default Intro;
