import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SPEED = 80;

const TypingText = ({ text }) => {
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

    return (
        <p className="typing started">
            <span className="writen">{typed}</span>
        </p>
    );
};

TypingText.propTypes = {
    text: PropTypes.string.isRequired
};

export default TypingText;
