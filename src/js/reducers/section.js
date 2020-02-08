import CONSTANTS from '../actions/constants';

const sectionFilter = (state = '', action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_SECTION:
            return action.section;
        default:
            return state;
    }
};

export default sectionFilter;
