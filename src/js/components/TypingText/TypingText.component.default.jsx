import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { STATUS } from './TypingStatus';
import scrollObserver from '../ScrollObserver';

const SPEED = 80;
const TYPING_CLASS = 'started';

const mustBeShown = (typed = '') => typed.length > 0;
const getWrapperClass = (typed) => mustBeShown(typed) ? TYPING_CLASS : '';
const isTyping = (inViewPort = false, status) => inViewPort && status === STATUS.TYPING;
const isNotWaiting = (status) => status !== STATUS.WAITING && status !== STATUS.STARTING;
const getSpan = (content) => (<span className="writen">{content}</span>);
const getLink = (content, link) => (<a href={link} target="about:blank" className="writen">{content}</a>);
const getContent = (content, link) => link ? getLink(content, link) : getSpan(content);

const typingDefault = (Tag) => {
    const InnerTypingText = ({ text, className = '', speed = SPEED, finishedHandler = () => {}, link }) => {
        const ref = useRef(null);
        const [inViewPort, setInViewPort] = useState(false);
        const [toType, setToType] = useState(text.split(''));
        const [typed, setTyped] = useState('');
        const timeoutRef = useRef(null);
        const [status, setStatus] = useState(STATUS.STARTING);

        const getClass = (suffix) => `${className} typing ${status.toLowerCase()} ${suffix}`;

        const wrapRender = (style, content) => (
            <Tag ref={ref} className={getClass(style)}>{getContent(content, link)}</Tag>);

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

        const clearTyping = () => {
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
            scrollObserver.subscribe({ element: ref.current, handler: () => setInViewPort(true) });

            return () => clearTyping();
        }, []);

        return typingRender();
    };

    InnerTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        finishedHandler: PropTypes.func,
        link: PropTypes.string
    };

    return InnerTypingText;
};

export default typingDefault;
