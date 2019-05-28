import { pieces } from './Tetris.pieces';

export class Piece {
    constructor(board) {
        this.board = board;
        this.codePiece = Math.floor(Math.random() * 8);
        this.rotation = 0;
        this.element = pieces[0][this.codePiece];
        this.x = 4;
        this.y = 0;
        this.bestResult = 0;
        this.endGame = !this.isPossibleContinue(this.x, this.y);
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
            posY >= this.board.TETRIS_NUM_ROWS ||
            posY + this.element.length - 1 >= this.board.TETRIS_NUM_ROWS ||
            posX >= this.board.TETRIS_NUM_COLUMNS ||
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

        let i = this.board.TETRIS_NUM_ROWS - 1;

        while (
            i >= 0 &&
            this.board.valueInPosition(this.board.TETRIS_NUM_COLUMNS, i) > 0
        ) {
            rowValue = this.board.valueInPosition(
                this.board.TETRIS_NUM_COLUMNS,
                i
            );

            rowValue += this.verticalPieceValue(posY, i);

            if (rowValue === this.board.TETRIS_NUM_COLUMNS) {
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
                            posY + i + 1 === this.board.TETRIS_NUM_ROWS ||
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
            i <= this.board.TETRIS_NUM_COLUMNS - this.element[0].length;
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
        let rotateAux = this.rotation + 1;

        if (rotateAux === 4) {
            rotateAux = 0;
        }

        const returnPiece = new Piece(this.board);
        returnPiece.element = pieces[rotateAux][this.codePiece];
        returnPiece.rotation = rotateAux;

        return returnPiece;
    }
}
