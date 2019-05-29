const TETRIS_NUM_ROWS = 12;
const TETRIS_NUM_COLUMNS = 10;

const TETRIS_START_FULL_ROWS = 4;
const TETRIS_START_SCORE = 250;
const TETRIS_ROW_BONUS = 150;

const EMPTY_CELL = 0;
const FULL_CELL = 1;

const FULL_LEVEL = 9999;
const MAX_LEVEL = 99;

export class Board {
    constructor() {
        this.cells = [];
        this.matrix = [];
        this.level = 1;
        this.points = 0;
    }

    numColumns() {
        return TETRIS_NUM_COLUMNS;
    }

    numRows() {
        return TETRIS_NUM_ROWS;
    }

    generate() {
        this.points = TETRIS_START_SCORE;

        for (let i = 0; i < this.numRows(); i++) {
            this.cells[i] = [];
            this.matrix[i] = [];
            this.setRowCount(i, 0);

            for (let j = 0; j < this.numColumns(); j++) {
                if (
                    i >= this.numRows() - TETRIS_START_FULL_ROWS &&
                    Math.floor(Math.random() * 3) !== 0 &&
                    this.matrix[i][this.numColumns()] <
                        this.numColumns() - 1
                ) {
                    this.cells[i][j] = FULL_CELL;
                    this.matrix[i][j] = FULL_CELL;

                    this.increaseRowCount(i);
                } else {
                    this.cells[i][j] = EMPTY_CELL;
                    this.matrix[i][j] = EMPTY_CELL;
                }
            }
        }
    }

    setPieceInBoard(posX, posY) {
        this.matrix[posY][posX] = FULL_CELL;

        this.increaseRowCount(posY);
    }

    isPositionFull(posX, posY) {
        return this.valueInPosition(posX, posY) === FULL_CELL;
    }

    isPositionEmpty(posX, posY) {
        return !this.isPositionFull(posX, posY);
    }

    valueInPosition(posX, posY) {
        return this.matrix[posY][posX];
    }

    getRowCount(row) {
        return this.valueInPosition(this.numColumns(), row);
    }

    setRowCount(row, value) {
        this.matrix[row][this.numColumns()] = value;
    }

    increaseRowCount(row) {
        this.setRowCount(row, this.getRowCount(row) + 1);
    }

    showPiece(piece, mark) {
        for (let i = 0; i < piece.element.length; i++) {
            for (let j = 0; j < piece.element[i].length; j++) {
                if (piece.element[i][j] === 1) {
                    this.cells[piece.y + i][piece.x + j] =
                        mark === true ? FULL_CELL : EMPTY_CELL;
                }
            }
        }
    }

    checkIfRowIsFull(posY) {
        if (
            this.matrix[posY][this.numColumns()] !==
            this.numColumns()
        ) {
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
            this.matrix[0][j] = EMPTY_CELL;
            this.cells[0][j] = EMPTY_CELL;
        }

        this.setRowCount(0, 0);

        this.points += TETRIS_ROW_BONUS;

        if (this.points >= FULL_LEVEL) {
            this.points = 0;
            this.level += 1;

            if (this.level > MAX_LEVEL) {
                this.level = 1;
            }
        }
    }

    getCells() {
        return this.cells;
    }
}
