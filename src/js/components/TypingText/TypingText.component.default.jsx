import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from './TypingStatus';

const SPEED = 80;
const TYPING_CLASS = 'started';

const mustBeShown = (status, typed = '') => status !== STATUS.WAITING && typed.length > 0;
const getWrapperClass = (status, typed) => mustBeShown(status, typed) ? TYPING_CLASS : '';
const isTyping = (status) => status === STATUS.TYPING;
const isNotWaiting = (status) => status !== STATUS.WAITING && status !== STATUS.STARTING;

const typingDefault = (Tag) => {
    const InnerTypingText = ({
        text, className = '', speed = SPEED, initialStatus = STATUS.STARTING, finishedHandler = () => {}
    }) => {
        const [toType, setToType] = useState(text.split(''));
        const [typed, setTyped] = useState('');
        const [timeoutHandler, setTimeoutHandler] = useState(null);
        const [status, setStatus] = useState(initialStatus);

        const getClass = (suffix) => `${className} typing ${status.toLowerCase()} ${suffix}`;

        const getContent = (content) => (<span className="writen">{content}</span>);

        const wrapRender = (style, content) => (<Tag className={getClass(style)}>{getContent(content)}</Tag>);

        const typingRender = () => wrapRender(getWrapperClass(status, typed), typed);

        const pausedRender = () => wrapRender(TYPING_CLASS, text);

        const updateStatus = (newStatus) => newStatus === STATUS.STARTING ? setStatus(STATUS.TYPING) : undefined;

        const doType = ([first, ...remainder] = []) => setTimeoutHandler(setTimeout(() => {
            setToType(remainder);
            setTyped([...typed, first]);
        }, speed));

        const finishTyping = () => {
            setStatus(STATUS.FINISHED);
            finishedHandler();
        };

        const processTyping = () => (toType.length > 0) ? doType(toType) : finishTyping();

        const clearTyping = () => {
            clearTimeout(timeoutHandler);
            setToType('');
            setTyped(text);
            finishTyping();
        };

        const stopAnimationIfLanguageHasChangedHandler = () => isNotWaiting(status) ? clearTyping() : undefined;

        const typingHandler = () => isTyping(status) ? processTyping() : undefined;

        useEffect(() => updateStatus(status), [status]);

        useEffect(() => updateStatus(initialStatus), [initialStatus]);

        useEffect(typingHandler, [typed, status]);

        useEffect(stopAnimationIfLanguageHasChangedHandler, [text]);

        return initialStatus === STATUS.PAUSED ? pausedRender() : typingRender();
    };

    InnerTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        initialStatus: PropTypes.string,
        finishedHandler: PropTypes.func
    };

    return InnerTypingText;
};

export default typingDefault;
