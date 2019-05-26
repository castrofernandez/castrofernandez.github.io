export const SIZE = 4;

const goUp = ({ x, y }) => ({ x, y: y - 1 });

const goDown = ({ x, y }) => ({ x, y: y + 1 });

const goLeft = ({ x, y }) => ({ x: x - 1, y });

const goRight = ({ x, y }) => ({ x: x + 1, y });

export const MOVEMENTS = {
    UP: goUp,
    DOWN: goDown,
    LEFT: goLeft,
    RIGHT: goRight
};

export const MOVEMENT_LIST = Object.values(MOVEMENTS);

export const MOVEMENT_LENGTH = MOVEMENT_LIST.length;

export const INITIAL_GAP = { x: 3, y: 0 };

const toIndex = ({ x, y }) => y * SIZE + x;

const move = (position, handler) => {
    return handler(position);
};

const getMovement = (a, b) => {
    return [a, b];
};

const getNextMovement = (gap, handler) => {
    return getMovement(gap, move(gap, handler));
};

const assignCoordinates = (piece, { left, top }) => {
    piece.left = left;
    piece.top = top;
};

const swapPieces = (coordinates, i, j) => {
    const aux = { ...coordinates[i] };

    assignCoordinates(coordinates[i], coordinates[j]);
    assignCoordinates(coordinates[j], aux);
};

const getRandomIndex = () => {
    return Math.floor(Math.random() * MOVEMENT_LENGTH);
};

const getRandomMovement = () => MOVEMENT_LIST[getRandomIndex()];

const isIndexInBounds = index => index >= 0 && index < SIZE;

const isPositionInBounds = ({ x, y }) => {
    return isIndexInBounds(x) && isIndexInBounds(y);
};

const getNextRandomMovement = gap => {
    let next = getRandomMovement()(gap);

    while (!isPositionInBounds(next)) {
        next = getRandomMovement()(gap);
    }

    return next;
};

export default {
    toIndex,
    move,
    goUp,
    goDown,
    goLeft,
    goRight,
    getNextMovement,
    swapPieces,
    getNextRandomMovement
};
