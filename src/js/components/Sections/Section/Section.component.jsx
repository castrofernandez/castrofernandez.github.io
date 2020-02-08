import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import scrollObserver from './ScrollObserver';

const SectionWrapper = styled.section`
    min-height: 100vh;

    .section-title {
        display: inline-block;
        margin: 0 0 40px 0;
        font: 400 80px/60px ${GLOBALS.fonts.pixel};
        text-transform: uppercase;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            font-size: 36px;
            line-height: 30px;
            margin-bottom: 20px;
        }
    }
`;

const isSectionFocused = ({ top, bottom } = {}) => top <= 0 && bottom >= 0;

const Section = ({ id, children, changeSection }) => {
    const ref = useRef(null);

    const handler = (data) => isSectionFocused(data) ? changeSection(id) : false;

    useEffect(() => scrollObserver.subscribe({ element: ref.current, handler }), []);

    return (
        <SectionWrapper ref={ref}>
            <span id="intro" className="anchor" />
            { children }
        </SectionWrapper>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    changeSection: PropTypes.func.isRequired
};

export default Section;
