import CONSTANTS from '../actions/constants';

const levelFilter = (level = 1, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LEVEL:
            return action.level;
        default:
            return level;
    }
};

export default levelFilter;
