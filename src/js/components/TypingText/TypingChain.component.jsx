import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import languageContainer from '../../containers/Language.container';
import GLOBALS from '../../styles/globals';

const Chain = styled.ul`
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        flex-wrap: wrap;
    }
`;

const SPEED = 20;

const TypingChain = ({ children, language, waiting = false }) => {
    const [index, setIndex] = useState(waiting ? -1 : 0);
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const finishedHandler = () => setIndex(index + 1);

    useEffect(() => {
        if (language !== currentLanguage) {
            setIndex(0);
            setCurrentLanguage(language);
        }
    }, [language, waiting]);

    const getChildrenToRender = () => children.slice(0, index + 1);

    return (
        <Chain>
            {
                React.Children.map(getChildrenToRender(), (child, i) => React.cloneElement(child, {
                    key: `${language}${i}`,
                    finishedHandler,
                    speed: SPEED
                }))
            }
        </Chain>
    );
};

TypingChain.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string.isRequired,
    waiting: PropTypes.bool
};

export default languageContainer(TypingChain);
