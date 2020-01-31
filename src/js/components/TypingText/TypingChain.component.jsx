import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import languageContainer from '../../containers/LanguageContainer';
import { STATUS } from './TypingStatus';

const SPEED = 20;

const getMovementStatus = (i, index) => i === index ? STATUS.STARTING : STATUS.WAITING;
const getStatus = (i, index, paused) => paused ? STATUS.PAUSED : getMovementStatus(i, index);

const TypingChain = ({ children, language }) => {
    const [index, setIndex] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [paused, setPaused] = useState(false);
    const finishedHandler = () => setIndex(index + 1);

    useEffect(() => {
        if (language !== currentLanguage) {
            setIndex(0);
            setPaused(true);
            setCurrentLanguage(language);
        }
    }, [language]);

    return (
        <ul className="typing-chain">
            {
                React.Children.map(children, (child, i) => React.cloneElement(child, {
                    initialStatus: getStatus(i, index, paused),
                    finishedHandler,
                    speed: SPEED
                }))
            }
        </ul>
    );
};

TypingChain.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string.isRequired
};

export default languageContainer(TypingChain);
