import sinon from 'sinon';

import Piece from '../../src/js/components/Tetris/Tetris.piece';
import { FULL, EMPTY } from '../../src/js/components/Tetris/Tetris.settings';

import { createBoard } from './utils';

describe('showPiece', () => {
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

    test('showPiece FULL', () => {
        const pieceCode = 1;
        const board = createBoard(initialBoard);
        const piece = new Piece(board, pieceCode);
        piece.x = 0;
        piece.y = 1;
        board.showPiece(piece, FULL);
        expect(board.getCells()).toStrictEqual([
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]);
    });

    test('showPiece FULL', () => {
        const pieceCode = 3;
        const board = createBoard(initialBoard);
        const piece = new Piece(board, pieceCode);
        piece.x = 1;
        piece.y = 1;
        board.showPiece(piece, FULL);
        expect(board.getCells()).toStrictEqual([
            [0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]);
    });

    test('showPiece EMPTY', () => {
        const board = createBoard(initialBoard);
        const piece = new Piece(board, 1);
        piece.x = 1;
        piece.y = 0;
        board.showPiece(piece, EMPTY);
        expect(board.getCells()).toStrictEqual(initialBoard);
    });
});
