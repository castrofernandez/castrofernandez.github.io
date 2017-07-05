(function() {
  var PUZZLE_SPEED = 120;
  var PUZZLE_MOVEMENTS = 25;
  var GIF_SHOW_TIME = 5000;
  var SIZE = 4;
  var created = false;

  var puzzle = document.getElementById('puzzle');
  var gif = document.getElementById('gif');

  // Crear puzzle
  Scroll.subscribe({
    element: $('.cv-section.intro').first(),
    callback: function(section, offset) {
      if (created) {
        return;
      }

      createPuzzle(puzzle);
    }
  });

  // Eventos de redimension
  if (window.attachEvent) {
  	window.attachEvent('onresize', function() {
      createPuzzle(puzzle);
    });
  } else {
  	window.addEventListener('resize', function() {
      createPuzzle(puzzle);
    }, false);
  }

  // Evento clic
  if (window.attachEvent) {
    puzzle.attachEvent('onclick', function() {
      createPuzzle(puzzle);
    });

    gif.attachEvent('onclick', function() {
      createPuzzle(puzzle);
    });
  } else {
    puzzle.addEventListener('click', function() {
      createPuzzle(puzzle);
    }, false);

    gif.addEventListener('click', function() {
      createPuzzle(puzzle);
    }, false);
  }

  function getPuzzleWidth() {
    if (IsMobile.isMobile()) {
      return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    }

    return Math.round(puzzle.offsetWidth / SIZE) * SIZE;
  }

  // Creacion
  function createPuzzle(puzzle) {
    created = true;
    hideGif();

    puzzle.style.width = '';
    puzzle.style.height = '';

    var width = getPuzzleWidth();
    var imgWidth = width / SIZE;
    var timeout = null;

    puzzle.style.width = width + 'px';
    puzzle.style.height = width + 'px';

    var q = puzzle.querySelectorAll('img');
    var imgs = [];
    var pos = 0;

    for (var i = 0; i < SIZE; i++) {
      for (var j = 0; j < SIZE; j++) {
        var img = q[pos];
        imgs.push(img);
        img.style.top = i * imgWidth + 'px';
        img.style.left = j * imgWidth + 'px';
        img.className = 'positioned';

        pos++;
      }
    }

    var gap = {
      x: 0,
      y: 3
    };

    // Nos permite evitar que aleatoriamente movamos 2 veces seguidas la misma piece
    var previousGap = {
      x: -1,
      y: -1
    };

    var movedPieces = [];

    movePieceRandomly(imgs, gap, PUZZLE_MOVEMENTS, previousGap, movedPieces);

    // Se calcula piece aleatoria a mover
    function movePieceRandomly(imgs, gap, movements, previousGap, list) {
      var piece = {
        x: -1,
        y: -1
      };

      while (piece.x < 0 || piece.x > 3 || piece.y < 0 || piece.y > 3
            || (previousGap.x == piece.x && previousGap.y == piece.y)) {
        var x = Math.floor((Math.random() * 2)); // Entre 0 y 1
        var y = Math.floor((Math.random() * 2)); // Entre 0 y 1
        x = gap.x + (x == 0 ? -1 : 1);
        y = gap.y + (y == 0 ? -1 : 1);

        // Solo se cambia una coordenada (x o y)
        var random = Math.floor((Math.random() * 2));

        if (random == 0) {
          piece = {
            x: x,
            y: gap.y
          };
        }
        else {
          piece = {
            x: gap.x,
            y: y
          }
        }
      }

      movePiece(imgs, gap, piece, list);

      // Actualizar gap
      previousGap.x = gap.x;
      previousGap.y = gap.y;

      gap.x = piece.x;
      gap.y = piece.y;

      // Siguiente
      movements--;

      if (movements > 0) {
        movePieceRandomly(imgs, gap, movements, previousGap, list);
      } else {
        //puzzle.className = "puzzle piezas-colocadas";
        solvePuzzle(imgs, list);
      }
    }

    function solvePuzzle(imgs, list) {
      var length = list.length;

      if (length <= 0) {
        showGif();
        return;
      }

      var movement = list[length - 1];

      movePiece(imgs, movement.piece, movement.gap, null); // null porque no queremos almacenar el movement

      list.pop();

      timeout = setTimeout(function() {
        solvePuzzle(imgs, list);
      }, PUZZLE_SPEED);
    }

    function showGif() {
      gif.style.display = 'block';

      timeout = setTimeout(hideGif, GIF_SHOW_TIME);
    }

    function hideGif() {
      clear();

      gif.style.display = 'none';
    }

    function clear() {
      if (timeout) {
        clearTimeout(timeout);
      }
    }

    function movePiece(imgs, gap, piece, list) {
      var imgPos = SIZE * piece.x + piece.y;
      var gapPos = SIZE * gap.x + gap.y;

      var img = imgs[imgPos];
      var imgWidth = img.offsetWidth;
      img.style.top = gap.x * imgWidth + 'px';
      img.style.left = gap.y * imgWidth + 'px';

      // Permitar piezas en array
      imgs[imgPos] = imgs[gapPos];
      imgs[gapPos] = img;

      if (list) {
        list.push({
          gap: {
            x: gap.x,
            y: gap.y
          },
          piece: {
            x: piece.x,
            y: piece.y
          }
        });
      }
    }
  }
})();
