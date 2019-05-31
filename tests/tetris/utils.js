import sinon from 'sinon';

import Board from '../../src/js/components/Tetris/Tetris.board';
import Initial from '../../src/js/components/Tetris/Tetris.board.initial';

const setBoard = cells => () => {
    return {
        matrix: [...cells].map(row => [...row]),
        rowCount: cells.map(row => row.reduce((sum, cell) => sum + cell))
    };
};

export const createBoard = (cells = []) => {
    const numRows = cells.length;
    const numColumns = cells[0].length;

    sinon.stub(Initial.prototype, 'generate').callsFake(setBoard(cells));

    const board = new Board({ numRows, numColumns, initialFullRows: numRows });

    return board;
};