// if (IsMobile.isMobile()) {
//   $('#level').html('01');
//   return;
// }

import Piece from './Tetris.piece';
import Board from './Tetris.board';

import { DEFAULT_CONFIG } from './Tetris.settings';

export class Game {
    constructor({ updateCells, changeScore, changeLevel }) {
        this.board = null;
        this.piece = null;
        this.updateCells = updateCells;
        this.changeScore = changeScore;
        this.changeLevel = changeLevel;

        this.finished = false;

        this.interval = null;
    }

    start() {
        this.board = new Board();

        this.interval = setInterval(() => this.loop(), DEFAULT_CONFIG.speed);
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

        this.checkIfPieceIsEmpty();
        this.movePieceDown();
        this.update();
        this.checkIfGameIsOver();
    }

    checkIfGameIsOver() {
        if (this.isGameOver()) {
            this.reset();
        }
    }

    checkIfPieceIsEmpty() {
        if (this.isPieceEmpty()) {
            this.piece = this.createNewPiece();
        }
    }

    movePieceDown() {
        this.piece.draw();

        if (!this.piece.goDownIfPossible()) {
            this.setPieceInBoard();
            this.piece = null;
        }
    }

    setPieceInBoard() {
        this.setPixelsInBoard();

        this.board.deleteAllFullRows();

        return false;
    }

    setPixelsInBoard() {
        this.board.addCellsToBoard(this.piece.getCoordinates());
    }

    isPieceEmpty() {
        return this.piece === null;
    }

    reset() {
        clearInterval(this.interval);
        this.interval = null;
        this.start();
    }

    isGameOver() {
        return !this.isPieceEmpty() && this.piece.endGame;
    }

    update() {
        this.changeScore(this.board.getPoints());
        this.changeLevel(this.board.getLevel());
        this.updateCells(this.board.getCells());
    }

    createNewPiece() {
        const newPieceRotation1 = new Piece(this.board);
        const newPieceRotation2 = newPieceRotation1.rotate();
        const newPieceRotation3 = newPieceRotation2.rotate();
        const newPieceRotation4 = newPieceRotation3.rotate();

        return this.getBestPiece([
            newPieceRotation1.evaluateBestPosition(),
            newPieceRotation2.evaluateBestPosition(),
            newPieceRotation3.evaluateBestPosition(),
            newPieceRotation4.evaluateBestPosition()
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
