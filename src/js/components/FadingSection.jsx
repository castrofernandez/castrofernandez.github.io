import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import scrolltome from 'scrolltome';
import fade from '../styles/fade.keyframe';

import languageContainer from '../containers/Language.container';

const FadingSection = styled.div`
    opacity: 0;
    
    &.scrolled {
        animation: ${fade} 1s linear ${props => `${props.delay}s`};
        animation-fill-mode: forwards;
    }
`;

const Fader = ({ children, language, delay = 0 }) => {
    const [scrolled, setScrolled] = useState(false);
    const ref = useRef(null);

    const inViewPortHandler = () => setScrolled(true);

    useEffect(() => scrolltome.subscribe({ element: ref.current, inViewPortHandler, repeat: 'FIRST_IN' }), [language]);

    return (
        <FadingSection delay={delay} className={scrolled ? 'scrolled' : ''} ref={ref}>
            {children}
        </FadingSection>
    );
};

Fader.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string.isRequired,
    delay: PropTypes.number
};

export default languageContainer(Fader);
