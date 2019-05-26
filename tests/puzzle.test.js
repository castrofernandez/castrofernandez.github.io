import Movement, {
    MOVEMENTS
} from '../src/js/components/Puzzle/Puzzle.movement';

// const initialCoordinates = [
//     { id: 0, left: 0, top: 0 }, { id: 1, left: 1, top: 0 }, { id: 2, left: 2, top: 0 }, { id: 3, left: 3, top: 0 },
//     { id: 4, left: 0, top: 1 }, { id: 5, left: 1, top: 1 }, { id: 6, left: 2, top: 1 }, { id: 7, left: 3, top: 1 },
//     { id: 8, left: 0, top: 2 }, { id: 9, left: 1, top: 2 }, { id: 10, left: 2, top: 2 }, { id: 11, left: 3, top: 2 },
//     { id: 12, left: 0, top: 3 }, { id: 13, left: 1, top: 3 }, { id: 14, left: 2, top: 3 }, { id: 15, left: 3, top: 3 }
// ];

describe('Puzzle', () => {
    test('toIndex', () => {
        expect(Movement.toIndex({ x: 0, y: 0 })).toBe(0);
        expect(Movement.toIndex({ x: 2, y: 0 })).toBe(2);
        expect(Movement.toIndex({ x: 0, y: 1 })).toBe(4);
        expect(Movement.toIndex({ x: 1, y: 1 })).toBe(5);
        expect(Movement.toIndex({ x: 2, y: 2 })).toBe(10);
        expect(Movement.toIndex({ x: 3, y: 3 })).toBe(15);
    });

    test('goUp, goDown, goLeft, goRight', () => {
        expect(Movement.goUp({ x: 0, y: 1 })).toStrictEqual({ x: 0, y: 0 });
        expect(Movement.goDown({ x: 0, y: 1 })).toStrictEqual({ x: 0, y: 2 });
        expect(Movement.goLeft({ x: 1, y: 1 })).toStrictEqual({ x: 0, y: 1 });
        expect(Movement.goRight({ x: 0, y: 1 })).toStrictEqual({ x: 1, y: 1 });
    });

    test('move', () => {
        expect(Movement.move({ x: 0, y: 1 }, MOVEMENTS.UP)).toStrictEqual({
            x: 0,
            y: 0
        });
        expect(Movement.move({ x: 0, y: 1 }, MOVEMENTS.DOWN)).toStrictEqual({
            x: 0,
            y: 2
        });
        expect(Movement.move({ x: 1, y: 1 }, MOVEMENTS.LEFT)).toStrictEqual({
            x: 0,
            y: 1
        });
        expect(Movement.move({ x: 0, y: 1 }, MOVEMENTS.RIGHT)).toStrictEqual({
            x: 1,
            y: 1
        });
    });

    test('getMovement', () => {
        expect(
            Movement.getNextMovement({ x: 0, y: 1 }, MOVEMENTS.UP)
        ).toStrictEqual([{ x: 0, y: 1 }, { x: 0, y: 0 }]);
        expect(
            Movement.getNextMovement({ x: 0, y: 1 }, MOVEMENTS.DOWN)
        ).toStrictEqual([{ x: 0, y: 1 }, { x: 0, y: 2 }]);
        expect(
            Movement.getNextMovement({ x: 1, y: 1 }, MOVEMENTS.LEFT)
        ).toStrictEqual([{ x: 1, y: 1 }, { x: 0, y: 1 }]);
        expect(
            Movement.getNextMovement({ x: 0, y: 1 }, MOVEMENTS.RIGHT)
        ).toStrictEqual([{ x: 0, y: 1 }, { x: 1, y: 1 }]);
    });
});

describe('Puzzle: swapPieces', () => {
    const getCoordinates = () => [
        { id: 0, left: 0, top: 0 },
        { id: 1, left: 1, top: 0 },
        { id: 2, left: 2, top: 0 },
        { id: 3, left: 3, top: 0 }
    ];

    test('One swap', () => {
        const coordinates = getCoordinates();
        Movement.swapPieces(coordinates, 0, 1);

        expect(coordinates).toStrictEqual([
            { id: 0, left: 1, top: 0 },
            { id: 1, left: 0, top: 0 },
            { id: 2, left: 2, top: 0 },
            { id: 3, left: 3, top: 0 }
        ]);
    });

    test('Two swaps', () => {
        const coordinates = getCoordinates();
        Movement.swapPieces(coordinates, 0, 1);
        Movement.swapPieces(coordinates, 1, 2);

        expect(coordinates).toStrictEqual([
            { id: 0, left: 1, top: 0 },
            { id: 1, left: 2, top: 0 },
            { id: 2, left: 0, top: 0 },
            { id: 3, left: 3, top: 0 }
        ]);
    });

    test('Three swaps', () => {
        const coordinates = getCoordinates();
        Movement.swapPieces(coordinates, 0, 1);
        Movement.swapPieces(coordinates, 1, 2);
        Movement.swapPieces(coordinates, 2, 3);

        expect(coordinates).toStrictEqual([
            { id: 0, left: 1, top: 0 },
            { id: 1, left: 2, top: 0 },
            { id: 2, left: 3, top: 0 },
            { id: 3, left: 0, top: 0 }
        ]);
    });
});
