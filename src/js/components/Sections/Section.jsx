import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../styles/globals';

const SectionWrapper = styled.section`
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

const Section = ({ id, children }) => (
    <SectionWrapper>
        <span id="intro" className="anchor" />
        { children }
    </SectionWrapper>
);

Section.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;
