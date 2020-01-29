import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SPEED = 80;

const typingDefault = (Tag = 'p') => {
    const InnerTypingText = ({ text, className = '' }) => {
        const [toType, setToType] = useState(text.split(''));
        const [typed, setTyped] = useState('');

        useEffect(() => {
            if (toType.length > 0) {
                const [first, ...remainder] = toType;

                setTimeout(() => {
                    setToType(remainder);
                    setTyped([...typed, first]);
                }, SPEED);
            }
        }, [typed]);

        useEffect(() => {
            setToType('');
            setTyped(text);
        }, [text]);

        return (
            <Tag className={`${className} typing started`}>
                <span className="writen">{typed}</span>
            </Tag>
        );
    };

    InnerTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    return InnerTypingText;
};

export const TypingParagraph = typingDefault('p');

export const TypingLi = typingDefault('li');
