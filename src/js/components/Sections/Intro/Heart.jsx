import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeartFull from '../../../../images/heart.svg';
import HeartSemi from '../../../../images/heart-semi.svg';
import GLOBALS from '../../../styles/globals';

import FadingSection from '../../FadingSection';

const FadingHeart = styled.div`
    display: inline-block;
`;

const HeartStyled = styled.img`
    display: inline-block;
    height: 58px;
    margin-left: 15px;
    margin-bottom: -4px;
    
    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        height: 42px;
    }

    
`;

const Heart = ({ intensity = 'full', delay = 0 }) => (
    <FadingHeart>
        <FadingSection delay={delay}>
            <HeartStyled alt="" src={intensity === 'full' ? HeartFull : HeartSemi} />
        </FadingSection>
    </FadingHeart>
);

Heart.propTypes = {
    intensity: PropTypes.string,
    delay: PropTypes.number
};

export default Heart;
