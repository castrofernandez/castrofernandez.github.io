import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../../styles/globals';

import { Game } from './Tetris.game';
import Piece from './Piece.component';

const TetrisWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 30px 0 30px;
    width: calc(33.33% - 60px);

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        padding: 0 15px 0 15px;
        width: calc(33.33% - 30px);
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
`;

const Tetris = ({ changeScore, changeLevel }) => {
    const [cells, setCells] = useState([]);
    const [game, setGame] = useState(null);

    const updateCells = c => setCells([...c]);

    const startTetris = () => {
        if (game) {
            game.finish();
        }

        const newGame = new Game({ updateCells, changeScore, changeLevel });

        setGame(newGame);
        newGame.start();
    };

    useEffect(() => {
        startTetris();
    }, []);

    return (
        <TetrisWrapper id="tetris">
            {cells.map(row => {
                return row.map((value, i) => {
                    return (
                        <Piece key={i} value={value} />
                    );
                });
            })}
        </TetrisWrapper>
    );
};

Tetris.propTypes = {
    changeScore: PropTypes.func.isRequired,
    changeLevel: PropTypes.func.isRequired
};

export default Tetris;
