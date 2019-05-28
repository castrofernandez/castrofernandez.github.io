import React from 'react';
import PropTypes from 'prop-types';

const formatScore = level => `${'0'.repeat(2 - level.length)}${level}`;

const Level = ({ level }) => (
    <p className="message">
        <span>{formatScore(level.toString())}</span>
    </p>
);

Level.propTypes = {
    level: PropTypes.number.isRequired
};

export default Level;
