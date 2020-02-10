import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import scrollObserver from '../Section/ScrollObserver';
import fade from '../../../styles/fade.keyframe';

const Result = styled.div`
    opacity: 0;

    &.scrolled {
        animation: ${fade} 1s linear;
        opacity: 1;
    }
`;

const Input = styled.span`
    position: relative;

    &:before {
        content: '${props => props.text}';
        color: ${GLOBALS.colours.sections.studies.input};
        text-transform: uppercase;
    }
`;

const CommandResult = ({ children, length }) => {
    const [scrolled, setScrolled] = useState(false);
    const ref = useRef(null);

    const handler = () => setScrolled(true);

    useEffect(() => scrollObserver.subscribe({ element: ref.current, handler }), []);

    return (
        <Result ref={ref} className={scrolled ? 'scrolled' : ''}>
            <div><Input text={`Total ${length}`} /></div>
            {children}
        </Result>
    );
};

CommandResult.propTypes = {
    children: PropTypes.node,
    length: PropTypes.number.isRequired
};

export default CommandResult;
