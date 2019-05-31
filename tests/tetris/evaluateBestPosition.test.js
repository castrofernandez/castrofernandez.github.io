import sinon from 'sinon';

import Piece from '../../src/js/components/Tetris/Tetris.piece';

import { createBoard } from './utils';
import Board from '../../src/js/components/Tetris/Tetris.board';

describe('evaluateBestPosition', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('evaluateBestPosition', () => {
        const initialBoard = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 0, 0]
        ];

        const board = createBoard(initialBoard);
        let piece = new Piece(board, 0);

        piece.evaluateBestPosition();

        expect(piece.x).toStrictEqual(5);
        expect(piece.bestResult).toStrictEqual(6);

        piece = new Piece(board, 5);

        expect(piece.x).toStrictEqual(3);
        expect(piece.bestResult).toStrictEqual(0);
    });

    test('getCoordinates 1', () => {
        const piece = new Piece(new Board(), 1);
        piece.x = 1;
        piece.y = 1;
        expect(piece.getCoordinates()).toStrictEqual([
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 }
        ]);
    });

    test('getCoordinates 2', () => {
        const piece = new Piece(new Board(), 3);
        piece.x = 1;
        piece.y = 1;
        expect(piece.getCoordinates()).toStrictEqual([
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 2 }
        ]);
    });
});
