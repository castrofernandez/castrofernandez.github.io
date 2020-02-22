import CONSTANTS from '../actions/constants';
import sizeme from 'sizeme';

const deviceFilter = (state = sizeme.getDeviceType(), action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_DEVICE:
            return action.device;
        default:
            return state;
    }
};

export default deviceFilter;
