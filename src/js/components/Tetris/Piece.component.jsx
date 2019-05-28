import React from 'react';
import PropTypes from 'prop-types';

const TETRIS_EMPTY_BLOCK = 'empty';
const TETRIS_FULL_BLOCK = 'full';

const getBlockStatus = value => {
    return value === 1 ? TETRIS_FULL_BLOCK : TETRIS_EMPTY_BLOCK;
};

const Piece = ({ value }) => (
    <div className={`tetris-block ${getBlockStatus(value)}`} />
);

Piece.propTypes = {
    value: PropTypes.number.isRequired
};

export default Piece;
