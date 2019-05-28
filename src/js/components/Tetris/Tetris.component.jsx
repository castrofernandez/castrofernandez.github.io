import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Game } from './Tetris.game';
import Piece from './Piece.component';

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
        <div className="tetris" id="tetris">
            {cells.map(row => {
                return row.map((value, i) => {
                    return (
                        <Piece key={i} value={value} />
                    );
                });
            })}
        </div>
    );
};

Tetris.propTypes = {
    changeScore: PropTypes.func.isRequired,
    changeLevel: PropTypes.func.isRequired
};

export default Tetris;
