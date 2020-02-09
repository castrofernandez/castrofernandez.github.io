import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import scrollObserver from '../Section/ScrollObserver';
import GLOBALS from '../../../styles/globals';
import grow from '../../../styles/grow.keyframe';

const BarWrapper = styled.hr`
    display: inline-block;
    width: 0;
    height: 22px;
    border: none;
    margin: 0;
    background-color: ${GLOBALS.colours.sections.intro.fore};
    
    &.scrolled {
        animation: ${grow} 1s;
        animation-fill-mode: forwards;
    }
`;

const Bar = () => {
    const [scrolled, setScrolled] = useState(false);
    const ref = useRef(null);

    const handler = () => setScrolled(true);

    useEffect(() => scrollObserver.subscribe({ element: ref.current, handler }), []);

    return (<BarWrapper className={scrolled ? 'scrolled' : ''} ref={ref} />);
};

export default Bar;