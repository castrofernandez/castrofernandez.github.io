import CONSTANTS from './constants';

export const changePuzzle = (puzzle) => ({
    type: CONSTANTS.CHANGE_PUZZLE,
    puzzle
});
