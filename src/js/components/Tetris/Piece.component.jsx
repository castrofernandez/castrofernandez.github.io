import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../../styles/globals';

const PieceBlock = styled.div`
    width: calc(10% - 4px);
    height: calc(8.33% - 4px);
    margin: 2px;
    flex: 1 1 auto;

    &.full {
        background-color: ${GLOBALS.colours.text.lighter};
    }

    &.empty {
        background-color: #f8f8f8;
    }
`;

const TETRIS_EMPTY_BLOCK = 'empty';
const TETRIS_FULL_BLOCK = 'full';

const getBlockStatus = value => {
    return value === 1 ? TETRIS_FULL_BLOCK : TETRIS_EMPTY_BLOCK;
};

const Piece = ({ value }) => (
    <PieceBlock className={getBlockStatus(value)} />
);

Piece.propTypes = {
    value: PropTypes.number.isRequired
};

export default Piece;
