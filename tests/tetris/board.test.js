import sinon from 'sinon';

import { FULL } from '../../src/js/components/Tetris/Tetris.settings';
import Board from '../../src/js/components/Tetris/Tetris.board';
import Piece from '../../src/js/components/Tetris/Tetris.piece';

const getCell = cells => (row, column) => cells[row][column] === FULL;

const createBoard = (cells = []) => {
    const numRows = cells.length;
    const numColumns = cells[0].length;

    sinon
        .stub(Board.prototype, 'mustInitialCellBeFull')
        .callsFake(getCell(cells));

    const board = new Board({ numRows, numColumns, initialFullRows: numRows });

    return board;
};

describe('default Board', () => {
    test('empty default (5x4)', () => {
        const board = new Board({
            numRows: 5,
            numColumns: 4,
            initialFullRows: 0
        });
        expect(board.cells).toStrictEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        expect(board.matrix).toStrictEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        expect(board.rowCount).toStrictEqual([0, 0, 0, 0, 0]);
    });

    test('empty (2x2)', () => {
        const board = new Board({
            numRows: 3,
            numColumns: 2,
            initialFullRows: 0
        });
        expect(board.cells).toStrictEqual([[0, 0], [0, 0], [0, 0]]);
        expect(board.matrix).toStrictEqual([[0, 0], [0, 0], [0, 0]]);
        expect(board.rowCount).toStrictEqual([0, 0, 0]);
    });
});

describe('defined Board', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('(2x2)', () => {
        const board = createBoard([[0, 1], [1, 1]]);

        expect(board.cells).toStrictEqual([[0, 1], [1, 1]]);
        expect(board.matrix).toStrictEqual([[0, 1], [1, 1]]);
        expect(board.rowCount).toStrictEqual([1, 2]);
    });

    test('(3x3)', () => {
        const board = createBoard([[0, 1, 1], [1, 1, 0]]);

        expect(board.cells).toStrictEqual([[0, 1, 1], [1, 1, 0]]);
        expect(board.matrix).toStrictEqual([[0, 1, 1], [1, 1, 0]]);
        expect(board.rowCount).toStrictEqual([2, 2]);
    });
});

describe('isRowComplete', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('complete row', () => {
        const board = createBoard([[0, 1]]);
        expect(board.isRowComplete(0)).toBe.false;
        expect(board.isRowIncomplete(0)).toBe.true;
    });

    test('incomplete row', () => {
        const board = createBoard([[1, 1]]);
        expect(board.isRowComplete(0)).toBe.true;
        expect(board.isRowIncomplete(0)).toBe.false;
    });
});

describe('deleteRowIfFull', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('row is deleted', () => {
        const initialBoard = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ];

        const board = createBoard(initialBoard);
        board.deleteRowIfFull(4);

        expect(board.matrix).toStrictEqual(initialBoard);
        expect(board.matrix).toStrictEqual(board.cells);

        board.deleteRowIfFull(5);
        expect(board.matrix).toStrictEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1]
        ]);
        expect(board.matrix).toStrictEqual(board.cells);
    });
});

describe('showPiece', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('showPiece', () => {
        const initialBoard = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ];

        const pieceCode = 1;
        const board = createBoard(initialBoard);
        const piece = new Piece(board, pieceCode);
        piece.x = 0;
        piece.y = 1;
        board.showPiece(piece, true);
        expect(board.cells).toStrictEqual([
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]);
        board.showPiece(piece, false);
        expect(board.cells).toStrictEqual(initialBoard);
    });
});
