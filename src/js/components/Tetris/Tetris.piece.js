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
        return this.board.TETRIS_NUM_ROWS;
    }

    getNumColumns() {
        return this.board.TETRIS_NUM_COLUMNS;
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
            this.board.checkFullRow(this.y + i);
        }

        return false;
    }

    setPixelsInBoard() {
        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[i].length; j++) {
                if (this.element[i][j] === FULL) {
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
                if (
                    this.board.isPositionFull(posX + j, posY + i) &&
                    this.element[i][j] === FULL
                ) {
                    return false;
                }
            }
        }

        return true;
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
        let rowValue = 0;

        let i = this.getNumRows() - 1;

        while (
            i >= 0 &&
            this.board.valueInPosition(this.getNumColumns(), i) > 0
        ) {
            rowValue = this.board.valueInPosition(this.getNumColumns(), i);

            rowValue += this.verticalPieceValue(posY, i);

            if (rowValue === this.getNumColumns()) {
                result++;
            }

            i--;
        }

        return result * 100 + posY - this.numberOfSpotsBelow(posX, posY);
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
                if (this.element[i][j] === FULL) {
                    if (
                        i === this.element.length - 1 ||
                        this.element[i + 1][j] === EMPTY
                    ) {
                        if (
                            posY + i + 1 === this.getNumRows() ||
                            !this.board.isPositionFull(posX + j, posY + i + 1)
                        ) {
                            numSpots++;
                        }
                    }
                }
            }
        }

        return numSpots;
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
