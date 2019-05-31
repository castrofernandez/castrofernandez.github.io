import sinon from 'sinon';

import Board from '../../src/js/components/Tetris/Tetris.board';

import { createBoard } from './utils';

describe('default Board', () => {
    test('empty default (5x4)', () => {
        const board = new Board({
            numRows: 5,
            numColumns: 4,
            initialFullRows: 0
        });
        expect(board.getCells()).toStrictEqual([
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
        expect(board.getCells()).toStrictEqual([[0, 0], [0, 0], [0, 0]]);
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

        expect(board.getCells()).toStrictEqual([[0, 1], [1, 1]]);
        expect(board.matrix).toStrictEqual([[0, 1], [1, 1]]);
        expect(board.rowCount).toStrictEqual([1, 2]);
    });

    test('(3x3)', () => {
        const board = createBoard([[0, 1, 1], [1, 1, 0]]);

        expect(board.getCells()).toStrictEqual([[0, 1, 1], [1, 1, 0]]);
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
        expect(board.matrix).toStrictEqual(board.getCells());

        board.deleteRowIfFull(5);
        expect(board.matrix).toStrictEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1]
        ]);
        expect(board.matrix).toStrictEqual(board.getCells());
    });
});
