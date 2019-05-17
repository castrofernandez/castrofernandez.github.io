(function() {
    if (IsMobile.isMobile()) {
      $('#level').html('01');
      return;
    }

    var TETRIS_NUM_ROWS = 12;
    var TETRIS_NUM_COLUMNS = 10;

    var TETRIS_START_FULL_ROWS = 4;
    var TETRIS_START_SCORE = 250;
    var TETRIS_ROW_BONUS = 50;

    var TETRIS_SPEED = 200;
    var TETRIS_DELAY = 1;

    var TETRIS_EMPTY_BLOCK_CLASS = 'tetris-block empty';
    var TETRIS_FULL_BLOCK_CLASS = 'tetris-block full';

    var TETRIS_CELL_MARGIN = 4;
    var TETRIS_CELL_WIDTH = 0;
    var TETRIS_CELL_HEIGHT = 0;

    var pieces = [
        [
            [
                [1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [0, 1, 0],
                [1, 1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [1, 0],
                [1, 0],
                [1, 1]
            ],
            [
                [0, 1],
                [0, 1],
                [1, 1]
            ]
        ],
        [
            [
                [1]
            ],
            [
                [1, 1, 1, 1]
            ],
            [
                [1, 0],
                [1, 1],
                [1, 0]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [0, 1],
                [1, 1],
                [1, 0]
            ],
            [
                [1, 0],
                [1, 1],
                [0, 1]
            ],
            [
                [1, 1, 1],
                [1, 0, 0]
            ],
            [
                [1, 0, 0],
                [1, 1, 1]
            ]
        ],
        [
            [
                [1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [1, 1],
                [0, 1],
                [0, 1]
            ],
            [
                [1, 1],
                [1, 0],
                [1, 0]
            ]
        ],
        [
            [
                [1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [0, 1],
                [1, 1],
                [0, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [0, 1],
                [1, 1],
                [1, 0]
            ],
            [
                [1, 0],
                [1, 1],
                [0, 1]
            ],
            [
                [0, 0, 1],
                [1, 1, 1]
            ],
            [
                [1, 1, 1],
                [0, 0, 1]
            ]
        ]
    ];

    var game = null;
    var tetris = document.getElementById('tetris');

    function startTetris() {
        if (tetris.style.display == 'none') {
            return;
        }

        if (game) {
            game.finish();
        }

        tetris.innerHTML = '';

        var size = getSize(tetris);
        var width = size.width;
        var height = size.height;

        TETRIS_CELL_WIDTH = (width - ((TETRIS_NUM_COLUMNS + 1) * TETRIS_CELL_MARGIN)) / TETRIS_NUM_COLUMNS;
        TETRIS_CELL_HEIGHT = (height - ((TETRIS_NUM_ROWS + 1) * TETRIS_CELL_MARGIN)) / TETRIS_NUM_ROWS;

        game = new Game();
        game.start();
    }

    function getSize(element) {
        var computedStyle = getComputedStyle(element);

        var elementHeight = element.clientHeight; // height with padding
        var elementWidth = element.clientWidth; // width with padding

        elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

        return {
            width: elementWidth,
            height: elementHeight
        };
    }

    setTimeout(startTetris, TETRIS_DELAY);

    if (window.attachEvent) {
        window.attachEvent('onresize', startTetris);
    } else {
        window.addEventListener('resize', startTetris, false);
    }

    function Game() {
        this.board = new Board();
        this.piece = null;

        var finished = false;

        this.start = start;
        this.finish = finish;
        this.loop = loop;
        this.createNewPiece = createNewPiece;
        this.getBestPiece = getBestPiece;
        this.showScore = showScore;

        this.score = document.getElementById("score");
        this.level = document.getElementById("level");

        var interval = null;

        function start() {
            this.board.generate();

            var t = this;

            interval = setInterval(function() {
                t.loop();
            }, TETRIS_SPEED);
        }

        function finish() {
            var finished = true;

            if (interval) {
                clearInterval(interval);
            }
        }

        function loop() {
            if (finished) {
                return;
            }

            if (this.piece == null) {
                this.piece = this.createNewPiece();
            }

            this.piece.show(true);

            if (!this.piece.goDown()) {
                this.piece = null;
            }

            var points = this.board.points;
            var level = this.board.level;
            this.showScore(points, level);

            if (this.piece != null && this.piece.endGame) {
                clearInterval(interval);
                interval = null;
                this.start();
            }
        }

        function showScore(points, level) {
            var score = points;
            var level = level;

            if (points < 1000) {
                score = "0" + points;
            }

            if (points < 100) {
                score = "0" + score;
            }

            if (points < 10) {
                score = "0" + score;
            }

            if (level < 10) {
                level = "0" + level;
            }

            this.level.innerHTML = level;
            this.score.innerHTML = score;
        }

        function createNewPiece() {
            var newPiece = new Piece(this.board);
            var newPieceRotation1 = newPiece.rotate();
            var newPieceRotation2 = newPieceRotation1.rotate();
            var newPieceRotation3 = newPieceRotation2.rotate();

            return getBestPiece([newPiece.evaluateBestPosition(), newPieceRotation1.evaluateBestPosition(),
                newPieceRotation2.evaluateBestPosition(), newPieceRotation3.evaluateBestPosition()
            ]);
        }

        function getBestPiece(pieces) {
            var bestPiece = pieces[0];

            for (var i = 1; i < pieces.length; i++) {
                if (pieces[i].bestResult > bestPiece.bestResult) {
                    bestPiece = pieces[i];
                }
            }

            return bestPiece;
        }
    }

    function Board() {
        this.TETRIS_NUM_ROWS = TETRIS_NUM_ROWS;
        this.TETRIS_NUM_COLUMNS = TETRIS_NUM_COLUMNS;
        this.cells = new Array();
        this.matrix = new Array();
        this.level = 1;
        this.points = 0;

        this.generate = generate;
        this.setPieceInBoard = setPieceInBoard;
        this.isPositionFull = isPositionFull;
        this.showPiece = showPiece;
        this.valueInPosition = valueInPosition;
        this.checkFullRow = checkFullRow;

        function generate() {
            this.points = TETRIS_START_SCORE;

            var tetris = document.getElementById('tetris');
            tetris.innerHTML = "";

            for (var i = 0; i < this.TETRIS_NUM_ROWS; i++) {
                this.cells[i] = new Array();
                this.matrix[i] = new Array();
                this.matrix[i][this.TETRIS_NUM_COLUMNS] = 0; // Contador

                var width = TETRIS_CELL_WIDTH + 'px';
                var height = TETRIS_CELL_HEIGHT + 'px';

                for (var j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
                    this.cells[i][j] = document.createElement('div');

                    (this.cells[i][j]).style.minWidth = width;
                    (this.cells[i][j]).style.minHeight = height;

                    if (i >= (this.TETRIS_NUM_ROWS - TETRIS_START_FULL_ROWS) && Math.floor(Math.random() * 3) != 0 && this.matrix[i][this.TETRIS_NUM_COLUMNS] < (this.TETRIS_NUM_COLUMNS - 1)) {
                        this.cells[i][j].className = TETRIS_FULL_BLOCK_CLASS;
                        this.matrix[i][j] = 1;
                        this.matrix[i][this.TETRIS_NUM_COLUMNS] = this.matrix[i][this.TETRIS_NUM_COLUMNS] + 1; // Contador
                    } else {
                        this.cells[i][j].className = TETRIS_EMPTY_BLOCK_CLASS;
                        this.matrix[i][j] = 0;
                    }

                    tetris.appendChild(this.cells[i][j]);
                }
            }
        }

        function setPieceInBoard(posX, posY) {
            this.matrix[posY][posX] = 1;

            this.matrix[posY][this.TETRIS_NUM_COLUMNS] = this.matrix[posY][this.TETRIS_NUM_COLUMNS] + 1; // Contador
        }

        function isPositionFull(posX, posY) {
            return this.valueInPosition(posX, posY) == 1;
        }

        function valueInPosition(posX, posY) {
            try {
                return this.matrix[posY][posX];
            } catch (e) {
                alert(posX + " " + posY);
            }
        }

        function showPiece(piece, mark) {
            for (var i = 0; i < piece.element.length; i++) {
                for (var j = 0; j < piece.element[i].length; j++) {
                    if (piece.element[i][j] == 1) {
                        this.cells[piece.y + i][piece.x + j].className = (mark == true ? TETRIS_FULL_BLOCK_CLASS : TETRIS_EMPTY_BLOCK_CLASS);
                    }
                }
            }
        }

        function checkFullRow(posY) {
            if (this.matrix[posY][this.TETRIS_NUM_COLUMNS] != this.TETRIS_NUM_COLUMNS) {
                return;
            }

            for (var i = posY; i > 0; i--) {
                for (var j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
                    this.matrix[i][j] = this.matrix[i - 1][j];
                    this.cells[i][j].className = this.cells[i - 1][j].className;
                }

                this.matrix[i][TETRIS_NUM_COLUMNS] = this.matrix[i - 1][TETRIS_NUM_COLUMNS]; // Contador
            }

            for (var j = 0; j < this.TETRIS_NUM_COLUMNS; j++) {
                this.matrix[0][j] = 0;
                this.cells[0][j].className = TETRIS_EMPTY_BLOCK_CLASS;
            }

            this.matrix[0][this.TETRIS_NUM_COLUMNS] = 0; // Contador

            this.points += TETRIS_ROW_BONUS;

            if (this.points >= 9999) {
                this.points = 0;
                this.level += 1;

                if (this.level > 99) {
                    this.level = 1;
                }
            }
        }
    }

    function Piece(board) {
        this.board = board;
        this.codePiece = Math.floor(Math.random() * 8);
        this.rotation = 0;
        this.element = pieces[0][this.codePiece];
        this.x = 4;
        this.y = 0;
        this.bestResult = 0;

        this.show = show;
        this.goDown = goDown;
        this.isPossibleContinue = isPossibleContinue;
        this.setPieceInBoard = setPieceInBoard;
        this.evaluateBestPosition = evaluateBestPosition;
        this.rotate = rotate;
        this.numberOfCompletedRows = numberOfCompletedRows;
        this.verticalPieceValue = verticalPieceValue;
        this.numberOfSpotsBelow = numberOfSpotsBelow;

        this.endGame = !this.isPossibleContinue(this.x, this.y);

        function show(mark) {
            this.board.showPiece(this, mark);
        }

        function goDown() {
            if (this.isPossibleContinue(this.x, this.y + 1)) {
                this.show(false); // Borramos el hueco que dejó en la posición anterior

                this.y = this.y + 1;

                this.show(true);

                return true;
            }

            this.setPieceInBoard();

            return false;
        }

        function setPieceInBoard() {
            for (var i = 0; i < this.element.length; i++) {
                for (var j = 0; j < this.element[i].length; j++) {
                    if (this.element[i][j] == 1) {
                        this.board.setPieceInBoard(this.x + j, this.y + i);
                    }
                }
            }

            for (var i = 0; i < this.element.length; i++) {
                this.board.checkFullRow(this.y + i);
            }
        }

        function isPossibleContinue(posX, posY) {
            if (posY >= this.board.TETRIS_NUM_ROWS || (posY + this.element.length - 1) >= this.board.TETRIS_NUM_ROWS || posX >= this.board.TETRIS_NUM_COLUMNS || posX < 0) {
                return false;
            }

            for (var i = 0; i < this.element.length; i++) {
                for (var j = 0; j < this.element[i].length; j++) {
                    if (this.board.isPositionFull(posX + j, posY + i) && this.element[i][j] == 1) {
                        return false;
                    }
                }
            }

            return true;
        }

        function numberOfCompletedRows(posX, posY) {
            var result = 0;
            var rowValue = 0;

            var i = this.board.TETRIS_NUM_ROWS - 1;

            while (i >= 0 && this.board.valueInPosition(this.board.TETRIS_NUM_COLUMNS, i) > 0) {
                rowValue = this.board.valueInPosition(this.board.TETRIS_NUM_COLUMNS, i);

                rowValue += this.verticalPieceValue(posY, i);

                if (rowValue == this.board.TETRIS_NUM_COLUMNS) {
                    result++;
                }

                i--;
            }

            return result * 100 + posY - this.numberOfSpotsBelow(posX, posY);
        }

        function verticalPieceValue(pieceStart, posY) {
            if (posY - pieceStart >= this.element.length || posY < pieceStart) {
                return 0;
            }

            var result = 0;

            for (var i = 0; i < this.element[0].length; i++) {
                result += this.element[posY - pieceStart][i];
            }

            return result;
        }

        function numberOfSpotsBelow(posX, posY) {
            var numSpots = 0;

            for (var i = 0; i < this.element.length; i++) {
                for (var j = 0; j < this.element[0].length; j++) {
                    if (this.element[i][j] == 1) {
                        if (i == this.element.length - 1 || this.element[i + 1][j] == 0) {
                            if (posY + i + 1 == this.board.TETRIS_NUM_ROWS || !this.board.isPositionFull(posX + j, posY + i + 1)) {
                                numSpots++;
                            }
                        }
                    }
                }
            }

            return numSpots;
        }

        function evaluateBestPosition() {
            var posY = 0;

            //var maxY = 0;
            var maxX = 0;
            var maxValue = 0;

            var value;

            for (var i = 0; i <= this.board.TETRIS_NUM_COLUMNS - this.element[0].length; i++) {
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

        function rotate() {
            var rotateAux = this.rotation + 1;

            if (rotateAux == 4) {
                rotateAux = 0;
            }

            var returnPiece = new Piece(this.board);
            returnPiece.element = pieces[rotateAux][this.codePiece];
            returnPiece.rotation = rotateAux;

            return returnPiece;
        }
    }
})();
