import * as Settings from './Tetris.settings';
import { FULL, EMPTY } from './Tetris.settings';

export default class Piece {
    constructor(board, pieceCode = null, rotation = 0) {
        this.board = board;
        this.pieceCode = this.getRandomPieceCode(pieceCode);
        this.rotation = rotation;
        this.element = Settings.pieces[rotation][this.pieceCode];
        this.x = Math.floor(this.board.numColumns() / 2);
        this.y = 0;
        this.bestResult = 0;
        this.endGame = !this.isPositionValid(this.x, this.y);
    }

    getRandomPieceCode(pieceCode) {
        return pieceCode === null
            ? Math.floor(Math.random() * Settings.LENGTH)
            : pieceCode;
    }

    render(mark) {
        this.board.showPiece(this, mark);
    }

    draw() {
        this.render(FULL);
    }

    clear() {
        this.render(EMPTY);
    }

    goDownIfPossible() {
        if (this.isPositionValid(this.x, this.y + 1)) {
            return this.goDown();
        }

        return this.setPieceInBoard();
    }

    goDown() {
        this.clear();
        this.increaseY();
        this.draw();

        return true;
    }

    increaseY() {
        this.y += 1;
    }

    setPieceInBoard() {
        this.setPixelsInBoard();

        for (let i = 0; i < this.element.length; i++) {
            this.board.deleteRowIfFull(this.y + i);
        }

        return false;
    }

    setPixelsInBoard() {
        this.board.addCellsToBoard(this.getCoordinates());
    }

    isPositionValid(x, y) {
        return this.getCoordinatesFromPosition(x, y).every(({ x, y }) => {
            return this.isInBounds(x, y) && this.board.isPositionEmpty(x, y);
        });
    }

    isFullAt(x, y) {
        return this.element[x][y] === Settings.FULL;
    }

    isEmptyAt(x, y) {
        return this.element[x][y] === Settings.EMPTY;
    }

    isInBounds(x, y) {
        return !this.isOutOfBounds(x, y);
    }

    isOutOfBounds(x, y) {
        return this.board.isPosOutOfBounds(x, y);
    }

    numberOfCompletedRows(x, y) {
        let result = 0;

        let i = this.board.numRows() - 1;

        while (i >= 0 && this.board.getRowCount(i) > 0) {
            if (this.isFullRowInPosition(y, i)) {
                result++;
            }

            i--;
        }

        return result * 100 + y - this.numberOfSpotsBelow(x, y);
    }

    isFullRowInPosition(y, i) {
        return (
            this.getCombinedValueRowCount(y, i) === this.board.numColumns()
        );
    }

    getCombinedValueRowCount(y, i) {
        return this.board.getRowCount(i) + this.verticalPieceValue(y, i);
    }

    verticalPieceValue(pieceStart, y) {
        if (y - pieceStart >= this.element.length || y < pieceStart) {
            return 0;
        }

        let result = 0;

        for (var i = 0; i < this.element[0].length; i++) {
            result += this.element[y - pieceStart][i];
        }

        return result;
    }

    numberOfSpotsBelow(x, y) {
        let numSpots = 0;

        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[0].length; j++) {
                if (this.isSpotEmpty(x, y, i, j)) {
                    numSpots++;
                }
            }
        }

        return numSpots;
    }

    isSpotEmpty(x, y, i, j) {
        const isFullAt = this.isFullAt(i, j);
        const condition2 =
            i === this.element.length - 1 || this.isEmptyAt(i + 1, j);
        const isLastRowOrEmpty =
            this.isLastRow(y + i) ||
            this.board.isPositionEmpty(x + j, y + i + 1);

        return isFullAt && condition2 && isLastRowOrEmpty;
    }

    isLastRow(row) {
        return row + 1 === this.board.numRows();
    }

    evaluateBestPosition() {
        const max = { x: 0, value: 0 };

        let value;
        const length = this.board.numColumns() - this.element[0].length;

        for (let i = 0; i <= length; i++) {
            const y = this.getLowestPosition(i);

            value = this.numberOfCompletedRows(i, y > 0 ? y - 1 : 0);

            if (value > max.value) {
                max.x = i;
                max.value = value;
            }
        }

        this.x = max.x;
        this.bestResult = max.value;

        return this;
    }

    getLowestPosition(x) {
        let y = 0;

        while (this.isPositionValid(x, y)) {
            y++;
        }

        return y;
    }

    rotate() {
        return new Piece(this.board, this.pieceCode, this.getNextRotation());
    }

    getNextRotation() {
        return (this.rotation + 1) % Settings.NUMBER_OF_ROTATIONS;
    }

    getCoordinatesFromPosition(x, y) {
        return this.element.reduce((result, row, j) => {
            return row.reduce((result, cell, i) => {
                return cell === FULL
                    ? [...result, { x: x + i, y: y + j }]
                    : result;
            }, result);
        }, []);
    }

    getCoordinates() {
        return this.getCoordinatesFromPosition(this.x, this.y);
    }
}
