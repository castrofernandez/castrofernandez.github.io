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
            this.isRowIncomplete(row)
        );
    }

    isRowIncomplete(row) {
        return this.getRowCount(row) < this.numColumns() - 1;
    }

    shouldInitialCellBeFull() {
        return Math.floor(Math.random() * 3) !== 0;
    }

    isRowInInitialRowRange(row) {
        return row >= this.numRows() - this.getConfig().initialFullRows;
    }

    setPieceInBoard(posX, posY) {
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
                if (piece.element[i][j] === 1) {
                    this.cells[piece.y + i][piece.x + j] =
                        mark === true ? FULL : EMPTY;
                }
            }
        }
    }

    checkIfRowIsFull(posY) {
        if (this.getRowCount(posY) !== this.numColumns()) {
            return;
        }

        for (let i = posY; i > 0; i--) {
            for (let j = 0; j < this.numColumns(); j++) {
                this.matrix[i][j] = this.matrix[i - 1][j];
                this.cells[i][j] = this.cells[i - 1][j];
            }

            this.setRowCount(i, this.getRowCount(i - 1));
        }

        for (let j = 0; j < this.numColumns(); j++) {
            this.matrix[0][j] = EMPTY;
            this.cells[0][j] = EMPTY;
        }

        this.setRowCount(0, 0);

        this.points += this.getConfig().rowBonus;

        if (this.points >= this.getConfig().fullLevelPoints) {
            this.points = 0;
            this.level += 1;

            if (this.level > this.getConfig().maxLevel) {
                this.level = 1;
            }
        }
    }

    getCells() {
        return this.cells;
    }
}
