import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeartFull from '../../../../images/heart.svg';
import HeartSemi from '../../../../images/heart-semi.svg';
import GLOBALS from '../../../styles/globals';
import fade from '../../../styles/fade.keyframe';

const HeartStyled = styled.img`
    display: inline-block;
    height: 58px;
    margin-left: 15px;
    margin-bottom: -4px;
    opacity: 0;
    animation: ${fade} 1s linear;
    animation-fill-mode: forwards;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        height: 42px;
    }

    &:nth-child(2) {
        animation-delay: 0.5s;
    }

    &:nth-child(3) {
        animation-delay: 1s;
    }
`;

const Heart = ({ intensity = 'full' }) => (
    <HeartStyled alt="" src={intensity === 'full' ? HeartFull : HeartSemi} />
);

Heart.propTypes = {
    intensity: PropTypes.string
};

export default Heart;
