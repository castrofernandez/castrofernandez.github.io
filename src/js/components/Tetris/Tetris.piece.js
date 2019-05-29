import * as Pieces from './Tetris.pieces';

const FULL = 1;
const EMPTY = 0;

export class Piece {
    constructor(board, pieceCode = null, rotation = 0) {
        this.board = board;
        this.pieceCode = this.getRandomPieceCode(pieceCode);
        this.rotation = rotation;
        this.element = Pieces.pieces[rotation][this.pieceCode];
        this.x = this.getNumColumns() / 2;
        this.y = 0;
        this.bestResult = 0;
        this.endGame = !this.isPossibleContinue(this.x, this.y);
    }

    getNumRows() {
        return this.board.numRows();
    }

    getNumColumns() {
        return this.board.numColumns();
    }

    getRandomPieceCode(pieceCode) {
        return pieceCode === null ? Math.floor(Math.random() * Pieces.length) : pieceCode;
    }

    render(mark) {
        this.board.showPiece(this, mark);
    }

    draw() {
        this.render(true);
    }

    clear() {
        this.render(false);
    }

    goDownIfPossible() {
        if (this.isPossibleContinue(this.x, this.y + 1)) {
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
            this.board.checkIfRowIsFull(this.y + i);
        }

        return false;
    }

    setPixelsInBoard() {
        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[i].length; j++) {
                if (this.isFullAt(i, j)) {
                    this.board.setPieceInBoard(this.x + j, this.y + i);
                }
            }
        }
    }

    isPossibleContinue(posX, posY) {
        if (this.isOutOfBounds(posX, posY)) {
            return false;
        }

        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[i].length; j++) {
                if (this.isNotEmptyGap(posX, posY, i, j)) {
                    return false;
                }
            }
        }

        return true;
    }

    isNotEmptyGap(posX, posY, i, j) {
        return this.board.isPositionFull(posX + j, posY + i) &&
            this.isFullAt(i, j);
    }

    isFullAt(posX, posY) {
        return this.element[posX][posY] === FULL;
    }

    isEmptyAt(posX, posY) {
        return this.element[posX][posY] === EMPTY;
    }

    isOutOfBounds(posX, posY) {
        return (
            posY >= this.getNumRows() ||
            posY + this.element.length - 1 >= this.getNumRows() ||
            posX >= this.getNumColumns() ||
            posX < 0
        );
    }

    numberOfCompletedRows(posX, posY) {
        let result = 0;

        let i = this.getNumRows() - 1;

        while (i >= 0 && this.board.getRowCount(i) > 0) {
            if (this.isFullRowInPosition(posY, i)) {
                result++;
            }

            i--;
        }

        return result * 100 + posY - this.numberOfSpotsBelow(posX, posY);
    }

    isFullRowInPosition(posY, i) {
        return this.getCombinedValueRowCount(posY, i) === this.getNumColumns();
    }

    getCombinedValueRowCount(posY, i) {
        return this.board.getRowCount(i) +
            this.verticalPieceValue(posY, i);
    }

    verticalPieceValue(pieceStart, posY) {
        if (posY - pieceStart >= this.element.length || posY < pieceStart) {
            return 0;
        }

        let result = 0;

        for (var i = 0; i < this.element[0].length; i++) {
            result += this.element[posY - pieceStart][i];
        }

        return result;
    }

    numberOfSpotsBelow(posX, posY) {
        let numSpots = 0;

        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[0].length; j++) {
                if (this.isSpotEmpty(posX, posY, i, j)) {
                    numSpots++;
                }
            }
        }

        return numSpots;
    }

    isSpotEmpty(posX, posY, i, j) {
        const isFullAt = this.isFullAt(i, j);
        const condition2 = i === this.element.length - 1 || this.isEmptyAt(i + 1, j);
        const isLastRowOrEmpty = this.isLastRow(posY + i) || this.board.isPositionEmpty(posX + j, posY + i + 1);

        return isFullAt && condition2 && isLastRowOrEmpty;
    }

    isLastRow(row) {
        return row + 1 === this.getNumRows();
    }

    evaluateBestPosition() {
        const max = { x: 0, value: 0 };

        let value;
        const length = this.getNumColumns() - this.element[0].length;

        for (let i = 0; i <= length; i++) {
            const posY = this.getLowestPosition(i);

            value = this.numberOfCompletedRows(i, posY > 0 ? posY - 1 : 0);

            if (value > max.value) {
                max.x = i;
                max.value = value;
            }
        }

        this.x = max.x;
        this.bestResult = max.value;

        return this;
    }

    getLowestPosition(posX) {
        let posY = 0;

        while (this.isPossibleContinue(posX, posY)) {
            posY++;
        }

        return posY;
    }

    rotate() {
        return new Piece(this.board, this.pieceCode, this.getNextRotation());
    }

    getNextRotation() {
        return (this.rotation + 1) % Pieces.NUMBER_OF_ROTATIONS;
    }
}
