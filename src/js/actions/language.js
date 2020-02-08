import CONSTANTS from './constants';

export const changeLanguage = (language) => ({
    type: CONSTANTS.CHANGE_LANGUAGE,
    language
});
