import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Game } from './Tetris.game';

const TETRIS_EMPTY_BLOCK = 'empty';
const TETRIS_FULL_BLOCK = 'full';

const Tetris = ({ changeScore }) => {
    const [cells, setCells] = useState([]);
    const [game, setGame] = useState(null);

    const updateCells = c => setCells([...c]);

    const startTetris = () => {
        if (game) {
            game.finish();
        }

        const newGame = new Game({ updateCells, changeScore });

        setGame(newGame);
        newGame.start();
    };

    const getBlockStatus = value =>
        value === 1 ? TETRIS_FULL_BLOCK : TETRIS_EMPTY_BLOCK;

    useEffect(() => {
        startTetris();
    }, []);

    return (
        <div className="tetris" id="tetris">
            {cells.map(row => {
                return row.map((value, i) => {
                    return (
                        <div
                            className={`tetris-block ${getBlockStatus(value)}`}
                            key={i}
                        />
                    );
                });
            })}
        </div>
    );
};

Tetris.propTypes = {
    changeScore: PropTypes.func.isRequired
};

export default Tetris;
