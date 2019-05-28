import CONSTANTS from '../actions/constants';

const scoreFilter = (state = 250, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_SCORE:
            return action.score;
        default:
            return state;
    }
};

export default scoreFilter;
