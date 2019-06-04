import sinon from 'sinon';

import Piece from '../../src/js/components/Tetris/Tetris.piece';
import { FULL, EMPTY } from '../../src/js/components/Tetris/Tetris.settings';

import { createBoard } from './utils';

describe('isPositionValid', () => {
    const initialBoard = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ];

    afterEach(() => {
        sinon.restore();
    });

    test('isPositionValid', () => {
        const pieceCode = 1;
        const board = createBoard(initialBoard);
        const piece = new Piece(board, pieceCode);
        expect(piece.isPositionValid(0, 0)).toBe(true);
        expect(piece.isPositionValid(0, 1)).toBe(true);
        expect(piece.isPositionValid(0, 2)).toBe(false);
        expect(piece.isPositionValid(2, 0)).toBe(false);
        expect(piece.isPositionValid(0, 4)).toBe(false);
        expect(piece.isPositionValid(1, 0)).toBe(true);
    });
});
