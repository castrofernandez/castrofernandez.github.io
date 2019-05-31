import { FULL, EMPTY, DEFAULT_CONFIG } from './Tetris.settings';
import Level from './Tetris.board.level';
import Display from './Tetris.board.display';
import Initial from './Tetris.board.initial';

export default class Board {
    constructor(config = DEFAULT_CONFIG) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.display = new Display();
        this.level = new Level(config);

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
        const initial = new Initial(this.getConfig());
        const { matrix, rowCount } = initial.generate();

        this.matrix = matrix;
        this.rowCount = rowCount;
        this.mirrowDisplay();
    }

    mirrowDisplay() {
        this.display.setValues(this.matrix);
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
        this.display.showPiece(piece, mark);
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
        this.mirrowDisplay();
        this.level.addCompletedRowPoints();
    }

    deleteRow(row) {
        for (let i = row; i > 0; i--) {
            this.matrix[i] = this.matrix[i - 1];

            this.setRowCount(i, this.getRowCount(i - 1));
        }
    }

    addNewEmptyRowAtTop() {
        this.matrix[0] = this.getNewEmptyRow();

        this.setRowCount(0, 0);
    }

    isPosOutOfBounds(posX, posY) {
        return posY >= this.numRows() || posX >= this.numColumns() || posX < 0;
    }

    getPoints() {
        return this.level.getPoints();
    }

    getLevel() {
        return this.level.getLevel();
    }

    getCells() {
        return this.display.getCells();
    }
}
