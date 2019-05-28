import React, { useState, useEffect } from 'react';

import { Game } from './Tetris.game';

const TETRIS_EMPTY_BLOCK = 'empty';
const TETRIS_FULL_BLOCK = 'full';

const Tetris = () => {
    const [cells, setCells] = useState([]);
    const [game, setGame] = useState(null);

    const startTetris = () => {
        if (game) {
            game.finish();
        }

        const newGame = new Game(c => {
            setCells([...c]);
        });

        setGame(newGame);
        newGame.start();
    };

    const getBlockStatus = value =>
        value === 1 ? TETRIS_FULL_BLOCK : TETRIS_EMPTY_BLOCK;

    useEffect(() => {
        startTetris();
    }, []);

    console.log('tetris');

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

export default Tetris;
