import CONSTANTS from '../actions/constants';

const puzzleFilter = (state = true, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_PUZZLE:
            return action.puzzle;
        default:
            return state;
    }
};

export default puzzleFilter;
