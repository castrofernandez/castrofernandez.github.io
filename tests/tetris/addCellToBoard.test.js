import sinon from 'sinon';

import { createBoard } from './utils';

describe('addCellsToBoard', () => {
    afterEach(() => {
        sinon.restore();
    });

    test('addCellsToBoard', () => {
        const initialBoard = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [0, 1, 1, 1, 1]
        ];

        const board = createBoard(initialBoard);
        board.addCellsToBoard([{ x: 0, y: 5 }]);

        expect(board.matrix).toStrictEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]);
    });
});
