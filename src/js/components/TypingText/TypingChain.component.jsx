import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from './TypingStatus';

const SPEED = 20;

const TypingChain = ({ children }) => {
    const [index, setIndex] = useState(0);
    const finishedHandler = () => setIndex(index + 1);

    return (
        <ul className="typing-chain">
            {
                React.Children.map(children, (child, i) => React.cloneElement(child, {
                    initialStatus: i === index ? STATUS.STARTING : STATUS.WAITING,
                    finishedHandler,
                    speed: SPEED
                }))
            }
        </ul>
    );
};

TypingChain.propTypes = {
    children: PropTypes.node.isRequired
};

export default TypingChain;
