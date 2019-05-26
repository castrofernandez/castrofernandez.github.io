import Movement, { INITIAL_GAP, SIZE } from './Puzzle.movement';

const NUMBER_MOVEMENTS = 25;

const swap = (list, a, b) => {
    const aux = list[a];
    list[a] = list[b];
    list[b] = aux;
};

const equals = ([a1, a2], [b1, b2]) => a1 === b1 && a2 === b2;

const getMovement = (c1, c2) => [Movement.toIndex(c1), Movement.toIndex(c2)];

const normaliseMovement = (coordinates, [a, b]) => [
    coordinates[a],
    coordinates[b]
];

const getNextMovement = (previousGap, coordinates) => {
    const gap = Movement.getNextRandomMovement(previousGap);

    return {
        gap,
        gapIndex: Movement.toIndex(gap),
        previousGap: Movement.toIndex(previousGap),
        movement: normaliseMovement(coordinates, getMovement(previousGap, gap))
    };
};

const getNewGapPosition = (coordinates, gap, previousMovement = []) => {
    let movement = getNextMovement(gap, coordinates);

    while (equals(movement.movement, previousMovement)) {
        movement = getNextMovement(gap, coordinates);
    }

    return movement;
};

const generateCoordinates = () => Array(SIZE * SIZE).fill().map((_, i) => i);

const getInitialCoordinates = width => {
    return Array(SIZE).fill().reduce((result, _, i) => {
        return Array(SIZE).fill().reduce((result, _, j) => {
            return [...result, [j * width, i * width]];
        }, result);
    }, []);
};

const generateSequence = (width) => {
    const indices = generateCoordinates();
    const coordinates = getInitialCoordinates(width);
    let change = { gap: INITIAL_GAP };

    const movements = Array(NUMBER_MOVEMENTS).fill().map(_ => {
        change = getNewGapPosition(indices, change.gap, change.movement);
        swap(indices, change.previousGap, change.gapIndex);
        swap(coordinates, ...change.movement);
        return change.movement;
    });

    return { movements: movements.reverse(), coordinates };
};

export {
    getInitialCoordinates,
    generateSequence,
    NUMBER_MOVEMENTS
};
