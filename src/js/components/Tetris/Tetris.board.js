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
        this.TETRIS_NUM_ROWS = TETRIS_NUM_ROWS;
        this.TETRIS_NUM_COLUMNS = TETRIS_NUM_COLUMNS;
        this.cells = [];
        this.matrix = [];
        this.level = 1;
        this.points = 0;
    }

    generate() {
        this.points = TETRIS_START_SCORE;

        //const tetris = document.getElementById('tetris');
        //tetris.innerHTML = '';

        for (let i = 0; i < this.TETRIS_NUM_ROWS; i++) {
            this.cells[i] = [];
            this.matrix[i] = [];
            this.matrix[i][this.TETRIS_NUM_COLUMNS] = 0; // Contador

            // var width = TETRIS_CELL_WIDTH + 'px';
            // var height = TETRIS_CELL_HEIGHT + 'px';

            for (let j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
                // this.cells[i][j] = document.createElement('div');

                // this.cells[i][j].style.minWidth = width;
                // this.cells[i][j].style.minHeight = height;

                if (
                    i >= this.TETRIS_NUM_ROWS - TETRIS_START_FULL_ROWS &&
                    Math.floor(Math.random() * 3) !== 0 &&
                    this.matrix[i][this.TETRIS_NUM_COLUMNS] <
                        this.TETRIS_NUM_COLUMNS - 1
                ) {
                    this.cells[i][j] = FULL_CELL;
                    this.matrix[i][j] = 1;
                    this.matrix[i][this.TETRIS_NUM_COLUMNS] =
                        this.matrix[i][this.TETRIS_NUM_COLUMNS] + 1; // Contador
                } else {
                    this.cells[i][j] = EMPTY_CELL;
                    this.matrix[i][j] = 0;
                }

                //tetris.appendChild(this.cells[i][j]);
            }
        }
    }

    setPieceInBoard(posX, posY) {
        this.matrix[posY][posX] = 1;

        this.matrix[posY][this.TETRIS_NUM_COLUMNS] =
            this.matrix[posY][this.TETRIS_NUM_COLUMNS] + 1; // Contador
    }

    isPositionFull(posX, posY) {
        return this.valueInPosition(posX, posY) === FULL_CELL;
    }

    valueInPosition(posX, posY) {
        try {
            return this.matrix[posY][posX];
        } catch (e) {
            // alert(posX + ' ' + posY);
        }
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

    checkFullRow(posY) {
        if (
            this.matrix[posY][this.TETRIS_NUM_COLUMNS] !==
            this.TETRIS_NUM_COLUMNS
        ) {
            return;
        }

        for (let i = posY; i > 0; i--) {
            for (let j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
                this.matrix[i][j] = this.matrix[i - 1][j];
                this.cells[i][j] = this.cells[i - 1][j];
            }

            this.matrix[i][TETRIS_NUM_COLUMNS] = this.matrix[i - 1][
                TETRIS_NUM_COLUMNS
            ]; // Contador
        }

        for (let j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
            this.matrix[0][j] = 0;
            this.cells[0][j] = EMPTY_CELL;
        }

        this.matrix[0][this.TETRIS_NUM_COLUMNS] = 0; // Contador

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
