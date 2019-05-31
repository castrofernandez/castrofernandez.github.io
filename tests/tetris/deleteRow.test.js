import sinon from 'sinon';

import { createBoard } from './utils';

describe('deleteRow', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('deleteRow', () => {
        const initialBoard = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ];

        const board = createBoard(initialBoard);
        board.deleteRow(4);

        expect(board.matrix).toStrictEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]);
        expect(board.rowCount).toStrictEqual([0, 1, 2, 3, 5]);
    });
});
