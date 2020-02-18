import CONSTANTS from './constants';

export const changeDevice = (device) => ({
    type: CONSTANTS.CHANGE_DEVICE,
    device
});
