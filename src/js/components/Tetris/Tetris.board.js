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

    addCellsToBoard(cells) {
        cells.map(pos => this.addSingleCellToBoard(pos));
    }

    addSingleCellToBoard({ x, y }) {
        this.matrix[y][x] = FULL;
        this.increaseRowCount(y);
    }

    isPositionFull(x, y) {
        return this.valueInPosition(x, y) === FULL;
    }

    isPositionEmpty(x, y) {
        return !this.isPositionFull(x, y);
    }

    isPositionEmpty(x, y) {
        return !this.isPositionFull(x, y);
    }

    valueInPosition(x, y) {
        return this.matrix[y][x];
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

    deleteAllFullRows() {
        this.rowCount.map((_, row) => this.deleteRowIfFull(row));
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
        this.matrix.splice(row, 1);
        this.rowCount.splice(row, 1);
    }

    addNewEmptyRowAtTop() {
        this.matrix.unshift(this.getNewEmptyRow());
        this.rowCount.unshift(0);
    }

    isPosOutOfBounds(x, y) {
        return y >= this.numRows() || x >= this.numColumns() || x < 0;
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

    getClonedMatrix() {
        return this.matrix.map((row) => [...row]);
    }
}
