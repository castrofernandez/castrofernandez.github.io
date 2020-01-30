import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from './TypingStatus';

const SPEED = 80;

const mustBeShown = (status, typed = '') => status !== STATUS.WAITING && typed.length > 0;
const getWrapperClass = (status, typed) => mustBeShown(status, typed) ? 'started' : '';
const isTyping = (status) => status === STATUS.TYPING;

const typingDefault = (Tag = 'p') => {
    const InnerTypingText = ({
        index = 0,
        text,
        className = '',
        speed = SPEED,
        initialStatus = STATUS.STARTING,
        finishedHandler = () => {}
    }) => {
        const [toType, setToType] = useState(text.split(''));
        const [typed, setTyped] = useState('');
        const [timeoutHandler, setTimeoutHandler] = useState(null);
        const [status, setStatus] = useState(initialStatus);

        const updateStatus = (newStatus) => newStatus === STATUS.STARTING ? setStatus(STATUS.TYPING) : undefined;

        const doType = ([first, ...remainder] = []) => setTimeoutHandler(setTimeout(() => {
            setToType(remainder);
            setTyped([...typed, first]);
        }, speed));

        const finishTyping = () => {
            setStatus(STATUS.FINISHED);
            finishedHandler(index);
        };

        const processTyping = () => (toType.length > 0) ? doType(toType) : finishTyping();

        const clearTyping = () => {
            clearTimeout(timeoutHandler);
            setToType('');
            setTyped(text);
            setStatus(STATUS.FINISHED);
        };

        const stopAnimationIfLanguageHasChangedHandler = () => isTyping(status) ? clearTyping() : undefined;

        const typingHandler = () => isTyping(status) ? processTyping() : undefined;

        useEffect(() => updateStatus(status), [status]);

        useEffect(() => updateStatus(initialStatus), [initialStatus]);

        useEffect(typingHandler, [typed, status]);

        useEffect(stopAnimationIfLanguageHasChangedHandler, [text]);

        return (
            <Tag className={`${className} typing ${getWrapperClass(status, typed)}`}>
                <span className="writen">{typed}</span>
            </Tag>
        );
    };

    InnerTypingText.propTypes = {
        index: PropTypes.number,
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        initialStatus: PropTypes.string,
        finishedHandler: PropTypes.func
    };

    return InnerTypingText;
};

export const TypingParagraph = typingDefault('p');

export const TypingLi = typingDefault('li');
