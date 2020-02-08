import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeartFull from '../../../../images/heart.svg';
import HeartSemi from '../../../../images/heart-semi.svg';
import GLOBALS from '../../../styles/globals';
import fade from '../../../styles/fade.keyframe';
import scrollObserver from '../Section/ScrollObserver';

const HeartStyled = styled.img`
    display: inline-block;
    height: 58px;
    margin-left: 15px;
    margin-bottom: -4px;
    opacity: 0;

    &.scrolled {
        animation: ${fade} 1s linear;
        animation-fill-mode: forwards;
    }
    
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

const Heart = ({ intensity = 'full' }) => {
    const [scrolled, setScrolled] = useState(false);
    const ref = useRef(null);

    const handler = () => setScrolled(true);

    useEffect(() => scrollObserver.subscribe({ element: ref.current, handler }), []);

    return (
        <HeartStyled
            className={scrolled ? 'scrolled' : ''}
            ref={ref} alt=""
            src={intensity === 'full' ? HeartFull : HeartSemi} />
    );
};

Heart.propTypes = {
    intensity: PropTypes.string
};

export default Heart;
