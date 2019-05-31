import { FULL, EMPTY, DEFAULT_CONFIG } from './Tetris.settings';

export default class Initial {
    constructor(config = DEFAULT_CONFIG) {
        this.config = { ...DEFAULT_CONFIG, ...config };
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
        const matrix = [];
        const rowCount = [];

        for (let i = 0; i < this.numRows(); i++) {
            const { values, count } = this.getNewRow(i);
            matrix[i] = values;
            rowCount[i] = count;
        }

        return { matrix, rowCount };
    }

    getNewRow(row) {
        return this.isRowInInitialRowRange(row)
            ? this.getNewRowWithRandomValues(row)
            : this.getNewEmptyRow();
    }

    getNewEmptyRow() {
        return { values: new Array(this.numColumns()).fill(0), count: 0 };
    }

    getNewRowWithRandomValues(row) {
        let count = 0;

        const values = new Array(this.numColumns()).fill().map(_ => {
            const value = this.getValue(count);
            count += value;
            return value;
        });

        return { values, count };
    }

    getValue(count) {
        return this.isRowFull(count) ? EMPTY : this.getRandomValue();
    }

    getRandomValue() {
        return Math.floor(Math.random() * 3) !== 0 ? FULL : EMPTY;
    }

    isRowInInitialRowRange(row) {
        return row >= this.numRows() - this.getConfig().initialFullRows;
    }

    isRowFull(count) {
        return count === this.numColumns() - 1;
    }
}
