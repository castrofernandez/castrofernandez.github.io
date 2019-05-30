import { FULL, EMPTY } from './Tetris.settings';

export default class Cells {
    constructor() {
        this.cells = [];
    }

    setValues(values) {
        this.cells = this.clone(values);
    }

    clone(values) {
        return [...values].map(row => [...row]);
    }

    showPiece(piece, mark) {
        for (let i = 0; i < piece.element.length; i++) {
            for (let j = 0; j < piece.element[i].length; j++) {
                if (piece.element[i][j] === FULL) {
                    this.setCell(piece.y + i, piece.x + j, mark);
                }
            }
        }
    }

    setRow(rowIndex, rowValues) {
        this.cells[rowIndex] = rowValues;
    }

    setCell(row, column, value) {
        this.cells[row][column] = value === true ? FULL : EMPTY;
    }

    getCells() {
        return this.cells;
    }
}
