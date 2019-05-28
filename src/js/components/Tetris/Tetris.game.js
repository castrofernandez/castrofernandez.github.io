// if (IsMobile.isMobile()) {
//   $('#level').html('01');
//   return;
// }

import { Piece } from './Tetris.piece';
import { Board } from './Tetris.board';

const TETRIS_SPEED = 200;

export class Game {
    constructor({ updateCells, changeScore, changeLevel }) {
        this.board = new Board();
        this.piece = null;
        this.updateCells = updateCells;
        this.changeScore = changeScore;
        this.changeLevel = changeLevel;

        this.finished = false;

        this.interval = null;
    }

    start() {
        this.board.generate();

        this.interval = setInterval(() => this.loop(), TETRIS_SPEED);
    }

    finish() {
        this.finished = true;

        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    loop() {
        if (this.finished) {
            return;
        }

        if (this.piece == null) {
            this.piece = this.createNewPiece();
        }

        this.piece.show(true);

        if (!this.piece.goDown()) {
            this.piece = null;
        }

        this.changeScore(this.board.points);
        this.changeLevel(this.board.level);
        this.updateCells(this.board.getCells());

        if (this.piece != null && this.piece.endGame) {
            clearInterval(this.interval);
            this.interval = null;
            this.start();
        }
    }

    createNewPiece() {
        const newPiece = new Piece(this.board);
        const newPieceRotation1 = newPiece.rotate();
        const newPieceRotation2 = newPieceRotation1.rotate();
        const newPieceRotation3 = newPieceRotation2.rotate();

        return this.getBestPiece([
            newPiece.evaluateBestPosition(),
            newPieceRotation1.evaluateBestPosition(),
            newPieceRotation2.evaluateBestPosition(),
            newPieceRotation3.evaluateBestPosition()
        ]);
    }

    getBestPiece(pieces) {
        let bestPiece = pieces[0];

        for (let i = 1; i < pieces.length; i++) {
            if (pieces[i].bestResult > bestPiece.bestResult) {
                bestPiece = pieces[i];
            }
        }

        return bestPiece;
    }
}
