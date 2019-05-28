import * as Pieces from './Tetris.pieces';

export class Piece {
    constructor(board, pieceCode = null, rotation = 0) {
        this.board = board;
        this.codePiece = pieceCode || this.getRandomCodePiece();
        this.rotation = rotation;
        this.element = Pieces.pieces[rotation][this.codePiece];
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

    getRandomCodePiece() {
        return Math.floor(Math.random() * Pieces.length);
    }

    show(mark) {
        this.board.showPiece(this, mark);
    }

    goDown() {
        if (this.isPossibleContinue(this.x, this.y + 1)) {
            this.show(false); // Borramos el hueco que dejó en la posición anterior

            this.y = this.y + 1;

            this.show(true);

            return true;
        }

        this.setPieceInBoard();

        return false;
    }

    setPieceInBoard() {
        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[i].length; j++) {
                if (this.element[i][j] === 1) {
                    this.board.setPieceInBoard(this.x + j, this.y + i);
                }
            }
        }

        for (let i = 0; i < this.element.length; i++) {
            this.board.checkFullRow(this.y + i);
        }
    }

    isPossibleContinue(posX, posY) {
        if (
            posY >= this.getNumRows() ||
            posY + this.element.length - 1 >= this.getNumRows() ||
            posX >= this.getNumColumns() ||
            posX < 0
        ) {
            return false;
        }

        for (let i = 0; i < this.element.length; i++) {
            for (let j = 0; j < this.element[i].length; j++) {
                if (
                    this.board.isPositionFull(posX + j, posY + i) &&
                    this.element[i][j] === 1
                ) {
                    return false;
                }
            }
        }

        return true;
    }

    numberOfCompletedRows(posX, posY) {
        let result = 0;
        let rowValue = 0;

        let i = this.getNumRows() - 1;

        while (
            i >= 0 &&
            this.board.valueInPosition(this.getNumColumns(), i) > 0
        ) {
            rowValue = this.board.valueInPosition(
                this.getNumColumns(),
                i
            );

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
                if (this.element[i][j] === 1) {
                    if (
                        i === this.element.length - 1 ||
                        this.element[i + 1][j] === 0
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
        let posY = 0;

        //var maxY = 0;
        let maxX = 0;
        let maxValue = 0;

        let value;

        for (
            let i = 0;
            i <= this.getNumColumns() - this.element[0].length;
            i++
        ) {
            while (this.isPossibleContinue(i, posY)) {
                posY++;
            }

            value = this.numberOfCompletedRows(i, posY > 0 ? posY - 1 : 0);

            if (value > maxValue) {
                //maxY = (posY - this.element.length + 1) ;
                maxX = i;
                maxValue = value;
            }

            posY = 0;
        }

        this.x = maxX;
        this.bestResult = maxValue;

        return this;
    }

    rotate() {
        const rotateAux = this.getNextRotation();

        const returnPiece = new Piece(this.board, this.pieceCode, rotateAux);
        returnPiece.element = Pieces.pieces[rotateAux][this.codePiece];
        returnPiece.rotation = rotateAux;

        return returnPiece;
    }

    getNextRotation() {
        return (this.rotation + 1) % Pieces.NUMBER_OF_ROTATIONS;
    }
}
