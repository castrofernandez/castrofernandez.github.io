import { FULL, EMPTY, DEFAULT_CONFIG } from './Tetris.settings';

export default class Board {
    constructor(config = DEFAULT_CONFIG) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.cells = [];
        this.matrix = [];
        this.level = 1;
        this.points = this.getConfig().initialScore;
        this.rowCount = new Array(this.numRows()).fill(0);

        this.generate();
    }

    getConfig() {
        return this.config;
    }

    numColumns() {
        return this.getConfig().numColumns;
    }

    numRows() {
        return this.getConfig().numRows;
    }

    generate() {
        for (let i = 0; i < this.numRows(); i++) {
            this.cells[i] = [];
            this.matrix[i] = [];
            this.setRowCount(i, 0);

            for (let j = 0; j < this.numColumns(); j++) {
                if (this.mustInitialCellBeFull(i, j)) {
                    this.setInitialValue(i, j, FULL);
                    this.increaseRowCount(i);
                } else {
                    this.setInitialValue(i, j, EMPTY);
                }
            }
        }
    }

    setInitialValue(row, column, value) {
        this.cells[row][column] = value;
        this.matrix[row][column] = value;
    }

    mustInitialCellBeFull(row, column) {
        return (
            this.shouldInitialCellBeFull() &&
            this.isRowInInitialRowRange(row) &&
            this.wouldAnotherPieceCompleteTheRow(row)
        );
    }

    wouldAnotherPieceCompleteTheRow(row) {
        return this.getRowCount(row) < this.numColumns() - 1;
    }

    shouldInitialCellBeFull() {
        return Math.floor(Math.random() * 3) !== 0;
    }

    isRowInInitialRowRange(row) {
        return row >= this.numRows() - this.getConfig().initialFullRows;
    }

    setCellInBoard(posX, posY) {
        this.matrix[posY][posX] = FULL;

        this.increaseRowCount(posY);
    }

    isPositionFull(posX, posY) {
        return this.valueInPosition(posX, posY) === FULL;
    }

    isPositionEmpty(posX, posY) {
        return !this.isPositionFull(posX, posY);
    }

    valueInPosition(posX, posY) {
        return this.matrix[posY][posX];
    }

    getRowCount(row) {
        return this.rowCount[row];
    }

    setRowCount(row, value) {
        this.rowCount[row] = value;
    }

    increaseRowCount(row) {
        this.setRowCount(row, this.getRowCount(row) + 1);
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

    setCell(row, column, value) {
        this.cells[row][column] = value === true ? FULL : EMPTY;
    }

    isRowIncomplete(row) {
        return this.getRowCount(row) < this.numColumns();
    }

    isRowComplete(row) {
        return !this.isRowIncomplete(row);
    }

    getNewEmptyRow() {
        return new Array(this.numColumns()).fill(EMPTY);
    }

    deleteRowIfFull(row) {
        if (this.isRowIncomplete(row)) {
            return;
        }

        this.deleteRow(row);
        this.addNewEmptyRowAtTop();
        this.addCompletedRowPoints();
    }

    deleteRow(row) {
        for (let i = row; i > 0; i--) {
            this.matrix[i] = this.matrix[i - 1];
            this.cells[i] = this.cells[i - 1];

            this.setRowCount(i, this.getRowCount(i - 1));
        }
    }

    addNewEmptyRowAtTop() {
        this.matrix[0] = this.getNewEmptyRow();
        this.cells[0] = this.getNewEmptyRow();

        this.setRowCount(0, 0);
    }

    addCompletedRowPoints() {
        this.increasePoints();

        if (this.isLevelComplete()) {
            this.increaseLevel();
        }
    }

    increasePoints() {
        this.points += this.getConfig().rowBonus;
    }

    isLevelComplete() {
        return this.points >= this.getConfig().fullLevelPoints;
    }

    increaseLevel() {
        this.points = 0;
        this.level = (this.level + 1) % this.getConfig().maxLevel;
    }

    getCells() {
        return this.cells;
    }
}
