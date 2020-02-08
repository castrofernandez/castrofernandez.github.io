import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { STATUS } from './TypingStatus';
import scrollObserver from '../Sections/Section/ScrollObserver';

const SPEED = 80;
const TYPING_CLASS = 'started';

const mustBeShown = (typed = '') => typed.length > 0;
const getWrapperClass = (typed) => mustBeShown(typed) ? TYPING_CLASS : '';
const isTyping = (inViewPort = false, status) => inViewPort && status === STATUS.TYPING;
const isNotWaiting = (status) => status !== STATUS.WAITING && status !== STATUS.STARTING;
const getContent = (content) => (<span className="writen">{content}</span>);

const typingDefault = (Tag) => {
    const InnerTypingText = ({ text, className = '', speed = SPEED, finishedHandler = () => {} }) => {
        const [id] = useState(Date.now());
        const ref = useRef(null);
        const [inViewPort, setInViewPort] = useState(false);
        const [toType, setToType] = useState(text.split(''));
        const [typed, setTyped] = useState('');
        const timeoutRef = useRef(null);
        const [status, setStatus] = useState(STATUS.STARTING);

        const getClass = (suffix) => `${className} typing ${status.toLowerCase()} ${suffix}`;

        const wrapRender = (style, content) => (
            <Tag ref={ref} className={getClass(style)}>{getContent(content)}</Tag>);

        const typingRender = () => wrapRender(getWrapperClass(typed), typed);

        const updateStatus = (newStatus) => newStatus === STATUS.STARTING ? setStatus(STATUS.TYPING) : undefined;

        const doType = ([first, ...remainder] = []) => {
            timeoutRef.current = setTimeout(() => {
                setToType(remainder);
                setTyped([...typed, first]);
            }, speed);
        };

        const finishTyping = () => {
            setStatus(STATUS.FINISHED);
            finishedHandler();
        };

        // const processTyping = (stopped) => {
        //     return !stopped && toType.length > 0 ? doType(toType, stopped) : finishTyping();
        // };

        const clearTyping = () => {
            console.log(timeoutRef.current);
            clearTimeout(timeoutRef.current);
            setToType('');
            setTyped(text);
            finishTyping();
        };

        const stopAnimationIfLanguageHasChangedHandler = () => isNotWaiting(status) ? clearTyping() : undefined;

        useEffect(() => updateStatus(status), [status]);

        useEffect(() => {
            if (isTyping(inViewPort, status)) {
                if (toType.length > 0) {
                    doType(toType);
                } else {
                    finishTyping();
                }
            }
        }, [typed, status, inViewPort]);

        useEffect(stopAnimationIfLanguageHasChangedHandler, [text]);

        useEffect(() => {
            scrollObserver.subscribe({ id, element: ref.current, handler: () => setInViewPort(true) });

            return () => clearTyping();
        }, []);

        return typingRender();
    };

    InnerTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        finishedHandler: PropTypes.func
    };

    return InnerTypingText;
};

export default typingDefault;
