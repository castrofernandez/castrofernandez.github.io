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

    showPiece(piece, value) {
        piece.getCoordinates().map(({ x, y }) => (this.cells[y][x] = value));
    }

    setRow(rowIndex, rowValues) {
        this.cells[rowIndex] = rowValues;
    }

    getCells() {
        return this.cells;
    }
}
