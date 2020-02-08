import CONSTANTS from './constants';

export const changeScore = (score) => ({
    type: CONSTANTS.CHANGE_SCORE,
    score
});
