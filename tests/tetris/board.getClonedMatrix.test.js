import Board from '../../src/js/components/Tetris/Tetris.board';

describe('getClonedMatrix', () => {
    test('not equals (references are different)', () => {
        const board = new Board({
            numRows: 5,
            numColumns: 4,
            initialFullRows: 2
        });
        const cloned = board.getClonedMatrix();
        expect(board.matrix).not.toBe(cloned);

        board.matrix.map((row, i) => {
            expect(row).not.toBe(cloned[i]);
        });
    });

    test('values are equal', () => {
        const board = new Board({
            numRows: 10,
            numColumns: 10,
            initialFullRows: 5
        });
        const cloned = board.getClonedMatrix();

        board.matrix.map((row, i) => {
            expect(row).toStrictEqual(cloned[i]);
        });
    });
});
