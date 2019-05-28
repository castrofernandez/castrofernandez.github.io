import React from 'react';
import PropTypes from 'prop-types';

const formatScore = (score) => `${'0'.repeat(4 - score.length)}${score}`;

const Score = ({ score }) => (
    <div className="score">
        <span />
        <p id="score">{formatScore(score.toString())}</p>
    </div>
);

Score.propTypes = {
    score: PropTypes.number.isRequired
};

export default Score;
