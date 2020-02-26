import CONSTANTS from '../actions/constants';

const openedFilter = (state = false, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_OPENED:
            return action.opened;
        default:
            return state;
    }
};

export default openedFilter;
