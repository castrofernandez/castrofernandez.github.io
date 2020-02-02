const SIZE = 4;
const INITIAL_GAP = { x: 3, y: 0 };
const NUMBER_OF_MOVES = 35;

const MOVES = [
    ({ x, y }) => ({ x, y: y - 1 }), // UP
    ({ x, y }) => ({ x, y: y + 1 }), // DOWN
    ({ x, y }) => ({ x: x - 1, y }), // LEFT
    ({ x, y }) => ({ x: x + 1, y }) // RIGHT
];

const MOVE_LENGTH = MOVES.length;

const toIndex = ({ x, y }) => y * SIZE + x;

const getRandomIndex = () => Math.floor(Math.random() * MOVE_LENGTH);

const makeMovement = (gap) => MOVES[getRandomIndex()](gap);

const isIndexInBounds = (index) => index >= 0 && index < SIZE;

const isPositionInBounds = ({ x, y }) => isIndexInBounds(x) && isIndexInBounds(y);

const isInverseMove = ([x1, y1] = [], [x2, y2] = []) => x1 === y2 && y1 === x2;

const getPlain = (a, b) => [toIndex(a), toIndex(b)];

const isValid = (prev, next, gap) => isPositionInBounds(next) && !isInverseMove(getPlain(gap, next), prev);

const iterateMove = (prev, next, gap) => isValid(prev, next, gap) ? next : iterateMove(prev, makeMovement(gap), gap);

const getNextRandomMove = (previous = [], gap) => iterateMove(previous, { x: -1, y: -1 }, gap);

const generateCoordinates = () => Array(SIZE * SIZE).fill().map((_, i) => i + 1);

const generateMoves = (gap) => Array(NUMBER_OF_MOVES).fill().reduce((result, _) => {
    const previous = { ...gap };
    gap = getNextRandomMove(result[result.length - 1], gap);
    return [...result, getPlain(previous, gap)];
}, []);

export const swapPieces = (coordinates, [a, b]) => {
    const piece = coordinates[a];
    coordinates[a] = coordinates[b];
    coordinates[b] = piece;
};

const movePieces = (coordinates, moves) => moves.forEach(move => swapPieces(coordinates, move));

const generate = (coordinates, moves) => {
    movePieces(coordinates, moves);
    return { coordinates, moves: moves.reverse() };
};

export const shuffle = () => generate(generateCoordinates(), generateMoves(INITIAL_GAP));
