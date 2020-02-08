import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import languageContainer from '../../containers/Language.container';
import GLOBALS from '../../styles/globals';
// import { STATUS } from './TypingStatus';

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

    &:nth-child(1) {
        @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
            margin-left: 30px;
        }
        
        @media (max-width: ${GLOBALS.sizes.tablet}) {
            margin-left: 30px;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 120px;
            margin: 0 0 10px 0;
        }
    }

    &:nth-child(2) {
        margin-left: 100px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 80px;
            margin: 0 0 10px 0;
        }
    }

    &:nth-child(3) {
        margin-left: -50px;

        @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
            margin-left: 0;
        }

        @media (max-width: ${GLOBALS.sizes.tablet}) {
            margin-left: 0;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            min-height: 120px;
            margin: 0 0 10px 0;
        }
    }
`;

const SPEED = 20;

// const getMovementStatus = (i, index) => i === index ? STATUS.STARTING : STATUS.WAITING;
// const getStatus = (i, index, paused) => paused ? STATUS.PAUSED : getMovementStatus(i, index);

const TypingChain = ({ children, language }) => {
    const [index, setIndex] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const finishedHandler = () => setIndex(index + 1);

    useEffect(() => {
        if (language !== currentLanguage) {
            setIndex(0);
            setCurrentLanguage(language);
        }
    }, [language]);

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
    language: PropTypes.string.isRequired
};

export default languageContainer(TypingChain);
