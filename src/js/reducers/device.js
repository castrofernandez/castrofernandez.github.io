import CONSTANTS from '../actions/constants';
import browserme from 'browserme';

const deviceFilter = (state = browserme.device.getDevice(), action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_DEVICE:
            return action.device;
        default:
            return state;
    }
};

export default deviceFilter;
